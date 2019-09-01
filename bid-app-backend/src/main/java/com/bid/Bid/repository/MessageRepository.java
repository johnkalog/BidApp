package com.bid.Bid.repository;

import com.bid.Bid.domain.Message;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends CrudRepository<Message, Long> {

    Message getById(Long id);
    Iterable<Message> getByReceiverIdAndDeletedFromReceiver(Long ReceiverId,boolean deletedFromReceiver);
    Iterable<Message> getBySenderIdAndDeletedFromSender(Long SenderId,boolean deletedFromSender);

}