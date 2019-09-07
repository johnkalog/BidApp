package com.bid.Bid;

import com.bid.Bid.domain.Category;
import com.bid.Bid.domain.User;
import com.bid.Bid.repository.UserRepository;
import com.bid.Bid.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BidApplication {

	public static void main(String[] args) {
		SpringApplication.run(BidApplication.class, args);
	}
//
//	@Autowired
//    CategoryRepository repoC;

	@Bean
	public CommandLineRunner demoData(UserRepository repoU) {
		return args -> {

			repoU.save(new User("admin","admin","admin","admin","admin@root","0","No","0","Administrator","Accepted"));



		};
	}

	@Bean
	public CommandLineRunner demoData2(CategoryRepository repoC) {
		return args -> {
			repoC.save(new Category("Electronics", (long) 0));
			repoC.save(new Category("Phone", (long) 1));
			repoC.save(new Category("Computers & Tablets", (long) 1));

			repoC.save(new Category("Fashion", (long) 0));
			repoC.save(new Category("Women's Clothing", (long) 4));
			repoC.save(new Category("Men's Clothing", (long) 4));

			repoC.save(new Category("Toys & Hobbies", (long) 0));
			repoC.save(new Category("Action Figures", (long) 7));
			repoC.save(new Category("Toy Models", (long) 7));


			repoC.save(new Category("Sporting Goods", (long) 0));
			repoC.save(new Category("Water Sports", (long) 10));
			repoC.save(new Category("Winter Sports", (long) 10));


			repoC.save(new Category("Other Categories", (long) 0));
			repoC.save(new Category("Musical Instruments", (long) 13));
			repoC.save(new Category("Art", (long) 13));
		};
	}
}
