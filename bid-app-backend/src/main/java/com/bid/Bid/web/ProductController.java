package com.bid.Bid.web;

import com.bid.Bid.domain.Bid;
import com.bid.Bid.domain.Product;
import com.bid.Bid.service.BidService;
import com.bid.Bid.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/products")
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private BidService bidService;

    @PostMapping("")
    public ResponseEntity<?> addProduct(@RequestBody Product product){
        if(product.getExpirationDate().isBefore(LocalDateTime.now()) || product.getExpirationDate().isEqual(LocalDateTime.now())) {
            return new ResponseEntity<String>("Wrong expiration date", HttpStatus.OK);
        }
        product.setStartedDate(LocalDateTime.now());
        product.setNumberOfBids(Long.valueOf(0));
        product.setBestBid(product.getFirstBid());
        product.setActive(true);
        product.setDeleted(false);
        Product newProduct = productService.saveOrUpdateProduct(product);
        return new ResponseEntity<Product>(newProduct, HttpStatus.CREATED);
    }

    @PostMapping("/delete/{product_id}")
    public ResponseEntity<?> delete(@PathVariable Long product_id){
        Product product = productService.findById(product_id);
        product.setDeleted(true);
        Product newProduct = productService.saveOrUpdateProduct(product);
        return new ResponseEntity<String>("Deleted", HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Product> getAllproducts(){
        Iterable<Product> products = productService.findAll();
        productService.allProductsUpdateByDate(products);
        return products;
    }

    @GetMapping("/allActive")
    public Iterable<Product> getAllActiveproducts(){
        Iterable<Product> products = productService.findByActive();
        productService.allProductsUpdateByDate(products);
        return products;
    }

    @GetMapping("/{product_id}")
    public ResponseEntity<?> getProductById(@PathVariable Long product_id){
        Product product = productService.findById(product_id);
        productService.productUpdateByDate(product);
        return new ResponseEntity<Product>(product, HttpStatus.OK);
    }

    @DeleteMapping("/{product_id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long product_id){
        productService.delete(product_id);
        return new ResponseEntity<String>("Product deleted", HttpStatus.OK);
    }

    @GetMapping("/category/{product_category}")
    public Iterable<Product> getProductByCategory(@PathVariable String product_category){
        Iterable<Product> products = productService.findByCategory(product_category);
        productService.allProductsUpdateByDate(products);
        return products;
    }


    @GetMapping("/uploaded/{seller_id}")
    public Iterable<Product> getProductsByOwnerId(@PathVariable Long seller_id){
        Iterable<Product> products = productService.findByOwnerId(seller_id);
        productService.allProductsUpdateByDate(products);
        return products;
    }


    @GetMapping("/dtd/{product_id}")
    public ResponseEntity<?> getXMLById(@PathVariable Long product_id){
        Product product = productService.findById(product_id);
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
        return new ResponseEntity<String>(response+body, HttpStatus.OK);
    }

}
