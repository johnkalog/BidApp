package com.bid.Bid.repository;

import com.bid.Bid.domain.Bid;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BidRepository extends CrudRepository<Bid, Long> {

    Bid getById(Long id);
    Iterable<Bid> findByBidderId(Long bidderId);
    Iterable<Bid> findByProductId(Long productId);
}
