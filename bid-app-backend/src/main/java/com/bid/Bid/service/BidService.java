package com.bid.Bid.service;

import com.bid.Bid.domain.Bid;
import com.bid.Bid.repository.BidRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BidService {

    @Autowired
    private BidRepository BidRepository;

//    @Autowired
//    private ProductService productService;

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

    public void delete(Long id){
        Bid Bid = findById(id);
        BidRepository.delete(Bid);
    }


}
