package com.bid.Bid.service;

import com.bid.Bid.domain.Product;
import com.bid.Bid.domain.User;
import com.bid.Bid.repository.ProductRepository;
import com.bid.Bid.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    public Product saveOrUpdateProduct(Product product){
        return productRepository.save(product);
    }

    public Iterable<Product> findAll(){
        return productRepository.findAll();
    }

    public Product findById(Long id){
        return productRepository.getById(id);
    }

    public Iterable<Product> findByOwnerId(Long owner_id){
        return productRepository.findByOwnerIdAndDeleted(owner_id,false);
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
        User user = userRepository.getById(bidderId);
        product.setNumberOfBids(product.getNumberOfBids()+1);
        product.setBestBid(value);
        product.setBestBidOwnerId(bidderId);
        product.setBestBidderName(user.getUsername());
        if(product.getBuyPrice()!= null && product.getBuyPrice() <=  value) {
            product.setActive(false);
        }
        saveOrUpdateProduct(product);
        return null;
    }



    public void allProductsUpdateByDate(Iterable<Product> products) {
        for(Product product: products) {
            productUpdateByDate(product);
        }
    }


    public void productUpdateByDate(Product product) {
        if(product.isActive() && (product.getExpirationDate().isBefore(LocalDateTime.now()) || product.getExpirationDate().isEqual(LocalDateTime.now()))) {
            product.setActive(false);
            saveOrUpdateProduct(product);
        }
    }


    public void delete(Long id){
        Product product = findById(id);
        productRepository.delete(product);
    }

    public Iterable<Product> findByCategory(String category){
        return productRepository.findByCategoryAndIsActiveAndDeleted(category,true,false);
    }

    public Iterable<Product> findByActive() {
        return productRepository.findByIsActiveAndDeleted(true,false);
    }
}
