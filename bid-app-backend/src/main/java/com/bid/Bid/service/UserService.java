package com.bid.Bid.service;

import com.bid.Bid.domain.User;
import com.bid.Bid.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    public Iterable<User> findAll(){
        Iterable<User> all = userRepository.findAll();
        Iterator<User> iter = all.iterator();
        User tmp;
        while( iter.hasNext() ){
            tmp = iter.next();
            if ( tmp.getUsername().equals("admin")){
                iter.remove();
                break;
            }
        }
        return all;
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
        System.out.println("dewfewfw"+visited);
        saveOrUpdateUser(user);
    }


    public void delete(Long id){
        User user = findById(id);
        userRepository.delete(user);
    }
}
