package com.bid.Bid.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String productName;
    private String productImage;
    private Long ownerId;
    private Long BestBid;
    private Long BestBidOwnerId;

    public Product() {
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

    public Long getownerId() {
        return ownerId;
    }

    public void setownerId(Long ownerid) {
        this.ownerId = ownerid;
    }

    public Long getBestBid() {
        return BestBid;
    }

    public void setBestBid(Long bestbid) {
        this.BestBid = bestbid;
    }

}
