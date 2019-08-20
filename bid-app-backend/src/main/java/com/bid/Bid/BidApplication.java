package com.bid.Bid;

import com.bid.Bid.domain.User;
import com.bid.Bid.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BidApplication {

	public static void main(String[] args) {
		SpringApplication.run(BidApplication.class, args);
	}

	@Bean
	public CommandLineRunner demoData(UserRepository repo) {
		return args -> {

			repo.save(new User("admin","admin307","admin","admin","admin@root","0","No","0","Administrator"));
		};
	}

}
