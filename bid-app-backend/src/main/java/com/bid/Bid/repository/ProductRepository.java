package com.bid.Bid.repository;

import com.bid.Bid.domain.Product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import java.util.Collection;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {

    Product getById(Long id);
    Iterable<Product> findByCategoryAndIsActiveAndDeleted(String category,boolean active,boolean deleted);
    Iterable<Product> findByOwnerIdAndDeleted(Long owner_id,boolean deleted);

    Iterable<Product> findByIsActiveAndDeleted(boolean active,boolean deleted);

    Iterable<Product> findByOwnerIdAndIsActiveAndDeleted(Long owner_id, boolean active, boolean deleted);

    Iterable<Product> findByBestBidOwnerIdAndIsActiveAndDeleted(Long owner_id, boolean active, boolean deleted);

    @Query(
            value = "SELECT * FROM Product p WHERE p.is_active = true AND (p.product_name LIKE ?1 OR p.description LIKE ?1 OR p.location LIKE ?1 OR p.category LIKE ?1)",
            nativeQuery = true)
    Collection<Product> findAllActiveUsersNative(String search);


    Page<Product> findAll(Pageable pageable);
}
