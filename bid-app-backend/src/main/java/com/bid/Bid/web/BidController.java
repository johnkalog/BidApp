package com.bid.Bid.web;

import com.bid.Bid.domain.Bid;
import com.bid.Bid.service.BidService;
import com.bid.Bid.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bids")
@CrossOrigin
public class BidController {

    @Autowired
    private BidService bidService;

    @Autowired
    private ProductService productService;

    @PostMapping("")
    public ResponseEntity<?> addBid(@RequestBody Bid bid){
        productService.changeProductValue(bid.getProductId(),bid.getOffer(),bid.getBidderId());
        Bid newBid = bidService.saveOrUpdateBid(bid);
        return new ResponseEntity<Bid>(newBid, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public Iterable<Bid> getAllbids(){
        return bidService.findAll();
    }

    @GetMapping("/bidder/{bider_id}")
    public Iterable<Bid> getBidByBidderId(@PathVariable Long bider_id){
        return bidService.findByBidderId(bider_id);
    }

    @GetMapping("/product/{product_id}")
    public Iterable<Bid> getBidByProductId(@PathVariable Long product_id){
        Iterable<Bid> bids = bidService.findByProductId(product_id);
        return bids;
    }

    @DeleteMapping("/{bid_id}")
    public ResponseEntity<?> deleteBid(@PathVariable Long bid_id){
        bidService.delete(bid_id);
        return new ResponseEntity<String>("Bid deleted", HttpStatus.OK);
    }
}
