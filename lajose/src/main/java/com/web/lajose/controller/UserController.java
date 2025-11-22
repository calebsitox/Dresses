package com.web.lajose.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.web.lajose.domain.dtos.UserDTO;
import com.web.lajose.service.UserService;

@Controller
@RequestMapping("/api/user")
public class UserController {

	@Autowired
	UserService userService;

	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody UserDTO userDTO) {

		String token = this.userService.resgisterUser(userDTO.getName(), userDTO.getUserName(), userDTO.getEmail(),
				userDTO.getPassword(), userDTO.getRoles());

		return new ResponseEntity<>(token, HttpStatus.CREATED);
	}
	
	
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody UserDTO userDTO) {

		String token = this.userService.loginUser(userDTO.getEmail(), userDTO.getPassword());

		return new ResponseEntity<>(token, HttpStatus.OK);
	}

}
