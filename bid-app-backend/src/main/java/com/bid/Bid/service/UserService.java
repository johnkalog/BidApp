package com.bid.Bid.service;

import com.bid.Bid.domain.Product;
import com.bid.Bid.domain.User;
import com.bid.Bid.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveOrUpdateUser(User user){
        return userRepository.save(user);
    }

    public Iterable<User> findAll(int k){
        Page<User>  page = userRepository.findAll(PageRequest.of(k, 9));
        Iterable<User> all = page.getContent();

        ArrayList<User> userArrayList = new ArrayList<>();
        for(User user : all) {
            if(user.getId() != 1) {
                userArrayList.add(user);
            }
        }
 
        return userArrayList;
    }

    public User findById(Long id){
        return userRepository.getById(id);
    }
    public User findByUsername(String username){
        return userRepository.getByUsername(username);
    }

    public void addViseted(Long product_id,Long user_id) {
        System.out.println(user_id);

        User user = userRepository.getById(user_id);
        ArrayList<Long> visited = user.getVisited();
        if(visited == null) {
            visited = new ArrayList<>();
        }
        visited.add(product_id);
        user.setVisited(visited);
        saveOrUpdateUser(user);
    }


    public void delete(Long id){
        User user = findById(id);
        userRepository.delete(user);
    }
}
