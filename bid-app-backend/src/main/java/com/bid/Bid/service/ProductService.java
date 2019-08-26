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

    public boolean changeProductValue(Long id,Long value,Long bidderId) {
        Product product = productRepository.getById(id);
        if(product.getBestBid() >= value) {
            return false;
        }
        //System.err.println(value);
        product.setBestBid(value);
        product.setBestBidOwnerId(bidderId);
        saveOrUpdateProduct(product);
        return true;
    }


    public void delete(Long id){
        Product product = findById(id);
        productRepository.delete(product);
    }

    public Iterable<Product> findByCategory(String category){
        return productRepository.findByCategory(category);
    }
}
