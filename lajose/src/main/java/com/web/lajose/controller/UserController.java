package com.web.lajose.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.web.lajose.domain.dtos.UserDTO;
import com.web.lajose.domain.entities.User;
import com.web.lajose.service.UserService;

@Controller
@RequestMapping("/api/user")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@PostMapping
	public ResponseEntity<?> registerUser(UserDTO userDTO) {
		
		User user = this.userService.resgisterUser(userDTO.getUserName(), userDTO.getEmail(), userDTO.getPassword(), userDTO.getRoles());
		
		return new ResponseEntity<>(user, HttpStatus.OK);
	}

}
