package com.bid.Bid.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String productName;
    private String category;
    private String location;
    private String description;


    private String productImage;
    private Long ownerId;
    private Long BestBid;
    private Long firstBid;
    private Long buyPrice;
    private Long BestBidOwnerId;
    private Long numberOfBids;



    private LocalDate expirationDate;
    private LocalDate startedDate;
    private String status;


    public Product() {
    }
    public Product(String productName,Long BestBid) {
        this.productName = productName;
        this.BestBid = BestBid;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productname) {
        this.productName = productname;
    }

    public String getProductImage() {
        return productImage;
    }

    public void setProductImage(String image) {
        this.productImage = image;
    }

    public Long getBestBidOwnerId() {
        return BestBidOwnerId;
    }

    public void setBestBidOwnerId(Long BestBidOwnerId) {
        this.BestBidOwnerId = BestBidOwnerId;
    }

    public Long getBestBid() {
        return BestBid;
    }

    public void setBestBid(Long bestbid) {
        this.BestBid = bestbid;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(Long ownerId) {
        this.ownerId = ownerId;
    }

    public Long getFirstBid() {
        return firstBid;
    }

    public void setFirstBid(Long firstBid) {
        this.firstBid = firstBid;
    }

    public Long getBuyPrice() {
        return buyPrice;
    }

    public void setBuyPrice(Long buyPrice) {
        this.buyPrice = buyPrice;
    }

    public LocalDate getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(LocalDate expirationDate) {
        this.expirationDate = expirationDate;
    }

    public Long getNumberOfBids() {
        return numberOfBids;
    }

    public void setNumberOfBids(Long numberOfBids) {
        this.numberOfBids = numberOfBids;
    }

    public LocalDate getStartedDate() {
        return startedDate;
    }

    public void setStartedDate(LocalDate startedDate) {
        this.startedDate = startedDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
