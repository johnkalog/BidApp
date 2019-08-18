package com.bid.Bid.service;

import com.bid.Bid.domain.User;
import com.bid.Bid.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveOrUpdateUser(User user){
        return userRepository.save(user);
    }

    public Iterable<User> findAll(){
        return userRepository.findAll();
    }

    public User findById(Long id){
        return userRepository.getById(id);
    }
    public User findByUsername(String username){
        return userRepository.getByUsername(username);
    }



    public void delete(Long id){
        User user = findById(id);
        userRepository.delete(user);
    }
}
