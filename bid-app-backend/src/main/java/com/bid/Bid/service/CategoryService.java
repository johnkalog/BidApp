package com.bid.Bid.service;

import com.bid.Bid.domain.Category;
import com.bid.Bid.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public Category saveOrUpdateCategory(Category category){
        return categoryRepository.save(category);
    }

    public Iterable<Category> findAll(){
        Iterable<Category> all = categoryRepository.findAll();
        return all;
    }

    public Category findById(Long id){
        return categoryRepository.getById(id);
    }


    public void delete(Long id){
        Category category = findById(id);
        categoryRepository.delete(category);
    }
}
