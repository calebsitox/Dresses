package com.web.lajose.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.lajose.domain.entities.User;
import com.web.lajose.domain.repository.RoleRepository;
import com.web.lajose.domain.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	RoleRepository roleRepository;	
	
	//NORMAL REGISTER
	
	
	public User resgisterUser(String name, String email, String password, List<Integer> roles) {
		User user = new User();
		
		return user;
	}
	
	
	//GOOGLE AND FACEBOOK REGISTER-LOGIN

}
