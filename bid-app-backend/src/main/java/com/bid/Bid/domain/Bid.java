package com.bid.Bid.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
public class Bid {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long offer;
    private Long productId;
    private Long bidderId;
    private LocalDateTime biddingDate;

    public Bid() {
    }

    public Bid(Long bidderId,Long offer,Long productId,LocalDateTime biddingDate ) {
        this.offer = offer;
        this.productId = productId;
        this.bidderId = bidderId;
        this.biddingDate = biddingDate;
    }

    @Override
    public String toString() {
        return "Bid{" +
                "id=" + id +
                ", bidderId='" + bidderId + '\'' +
                ", offer='" + offer + '\'' +
                ", productId=" + productId +
                ", biddingDate=" + biddingDate +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getOffer() {
        return offer;
    }

    public void setOffer(Long offer) {
        this.offer = offer;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Long getBidderId() {
        return bidderId;
    }

    public void setBidderId(Long bidderId) {
        this.bidderId = bidderId;
    }

    public LocalDateTime getBiddingDate() {
        return biddingDate;
    }

    public void setBiddingDate(LocalDateTime biddingDate) {
        this.biddingDate = biddingDate;
    }
}
