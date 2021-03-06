package com.bid.Bid.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.bid.Bid.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    User getById(Long id);
    User getByUsername(String username);
    Page<User> findAllByOrderByIdDesc(Pageable pageable);

}