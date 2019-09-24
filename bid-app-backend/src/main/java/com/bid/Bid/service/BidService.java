package com.bid.Bid.service;

import com.bid.Bid.domain.Bid;
import com.bid.Bid.domain.Product;
import com.bid.Bid.domain.User;
import com.bid.Bid.repository.BidRepository;
import com.bid.Bid.repository.UserRepository;
//import info.debatty.java.lsh.LSHMinHash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

import static java.lang.StrictMath.sqrt;

@Service
public class BidService {

    @Autowired
    private BidRepository bidRepository;

    @Autowired
    private ProductService productService;
    @Autowired
    private UserRepository userRepository;

    public Bid saveOrUpdateBid(Bid bid){
        return bidRepository.save(bid);
    }

    public Iterable<Bid> findAll(){
        return bidRepository.findAll();
    }

    public Bid findById(Long id){
        return bidRepository.getById(id);
    }

    public Iterable<Bid> findByBidderId(Long bidderId){
        return bidRepository.findByBidderId(bidderId);
    }

    public Iterable<Bid> findByProductId(Long productId) {
        return bidRepository.findByProductId(productId);
    }

//    public Long getMaximum(Iterable<Bid> values,Long product_id) {
//        Long max = null;
//        for (Bid value : values) {
//            if (max == null || value.getOffer() > max) {
//                max = value.getOffer();
//            }
//        }
//        if(max == null) {
//            return null;
//        }
//        productService.changeProductValue(product_id,max);
//        return max;
//    }
    private int[] addArrays(int[] array1,ArrayList<Long> arrayList2) {
        if(arrayList2 == null) {
            return array1;
        }
        for(int i=0; i < arrayList2.size(); i++) {
            int pos = Math.toIntExact(arrayList2.get(i));
            if(pos < array1.length) {
                array1[pos] += 1;
            }
        }
        return array1;
    }

    public Iterable<Product> findByLsh(Long user_id) {
        User user = userRepository.getById(user_id);
        Iterable<Bid> bids = bidRepository.findAll();

        HashMap<Long,int[]> vects = new HashMap<>();

        Long maxId = (long) 0;
        for(Bid bid : bids) {
            if(bid.getProductId() > maxId) {
                maxId = bid.getProductId();
            }
            if(!vects.containsKey(bid.getBidderId())) {
                vects.put(bid.getBidderId(),null);
            }
        }

        if(!vects.containsKey(user_id)) {
            int[] vec = new int[Math.toIntExact(maxId+1)];
            System.out.println("User doesn't have any bid");
            Arrays.fill(vec,0);
            vec = addArrays(vec,user.getVisited());
            vects.put(user_id,vec);

        }

        for(Bid bid : bids) {
            if(vects.get(bid.getBidderId()) == null) {
                int[] vec = new int[Math.toIntExact(maxId+1)];
                //System.out.println(maxId +" " + bid.getProductId());
                Arrays.fill(vec,0);
                vec = addArrays(vec,user.getVisited());
                vec[Math.toIntExact(bid.getProductId())-1] += 1;
                vects.replace(bid.getBidderId(),vec);
            }
            else {
                int[] vec = vects.get(bid.getBidderId());
                vec[Math.toIntExact(bid.getProductId())-1] += 1;
            }
        }


//        for (Long key: vects.keySet()){
//            int[] value = vects.get(key);
//            System.out.println(key + " " + Arrays.toString(value));
//        }
//

        int sizeOfVectors = 5;
        int numberOfBuckets = 10;
        int stages = 4;
        System.out.println("-------------------");
//        LSHMinHash lsh = new LSHMinHash(stages, numberOfBuckets, sizeOfVectors);

//        int[] valueUser = lsh.hashSignature(vects.get(user.getId()));

        double maxSimilarity=0.0;
        ArrayList<Long> productIds = null;

        Long keyU = null;
        for (Long key: vects.keySet()){
            if(key == user.getId()) {
                continue;
            }
//            int[] valueTmp = lsh.hashSignature(vects.get(key));
            double similarity = cosineSimilarity(vects.get(user_id),vects.get(key));
            if(similarity == 1 && differences(vects.get(user.getId()),vects.get(key)).size() != 0 ) {
                maxSimilarity = 1;
                productIds = differences(vects.get(user_id),vects.get(key));
                keyU = key;
                break;
            }
            else if(maxSimilarity <= similarity && (productIds==null || productIds.size() <  differences(vects.get(user.getId()),vects.get(key)).size())) {
                maxSimilarity = similarity;
                productIds = differences(vects.get(user_id),vects.get(key));
                keyU = key;
            }
        }
        System.out.println(maxSimilarity);
        System.err.println(keyU +"  "+productIds);
        System.out.println(Arrays.toString(vects.get(user_id)));
        System.out.println(Arrays.toString(vects.get(keyU)));

        if(maxSimilarity == 0 || productIds.size() == 0) {
            return null;
        }

        ArrayList<Product> products = new ArrayList<>();
        for(int i=0; i < productIds.size() && i < 5 ;i++) {
            products.add(productService.findById(productIds.get(i)));
        }
        return products;
    }

    ArrayList<Long> differences(int[] array1,int[] array2) {
        ArrayList result = new ArrayList();
        int i;
        for(i=0; i<array1.length; i++) {
            if(array1[i]==0 && array2[i]!=0) {
                result.add((long) i);
            }
        }
        return result;
    }

    private double cosineSimilarity(int[] array1,int[] array2) {


        double numerator = 0.0;
        double denominator1 = 0.0;
        double denominator2 = 0.0;
        for (int column = 0; column < array1.length; column++) {
            numerator += (double) (array1[column] * array2[column]);
            denominator1  += Math.pow(array1[column],2);
            denominator2 += Math.pow(array2[column], 2);
        }
        if(numerator == 0) {
            return 0.0;
        }
        double cosinSimilarity = (numerator / (sqrt(denominator1) * sqrt(denominator2)));
        return cosinSimilarity;
    }

    public Iterable<Product> findProduct(Long bidderId) {
        Iterable<Bid> bids = bidRepository.findByBidderId(bidderId);
        ArrayList<Product> products = new ArrayList<Product>();
        for(Bid value : bids) {
            Product product = productService.findById(value.getProductId());
            if (!product.isDeleted() && !products.contains(product)) {
                productService.productUpdateByDate(product);
                product.setValue(value.getOffer());
                products.add(product);
            }
            else if (product.getValue() < value.getOffer()) {
                    product.setValue(value.getOffer());
            }
        }
        return products;
    }


    public void delete(Long id){
        Bid bid = findById(id);
        bidRepository.delete(bid);
    }


}
