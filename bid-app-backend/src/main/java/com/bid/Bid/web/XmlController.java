package com.bid.Bid.web;

import com.bid.Bid.domain.Product;
import com.bid.Bid.domain.User;
import com.bid.Bid.service.XMLService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.bid.Bid.auth.LoginRequest;

import javax.validation.constraints.Null;

@RestController
@RequestMapping("/api/xml")
@CrossOrigin
public class XmlController {

    @Autowired
    private XMLService xmlService;

    @GetMapping("")
    public ResponseEntity<?> xmlParse() {
        Product newUser = xmlService.parseCourse();
        return new ResponseEntity<Product>(newUser, HttpStatus.CREATED);
    }
}