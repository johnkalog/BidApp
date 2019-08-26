package com.bid.Bid.service;

import com.bid.Bid.domain.Bid;
import com.bid.Bid.domain.Product;
import com.bid.Bid.repository.BidRepository;
import com.fasterxml.jackson.databind.util.ArrayIterator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class BidService {

    @Autowired
    private BidRepository BidRepository;

    @Autowired
    private ProductService productService;

    public Bid saveOrUpdateBid(Bid Bid){
        return BidRepository.save(Bid);
    }

    public Iterable<Bid> findAll(){
        return BidRepository.findAll();
    }

    public Bid findById(Long id){
        return BidRepository.getById(id);
    }

    public Iterable<Bid> findByBidderId(Long bidderId){
        return BidRepository.findByBidderId(bidderId);
    }

    public Iterable<Bid> findByProductId(Long productId) {
        return BidRepository.findByProductId(productId);
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

    public Iterable<Product> findProduct(Long bidderId) {
//        System.err.println(BidRepository.findProduct());
        Iterable<Bid> bids = BidRepository.findByBidderId(bidderId);
        ArrayList<Product> products = new ArrayList<Product>();
        for(Bid value : bids) {
            Product product = productService.findById(value.getProductId());
            if (!products.contains(product)) {
                products.add(product);
            }
        }
//        for(Product value : products) {
//            System.err.println(value);
//        }
//        System.err.println(products);
        return products;
    }


    public void delete(Long id){
        Bid Bid = findById(id);
        BidRepository.delete(Bid);
    }


}
