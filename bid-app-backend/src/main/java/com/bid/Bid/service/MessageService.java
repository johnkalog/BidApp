package com.bid.Bid.service;

import com.bid.Bid.domain.Message;
import com.bid.Bid.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Iterator;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    public Message saveOrUpdateMessage(Message message){
        return messageRepository.save(message);
    }

    public Iterable<Message> findAll(){
        Iterable<Message> all = messageRepository.findAll();
        return all;
    }

    public Message findById(Long id){
        return messageRepository.getById(id);
    }


    public Iterable<Message> findByReceiverIdAndNotDeletedFromReceiver(Long receiverId){
        return messageRepository.getByReceiverIdAndDeletedFromReceiver(receiverId,false);
    }


    public Iterable<Message> findBySenderIdAndNotDeletedFromSender(Long senderId){
        return messageRepository.getBySenderIdAndDeletedFromSender(senderId,false);
    }

    public void delete(Long id){
        Message message = findById(id);
        messageRepository.delete(message);
    }


}
