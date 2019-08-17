package com.bid.Bid.repository;

import com.bid.Bid.domain.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {

    Product getById(Long id);
}
