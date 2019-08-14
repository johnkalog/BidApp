package com.bid.Bid.web;

import com.bid.Bid.domain.User;
import com.bid.Bid.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("")
    public ResponseEntity<?> addUser(@RequestBody User user){
        User newUser = userService.saveOrUpdateUser(user);
        return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public Iterable<User> getAllusers(){
        return userService.findAll();
    }

    @GetMapping("/{user_id}")
    public ResponseEntity<?> getUserById(@PathVariable Long user_id){
        User user = userService.findById(user_id);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @DeleteMapping("/{user_id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long user_id){
        userService.delete(user_id);
        return new ResponseEntity<String>("User deleted", HttpStatus.OK);
    }
}
