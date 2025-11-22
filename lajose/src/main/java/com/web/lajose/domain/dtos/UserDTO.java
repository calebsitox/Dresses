package com.web.lajose.domain.dtos;

import java.util.List;

import lombok.Data;

@Data
public class UserDTO {
	
	private String name;

	private String userName;
	
	private Boolean eneabled;
	
	private String password;
	
	private String email;
	
	private List<Integer> roles;
}
