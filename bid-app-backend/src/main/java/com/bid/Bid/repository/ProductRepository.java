package com.bid.Bid.repository;

import com.bid.Bid.domain.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {

    Product getById(Long id);
    Iterable<Product> findByCategoryAndIsActiveAndDeleted(String category,boolean active,boolean deleted);
    Iterable<Product> findByOwnerIdAndDeleted(Long owner_id,boolean deleted);

    Iterable<Product> findByIsActiveAndDeleted(boolean active,boolean deleted);

    Iterable<Product> findByOwnerIdAndIsActiveAndDeleted(Long owner_id, boolean active, boolean deleted);

    Iterable<Product> findByBestBidOwnerIdAndIsActiveAndDeleted(Long owner_id, boolean active, boolean deleted);

}
