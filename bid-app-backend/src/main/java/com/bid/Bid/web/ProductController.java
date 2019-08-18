package com.bid.Bid.web;

import com.bid.Bid.domain.Product;
import com.bid.Bid.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/products")
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("")
    public ResponseEntity<?> addProduct(@RequestBody Product product){
        Product newProduct = productService.saveOrUpdateProduct(product);
        return new ResponseEntity<Product>(newProduct, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public Iterable<Product> getAllproducts(){
        return productService.findAll();
    }

    @GetMapping("/{product_id}")
    public ResponseEntity<?> getProductById(@PathVariable Long product_id){
        Product product = productService.findById(product_id);
        return new ResponseEntity<Product>(product, HttpStatus.OK);
    }

    @DeleteMapping("/{product_id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long product_id){
        productService.delete(product_id);
        return new ResponseEntity<String>("Product deleted", HttpStatus.OK);
    }
}