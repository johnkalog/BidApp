package com.bid.Bid.web;

import com.bid.Bid.domain.Bid;
import com.bid.Bid.domain.Product;
import com.bid.Bid.service.BidService;
import com.bid.Bid.service.ProductService;
import com.bid.Bid.service.XMLService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/bids")
@CrossOrigin
public class BidController {

    @Autowired
    private BidService bidService;

    @Autowired
    private ProductService productService;

    @Autowired
    private XMLService xmlService;

    @PostMapping("")
    public ResponseEntity<?> addBid(@RequestBody Bid bid){
        String isNotValid = productService.changeProductValue(bid.getProductId(),bid.getOffer(),bid.getBidderId());
        if(isNotValid !=null) {
            return new ResponseEntity<String>(isNotValid, HttpStatus.OK);
        }
        bid.setBiddingDate(LocalDateTime.now());
        System.err.println(bid);
        Bid newBid = bidService.saveOrUpdateBid(bid);
        Product product = productService.findById(newBid.getProductId());
        product.setBestBidderName(productService.findUserNameById(bid.getBidderId()));
        productService.productUpdateByDate(product);
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
        //productService.allProductsUpdateByDate(products);
        return products;
    }


    @GetMapping("/lsh/{user_id}")
    public Iterable<Product> getProductsByLsh(@PathVariable Long user_id) {
        Iterable<Product> products = bidService.findByLsh(user_id);
        if(products == null) {
            return null;
        }
        productService.allProductsUpdateByDate(products);
        return products;
    }

    @DeleteMapping("/{bid_id}")
    public ResponseEntity<?> deleteBid(@PathVariable Long bid_id){
        bidService.delete(bid_id);
        return new ResponseEntity<String>("Bid deleted", HttpStatus.OK);
    }
}
