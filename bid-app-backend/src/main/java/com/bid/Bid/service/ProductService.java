package com.bid.Bid.service;

import com.bid.Bid.domain.Product;
import com.bid.Bid.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product saveOrUpdateProduct(Product product){
        return productRepository.save(product);
    }

    public Iterable<Product> findAll(){
        return productRepository.findAll();
    }

    public Product findById(Long id){
        return productRepository.getById(id);
    }

    public String changeProductValue(Long id,Long value,Long bidderId) {
        Product product = productRepository.getById(id);
        if(product == null ) {
            return "Product doesn't exist";
        }
        else if(!product.isActive()) {
            return "Product has expired";
        }
        else if(bidderId == null){
            return "You are not allowed to bid as guest";
        }
        else if(bidderId == 1){
            return "You are not allowed to bid as Administrator";
        }
        else if(bidderId == product.getOwnerId()) {
            return "Owner can't bid to his product";
        }
        else if(product.getBestBid()!= null && product.getBestBid() >= value) {
            return "A better offer already exists";
        }
        //System.err.println(value);
        product.setNumberOfBids(product.getNumberOfBids()+1);
        product.setBestBid(value);
        product.setBestBidOwnerId(bidderId);
        saveOrUpdateProduct(product);
        return null;
    }


    public void delete(Long id){
        Product product = findById(id);
        productRepository.delete(product);
    }

    public Iterable<Product> findByCategory(String category){
        return productRepository.findByCategory(category);
    }
}
