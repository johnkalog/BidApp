package com.bid.Bid.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long senderId;
    private Long receiverId;
    private Long productId;

    private String message;
    private String subject;
    private String sender;
    private LocalDateTime messageDate;
    private boolean deletedFromSender;
    private boolean deletedFromReceiver;
    private boolean readFromReceiver;

    public Message() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Long getSenderId() {
        return senderId;
    }

    public void setSenderId(Long senderId) {
        this.senderId = senderId;
    }

    public Long getReceiverId() {
        return receiverId;
    }

    public void setReceiverId(Long receiverId) {
        this.receiverId = receiverId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public LocalDateTime getMessageDate() {
        return messageDate;
    }

    public void setMessageDate(LocalDateTime messageDate) {
        this.messageDate = messageDate;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public boolean isDeletedFromSender() {
        return deletedFromSender;
    }

    public void setDeletedFromSender(boolean deletedFromSender) {
        this.deletedFromSender = deletedFromSender;
    }

    public boolean isDeletedFromReceiver() {
        return deletedFromReceiver;
    }

    public void setDeletedFromReceiver(boolean deletedFromReceiver) {
        this.deletedFromReceiver = deletedFromReceiver;
    }

    public boolean isReadFromReceiver() {
        return readFromReceiver;
    }

    public void setReadFromReceiver(boolean readFromReceiver) {
        this.readFromReceiver = readFromReceiver;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }
}
