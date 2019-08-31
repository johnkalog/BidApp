package com.bid.Bid.repository;

import com.bid.Bid.domain.Message;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends CrudRepository<Message, Long> {

    Message getById(Long id);
    Iterable<Message> getByReceiverId(Long ReceiverId);
    Iterable<Message> getBySenderId(Long SenderId);

}