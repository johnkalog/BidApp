package com.bid.Bid.web;

import com.bid.Bid.domain.User;
import com.bid.Bid.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.bid.Bid.auth.LoginRequest;

import javax.validation.constraints.Null;

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

    @PostMapping("/auth")
    public ResponseEntity<?> getLogin(@RequestBody  LoginRequest loginRequest){
        User user = userService.findByUsername(loginRequest.getUsername());
        if(user==null) {
            return new ResponseEntity<String>("error: user not found", HttpStatus.OK);
        }
        String Userpass = user.getPassword();
        if(Userpass.equals(loginRequest.getPassword())) {
            return new ResponseEntity<User>(user , HttpStatus.OK);

        }
        else {
            return new ResponseEntity<String>("error: wrong password", HttpStatus.OK);

        }
//        return new ResponseEntity<String>("User found?", HttpStatus.OK);
    }

    @PostMapping("/new")
    public ResponseEntity<?> checkNew(@RequestBody  LoginRequest loginRequest){
        User user = userService.findByUsername(loginRequest.getUsername());
        if(user!=null) {
            return new ResponseEntity<String>("error: user already exists", HttpStatus.OK);
        }
        else {
            return new ResponseEntity<String>("", HttpStatus.OK);
        }
    }
}
