package com.bid.Bid.web;

import com.bid.Bid.domain.Message;
import com.bid.Bid.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/messages")
@CrossOrigin
public class MessageController {

    @Autowired
    private MessageService messageService;

    @PostMapping("")
    public ResponseEntity<?> addMessage(@RequestBody Message message){
        Message newMessage = messageService.saveOrUpdateMessage(message);
        return new ResponseEntity<Message>(newMessage, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public Iterable<Message> getAllmessages(){
        return messageService.findAll();
    }

    @GetMapping("/get/{message_id}")
    public ResponseEntity<?> getMessageById(@PathVariable Long message_id){
        Message message = messageService.findById(message_id);
        return new ResponseEntity<Message>(message, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{message_id}")
    public ResponseEntity<?> deleteMessage(@PathVariable Long message_id){
        messageService.delete(message_id);
        return new ResponseEntity<String>("Message deleted", HttpStatus.OK);
    }

    @GetMapping("inbox/{receiver_id}")
    public Iterable<Message> getMessageByReceiverId(@PathVariable Long receiver_id){
        Iterable<Message> messages = messageService.findByReceiverId(receiver_id);
        return messages;
    }

    @GetMapping("sent/{sender_id}")
    public Iterable<Message> getMessageBySenderId(@PathVariable Long sender_id){
        Iterable<Message> messages = messageService.findBySenderId(sender_id);
        return messages;
    }

}
