package com.bid.Bid.domain;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String productName;
    private String category;
    private String location;
    @Column(length = 100000)
    private String description;


    private String productImage;
    private Long ownerId;
    private Long BestBid;
    private Long firstBid;
    private Long buyPrice;
    private Long bestBidOwnerId;
    private Long numberOfBids;
    private Long value; //temp for bidder
    private String bestBidderName; //temp for seller
    private String ownerName;


    private LocalDateTime expirationDate;
    private LocalDateTime startedDate;
    private boolean isActive;
    private boolean deleted;


    public Product() {
    }
    public Product(String productName,Long BestBid) {
        this.productName = productName;
        this.BestBid = BestBid;
    }

    public Product(String productName,Long BestBid, String category,Long firstBid,String location,LocalDateTime startedDate, LocalDateTime expirationDate, String description,String productImage,boolean isActive) {
        this.productName = productName;
        this.BestBid = BestBid;
        this.category = category;
        this.firstBid = firstBid;
        this.location = location;
        this.startedDate = startedDate;
        this.expirationDate = expirationDate;
        this.description = description;
        this.productImage = productImage;
        this.isActive = isActive;
    }


    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", productName='" + productName + '\'' +
                ", category=" + category +
                ", firstBid=" + firstBid +
                ", location=" + location +
                '}';
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
        return bestBidOwnerId;
    }

    public void setBestBidOwnerId(Long bestBidOwnerId) {
        this.bestBidOwnerId = bestBidOwnerId;
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

    public LocalDateTime getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(LocalDateTime expirationDate) {
        this.expirationDate = expirationDate;
    }

    public Long getNumberOfBids() {
        return numberOfBids;
    }

    public void setNumberOfBids(Long numberOfBids) {
        this.numberOfBids = numberOfBids;
    }

    public LocalDateTime getStartedDate() {
        return startedDate;
    }

    public void setStartedDate(LocalDateTime startedDate) {
        this.startedDate = startedDate;
    }


    public boolean isActive() { return isActive; }

    public void setActive(boolean active) {isActive = active; }

    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }

    public Long getValue() {
        return value;
    }

    public void setValue(Long value) {
        this.value = value;
    }

    public String getBestBidderName() {
        return bestBidderName;
    }

    public void setBestBidderName(String bestBidderName) {
        this.bestBidderName = bestBidderName;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }
}
