package com.bid.Bid.web;

import com.bid.Bid.domain.Bid;
import com.bid.Bid.domain.Product;
import com.bid.Bid.domain.Message;
import com.bid.Bid.service.BidService;
import com.bid.Bid.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.sql.rowset.spi.XmlReader;
import javax.swing.text.Document;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

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


        product.setCategory(product.getCategory().replace("\u00a0",""));
        product.setOwnerName(productService.findUserNameById(product.getOwnerId()));
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
        product.setActive(false);
        Product newProduct = productService.saveOrUpdateProduct(product);
        return new ResponseEntity<String>("Deleted", HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Product> getAllproducts(){
        Iterable<Product> products = productService.findAll();
        productService.allProductsUpdateByDate(products);
        return products;
    }

    @GetMapping("/notall/{page}")
    public Iterable<Product> getNotAllproducts(@PathVariable int page){
        Iterable<Product> products = productService.findNotAll(page);
        productService.allProductsUpdateByDate(products);
        return products;
    }

    @GetMapping("/notAllActive/{page}")
    public Iterable<Product> getNotAllActiveproducts(@PathVariable int page){
        Iterable<Product> products = productService.findNotAllActive(page);
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


    @GetMapping("/message/seller/{seller_id}")
    public Iterable<Product> getProductsInfoByOwnerId(@PathVariable Long seller_id){
        Iterable<Product> products = productService.findByOwnerIdAndIsNotActive(seller_id);
        productService.allProductsUpdateByDate(products);
        return products;
    }

    @GetMapping("/message/bidder/{bidder_id}")
    public Iterable<Product> getProductsInfoByBestBidderId(@PathVariable Long bidder_id){
        Iterable<Product> products = productService.findByBestBidderIdAndIsNotActive(bidder_id);
        productService.allProductsUpdateByDate(products);
        return products;
    }

    @GetMapping("/search/{str_search}")
    public Iterable<Product> getProductsBySearch(@PathVariable String str_search){
        Iterable<Product> products = productService.findBySearch(str_search);
        return products;
    }

    @GetMapping("/dtd/{product_id}")
    public ResponseEntity<?> getXMLById(@PathVariable Long product_id){
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
        return new ResponseEntity<String>(response+productService.findXmlById(product_id), HttpStatus.OK);
    }

    @GetMapping("/dtdAll")
    public ResponseEntity<?> getAllXMLById(){

        return new ResponseEntity<String>(productService.findAllXmlById(), HttpStatus.OK);
    }

    @GetMapping("/json/{product_id}")
    public ResponseEntity<?> getJSONById(@PathVariable Long product_id){
        Product product = productService.findById(product_id);
        Iterable<Bid> bids = bidService.findByProductId(product.getId());
        String strbid = "";
        for(Bid bid : bids) {
            if(strbid.length() > 0) {
                strbid += ",\n";
            }
            strbid += "\t{"
                    +"\t\"username\"= "+bid.getBidderId()+",\n"
                    +"\t\"bidding_date\": \""+bid.getBiddingDate() +"\",\n"
                    +"\t\"amount\": "+bid.getOffer()+"\n"
                    +"\t}\n";
        }
        String response = "{\n \"id\": "+product.getId()+",\n"
                +"\"username\": \""+product.getProductName()+"\",\n"
                +"\"category\": \""+product.getCategory()+"\",\n"
                +"\"first_bid\": "+product.getFirstBid()+",\n"
                +"\"number_of_bids\": "+product.getNumberOfBids()+",\n"
                +"\"bids\" : ["
                +strbid
                +"],\n"

                +"\"location\": \""+product.getLocation()+"\",\n"
                +"\"start_date\": \""+ product.getStartedDate()+"\",\n"
                +"\"end_date\": \""+product.getExpirationDate()+"\",\n"
                +"\"id\":"+product.getOwnerId()+",\n"
                +"\"description\": \""+product.getDescription()+"\",\n"
                +"\n" +
                "}";
        return new ResponseEntity<String>(response, HttpStatus.OK);
    }

    @GetMapping("/database")
    public void createDatabase() throws Exception {
        List<Integer> list = new ArrayList<Integer>();
        File file = new File("C:\\Users\\LEO\\Desktop\\tedi\\BidApp\\bid-app-backend\\src\\main\\java\\com\\bid\\Bid\\web\\data1.txt");
        BufferedReader br = new BufferedReader(new FileReader(file));

//        String st;
//        while ((st = br.readLine()) != null) {
//            System.out.println(st);
//        }

        String line;
        line = br.readLine();
        System.out.println(line);
        line = br.readLine();
        System.out.println(line);

        StringTokenizer Tok1 = new StringTokenizer(line,">");
        Tok1.nextToken(">");
        String productName = Tok1.nextToken("<").substring(1);
        System.out.println(productName);

        line = br.readLine();
        System.out.println(line);

        line = br.readLine();
        System.out.println(line);

        //        ((org.w3c.dom.Document) doc).getDocumentElement().normalize();
//        StringTokenizer Tok2 = new StringTokenizer(Tok1.nextToken(),"<");


//
//        System.out.println("Root element :" + ((org.w3c.dom.Document) doc).getDocumentElement().getNodeName());

    }

//print out the list

    @PostMapping("/uploadImage")
            public String uploadImage(@RequestParam("imageFile") MultipartFile imageFile) {
                String where= "";
                try {
                    where = productService.saveImage(imageFile);
                } catch (Exception e){
                    e.printStackTrace();
                    return "false";
                }
                return "./photos/" + where;
            }

}
