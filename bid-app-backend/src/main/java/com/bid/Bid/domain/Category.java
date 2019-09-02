package com.bid.Bid.domain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String categoryName;
    private Long fatherCategoryId;

    public Category() {
    }
    public Category(String categoryName, Long fatherCategoryId) {
        this.categoryName = categoryName;
        this.fatherCategoryId = Long.valueOf(fatherCategoryId);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public Long getFatherCategoryId() {
        return fatherCategoryId;
    }

    public void setFatherCategoryId(Long fatherCategoryId) {
        this.fatherCategoryId = fatherCategoryId;
    }
}