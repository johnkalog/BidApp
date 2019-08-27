package com.bid.Bid.web;

import com.bid.Bid.domain.Bid;
import com.bid.Bid.domain.Product;
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
        String isNotValid = productService.changeProductValue(bid.getProductId(),bid.getOffer(),bid.getBidderId());
        if(isNotValid !=null) {
            return new ResponseEntity<String>(isNotValid, HttpStatus.OK);
        }
        Bid newBid = bidService.saveOrUpdateBid(bid);
        Product product = productService.findById(newBid.getProductId());
        return new ResponseEntity<Product>(product, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public Iterable<Bid> getAllbids(){
        return bidService.findAll();
    }

    @GetMapping("/bidder/{bider_id}")
    public Iterable<Bid> getBidByBidderId(@PathVariable Long bider_id){
        return bidService.findByBidderId(bider_id);
    }

    @GetMapping("/bids/{product_id}")
    public Iterable<Bid> getBidByProductId(@PathVariable Long product_id){
        Iterable<Bid> bids = bidService.findByProductId(product_id);
        return bids;
    }

    @GetMapping("/products/{bidder_id}")
    public Iterable<Product> getProductsByBidderId(@PathVariable Long bidder_id) {
        Iterable<Product> products = bidService.findProduct(bidder_id);
        return products;
    }



    @DeleteMapping("/{bid_id}")
    public ResponseEntity<?> deleteBid(@PathVariable Long bid_id){
        bidService.delete(bid_id);
        return new ResponseEntity<String>("Bid deleted", HttpStatus.OK);
    }
}
