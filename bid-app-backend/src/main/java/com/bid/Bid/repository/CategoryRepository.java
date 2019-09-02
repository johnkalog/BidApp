package com.bid.Bid.repository;

import com.bid.Bid.domain.Category;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Long> {

    Category getById(Long id);
    Category findByCategoryName(String category);
    Iterable<Category> findByFatherCategoryId(Long father_category_id);
}