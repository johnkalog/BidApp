package com.bid.Bid.service;

import com.bid.Bid.domain.*;
import com.bid.Bid.repository.CategoryRepository;
import com.bid.Bid.repository.MessageRepository;
import com.bid.Bid.repository.ProductRepository;
import com.bid.Bid.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;


import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private BidService bidService;

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
            if(productList.size() >= 9) {
                break;
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

    public Iterable<Product> findNotAll(int k) {
        Page<Product> page =  productRepository.findAll(PageRequest.of(k, 9));
        Iterable<Product> nRecords = page.getContent();
        return nRecords;
    }

    public String saveImage(MultipartFile imageFile) throws Exception {
        String folder = "./../bid-app-frontend/src/components/photos/";
        byte[] bytes = imageFile.getBytes();
        Path path = Paths.get(folder + imageFile.getOriginalFilename());
        Files.write(path, bytes);
        return imageFile.getOriginalFilename();
    }

    public Iterable<Product> findNotAllActive(int k) {
        Page<Product> page =  productRepository.findByIsActive(PageRequest.of(k, 9),true);
        Iterable<Product> nRecords = page.getContent();
        return nRecords;

    }



        public String findAllXmlById() {
            String response = "<?xml version=\"1.0\"?>\n"
                    + "<!DOCTYPE note [\n"
                    + "<!ELEMENT Items (Item*)>\n"
                    +"<!ELEMENT Item (Name, Category+, Currently,Buy_Price?,First_Bid, Number_of_Bids,Bids, Location, Country, Started, Ends,Seller, Description)>\n"
                    +"<!ATTLIST Item ItemID CDATA #REQUIRED>\n"
                    +"<!ELEMENT Name (#PCDATA)>\n"
                    +"<!ELEMENT Category (#PCDATA)>\n"
                    +"<!ELEMENT Currently (#PCDATA)>\n"
                    +"<!ELEMENT Buy_Price (#PCDATA)>\n"
                    +"<!ELEMENT First_Bid (#PCDATA)>\n"
                    +"<!ELEMENT Number_of_Bids (#PCDATA)>\n"
                    +"<!ELEMENT Bids (Bid*)>\n"
                    +"<!ELEMENT Bid (Bidder, Time, Amount)>\n"
                    +"<!ATTLIST Bidder UserID CDATA #REQUIRED Rating CDATA\n"
                    +"#REQUIRED>\n"
                    +"<!ELEMENT Bidder (Location?, Country?)>\n"
                    +"<!ELEMENT Time (#PCDATA)>\n"
                    +"<!ELEMENT Amount (#PCDATA)>\n"
                    +"<!ELEMENT Location (#PCDATA)>\n"
                    +"<!ATTLIST Location Latitude CDATA #IMPLIED\n"
                    +"Longitude CDATA #IMPLIED>\n"
                    +"<!ELEMENT Country (#PCDATA)>\n"
                    +"<!ELEMENT Started (#PCDATA)>\n"
                    +"<!ELEMENT Ends (#PCDATA)>\n"
                    +"<!ELEMENT Seller EMPTY>\n"
                    +"<!ATTLIST Seller UserID CDATA #REQUIRED\n"
                    +" Rating CDATA #REQUIRED>\n"
                    +"<!ELEMENT Description (#PCDATA)>\n"
                    +"]>\n";
            Iterable<Product> products = findAll();
            for(Product product : products) {
                response += findXmlById(product.getId());
            }

            return response;
        }
        public String findXmlById(Long product_id) {
        Product product = findById(product_id);
        Iterable<Bid> bids = bidService.findByProductId(product.getId());
        String strbid = "";
        for(Bid bid : bids) {
            strbid += "\t<Bid>"
                    +"\t\t<Bidder Rating=\"229\" UserID=\""+bid.getBidderId()+"\""+">\n"
                    +"<Location>Sydney</Location>\n"
                    +"<Country>Australia</Country>\n"
                    +"\t\t</Bidder>\n"
                    +"<Time>"+bid.getBiddingDate() +"</Time>\n"
                    +"<Amount>"+bid.getOffer()+"</Amount>\n"
                    +"\t</Bid>\n";
        }

        String body = "<Item ItemID=\""+product.getId()+"\">\n"
                +"<Name>"+product.getProductName()+"</Name>\n"
                +"<Category>"+product.getCategory()+"</Category>\n"
                +"<First_Bid>"+product.getFirstBid()+"</First_Bid>\n"
                +"<Number_of_Bids>"+product.getNumberOfBids()+"</Number_of_Bids>\n"
                +"<Bids>\n"
                +strbid
                +"\t</Bids>\n"
                +"<Location>"+product.getLocation()+"</Location>\n"
                +"<Country>USA</Country>\n"
                +"<Started>"+ product.getStartedDate()+"</Started>\n"
                +"<Ends>"+product.getExpirationDate()+"</Ends>\n"
                +"<Seller Rating=\"117\" UserID=\""+product.getOwnerId()+"\" />\n"
                +"<Description>"+product.getDescription()+"</Description>\n"
                +"</Item>\n";
        return body;

    }

}
