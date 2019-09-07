package com.bid.Bid.service;

import com.bid.Bid.domain.Category;
import com.bid.Bid.domain.Message;
import com.bid.Bid.domain.Product;
import com.bid.Bid.domain.User;
import com.bid.Bid.repository.CategoryRepository;
import com.bid.Bid.repository.MessageRepository;
import com.bid.Bid.repository.ProductRepository;
import com.bid.Bid.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private MessageRepository messageRepository;

//    HashMap<String, ArrayList<String> > catMap = new HashMap<String, ArrayList<String>>() {{ put("Electronics",); put("Electronics",null ); }};

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

    public String findUserNameById(Long Id) {
        return  userRepository.getById(Id).getUsername();
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

    public Iterable<Product> findBySearch(String search) {
        return productRepository.findAllActiveUsersNative("%"+search+"%");
    }


    public void productUpdateByDate(Product product) {
        if(product.isActive() && (product.getExpirationDate().isBefore(LocalDateTime.now()) || product.getExpirationDate().isEqual(LocalDateTime.now()))) {
            product.setActive(false);
            Message message = new Message(product.getOwnerId(),product.getBestBidOwnerId(),product.getId(),"Congratulations",product.getProductName(),product.getOwnerName(),LocalDateTime.now(),false,false,false);
            messageRepository.save(message);
            saveOrUpdateProduct(product);
        }
    }


    public void delete(Long id){
        Product product = findById(id);
        productRepository.delete(product);
    }

    public Iterable<Product> findByCategory(String category){
        Category tempCategory = categoryRepository.findByCategoryName(category);
        ArrayList<Category> categoryList  = new ArrayList<Category>();
        ArrayList<Product> productList = new ArrayList<Product>();

        categoryList.add(tempCategory);

        int i = 0;
        while(i<categoryList.size()){
            Category addCategory = categoryList.get(i);
            //System.err.println(addCategory.getCategoryName());

            Iterable<Category> newCategories = categoryRepository.findByFatherCategoryId(addCategory.getId());
            for(Category copyCategory : newCategories) {
                categoryList.add(copyCategory);
            }

            Iterable<Product> products = productRepository.findByCategoryAndIsActiveAndDeleted(addCategory.getCategoryName(),true,false);
            for(Product addProduct : products) {
                productList.add(addProduct);
            }
            i++;
        }

        return productList;
    }

    public Iterable<Product> findByActive() {
        return productRepository.findByIsActiveAndDeleted(true,false);
    }

    public Iterable<Product> findByOwnerIdAndIsNotActive(Long seller_id) {
        return productRepository.findByOwnerIdAndIsActiveAndDeleted(seller_id,false,false);
    }

    public Iterable<Product> findByBestBidderIdAndIsNotActive(Long bidder_id) {
        return productRepository.findByBestBidOwnerIdAndIsActiveAndDeleted(bidder_id,false,false);
    }
}
