package com.bid.Bid.service;

import com.bid.Bid.domain.Bid;
import com.bid.Bid.domain.Product;
//import com.attacomsian.xml.models.Student;
import com.bid.Bid.domain.User;
import com.bid.Bid.repository.BidRepository;
import com.bid.Bid.repository.CategoryRepository;
import com.bid.Bid.repository.ProductRepository;
import com.bid.Bid.repository.UserRepository;
//import info.debatty.java.lsh.LSHMinHash;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import java.io.StringReader;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;


@Service
public class XMLService {

    private final Logger logger = LoggerFactory.getLogger(XMLService.class);

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private BidRepository bidRepository;
    @Autowired
    private CategoryRepository categoryRepository;

    public Product parseCourse() {

        Product product = null;
        Bid bid = null;
        try {
         for(int k =0;k<1;k++) {
             // fake end point that returns XML response
             String URL = "C:\\Users\\john\\Desktop\\BidApp\\bid-app-backend\\src\\main\\java\\com\\bid\\Bid\\web\\ebay-data\\items-" + k + ".xml";
             System.out.println(URL);

             DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
             DocumentBuilder builder = factory.newDocumentBuilder();
             Document doc = builder.parse(URL);

             System.out.println("doc "+k);
             // normalize XML response
             doc.getDocumentElement().normalize();
             //System.out.println(doc.getElementsByTagName("Item").item(0).getAttributes().getNamedItem("ItemID"));

             NodeList itemList = doc.getElementsByTagName("Item");
             for (int i = 0; i < itemList.getLength(); i++) {

                 Node items = itemList.item(i);
                 //System.err.println("length " + itemList.getLength());

                 if (items.getNodeType() == Node.ELEMENT_NODE) {
                     Element itemElem = (Element) items;

                     Long productId = Long.parseLong(itemList.item(i).getAttributes().getNamedItem("ItemID").getTextContent());
                     //read product details first
                     //System.err.println("here");

                     String sellerName = itemElem.getElementsByTagName("Seller").item(0).getAttributes().getNamedItem("UserID").getTextContent();
                     if (userRepository.getByUsername(sellerName) == null) {
                         User user = new User(
                                 sellerName,
                                 sellerName,
                                 "Seller",
                                 "Active"
                         );
                         userRepository.save(user);
                     }
                     Random rand = new Random();
                     int rand_int = rand.nextInt(8);
                     int rand_int2 = rand.nextInt(14);
                     product = new Product(
                             itemElem.getElementsByTagName("Name").item(0).getTextContent(),
                             ((long) Double.parseDouble(doc.getElementsByTagName("Currently").item(0).getTextContent().substring(1).replace(",",""))),
//                             itemElem.getElementsByTagName("Category").item(0).getTextContent(),
                             categoryRepository.getById((long) 1+rand_int2).getCategoryName(),
                             ((long) Double.parseDouble(itemElem.getElementsByTagName("First_Bid").item(0).getTextContent().substring(1).replace(",",""))),
                             itemElem.getElementsByTagName("Location").item(0).getTextContent(),
                             LocalDateTime.parse(itemElem.getElementsByTagName("Started").item(0).getTextContent(), DateTimeFormatter.ofPattern("MMM-dd-yy HH:mm:ss").withLocale(Locale.ENGLISH)),
                             LocalDateTime.parse(itemElem.getElementsByTagName("Ends").item(0).getTextContent(), DateTimeFormatter.ofPattern("MMM-dd-yy HH:mm:ss").withLocale(Locale.ENGLISH)),
                             itemElem.getElementsByTagName("Description").item(0).getTextContent(),
                             "./products/product_"+(rand_int+1)+".png",
                             true
                     );


                     productRepository.save(product);
                     //System.out.println(product);

                     NodeList nodeList = itemElem.getElementsByTagName("Bid");
                     for (int j = 0; j < nodeList.getLength(); j++) {

                         Node node = nodeList.item(j);
                         //System.out.println("node "+node.getTextContent());
                         if (node.getNodeType() == Node.ELEMENT_NODE) {
                             Element elem = (Element) node;

                             String bidderName = elem.getElementsByTagName("Bidder").item(0).getAttributes().getNamedItem("UserID").getTextContent();
                             if (userRepository.getByUsername(bidderName) == null) {
                                 User user = new User(
                                         bidderName,
                                         bidderName,
                                         "Seller",
                                         "Active"
                                 );
                                 userRepository.save(user);
                             }


                             //                    System.out.println("elem " + elem.getElementsByTagName("Location").item(0).getTextContent());
                             bid = new Bid(
                                     userRepository.getByUsername(bidderName).getId(),
                                     (long) Double.parseDouble(elem.getElementsByTagName("Amount").item(0).getTextContent().substring(1).replace(",","")),
                                     product.getId(),
                                     //                            userRepository.getByUsername(elem.getElementsByTagName("Bidder").item(0).getAttributes().getNamedItem("UserID").getTextContent()).getId(),
                                     LocalDateTime.parse(elem.getElementsByTagName("Time").item(0).getTextContent(), DateTimeFormatter.ofPattern("MMM-dd-yy HH:mm:ss").withLocale(Locale.ENGLISH))
                             );
                             //System.out.println(bid);

                             bidRepository.save(bid);
                         }
                     }

                 }


             }
             //read students list
//            NodeList nodeList = doc.getElementsByTagName("student");
//
//            //create an empty list for students
//            List<Student> students = new ArrayList<>();
//
//            //loop all available student nodes
//            for (int i = 0; i < nodeList.getLength(); i++) {
//
//                Node node = nodeList.item(i);
//
//                if(node.getNodeType() == Node.ELEMENT_NODE) {
//                    Element elem = (Element) node;
//                    Student student = new Student(
//                            Integer.parseInt(elem.getElementsByTagName("id").item(0).getTextContent()),
//                            elem.getElementsByTagName("first_name").item(0).getTextContent(),
//                            elem.getElementsByTagName("last_name").item(0).getTextContent(),
//                            elem.getElementsByTagName("avatar").item(0).getTextContent()
//                    );
//                    students.add(student);
//                }
//            }
//
//            //set students in product
//            product.setStudents(students);
         }
        } catch (Exception ex) {
            System.err.println(ex);
            logger.error(ex.getMessage());
        }

        return product;
    }


    public void findByLsh() {
        Iterable<Bid> bids = bidRepository.findAll();

        HashMap<Long,int[]> vects = new HashMap<>();

        System.out.println("Maxxx is not");


        Long maxId = bidRepository.findMaxItem();

        System.out.println("Maxxx is "+maxId);



//
//        Long maxId = (long) 0;
//        for(Bid bid : bids) {
//            if(bid.getProductId() > maxId) {
//                maxId = bid.getProductId();
//            }
//            if(!vects.containsKey(bid.getBidderId())) {
//                vects.put(bid.getBidderId(),null);
//            }
//        }
//
//        for(Bid bid : bids) {
//            if(vects.get(bid.getBidderId()) == null) {
//                int[] vec = new int[Math.toIntExact(maxId+1)];
//                //System.out.println(maxId +" " + bid.getProductId());
//                Arrays.fill(vec,0);
//                vec[Math.toIntExact(bid.getProductId())-1] += 1;
//                vects.replace(bid.getBidderId(),vec);
//            }
//            else {
//                int[] vec = vects.get(bid.getBidderId());
//                vec[Math.toIntExact(bid.getProductId())-1] += 1;
//            }
//        }
//
//
//        for (Long key: vects.keySet()){
//            int[] value = vects.get(key);
//            System.out.println(key + " " + Arrays.toString(value));
//        }
//
//
//        int sizeOfVectors = 5;
//        int numberOfBuckets = 10;
//        int stages = 4;
//        System.out.println("-------------------");
//        LSHMinHash lsh = new LSHMinHash(stages, numberOfBuckets, sizeOfVectors);
//        for (Long key: vects.keySet()){
//            int[] value = vects.get(key);
//            int[] firstHash = lsh.hashSignature(value);
//            System.out.println(key + " " + Arrays.toString(firstHash));
//        }
    }
}