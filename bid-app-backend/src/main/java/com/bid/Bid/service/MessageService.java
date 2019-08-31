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


    public Iterable<Message> findByReceiverId(Long receiverId){
        return messageRepository.getByReceiverId(receiverId);
    }


    public Iterable<Message> findBySenderId(Long senderId){
        return messageRepository.getBySenderId(senderId);
    }

    public void delete(Long id){
        Message message = findById(id);
        messageRepository.delete(message);
    }
}
