package com.web.lajose;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories 
public class LajoseApplication {

	public static void main(String[] args) {
		SpringApplication.run(LajoseApplication.class, args);
	}

}
