package com.web.lajose.domain.dtos;

import java.util.List;

import lombok.Data;

@Data
public class UserDTO {

	private String userName;
	
	private String password;
	
	private String email;
	
	private List<Integer> roles;
}
