package com.web.lajose.service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.web.lajose.config.util.JwtUtil;
import com.web.lajose.domain.entities.Role;
import com.web.lajose.domain.entities.User;
import com.web.lajose.domain.repository.RoleRepository;
import com.web.lajose.domain.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	RoleRepository roleRepository;	
	
	@Autowired
	JwtUtil jwtUtil;
	
	//NORMAL REGISTER
	
	
	public String resgisterUser(String name, String userName, String email, String password, List<Integer> rolesIds) {
		User user = new User();
		user.setName(name);
		user.setUserName(userName);
		user.setEmail(email);
		user.setEnabled(true);
		user.setPasswordHash(new BCryptPasswordEncoder().encode(password));
		
		Set<Role> roles = rolesIds.stream()
		            .map(roleId -> roleRepository.findById(roleId)
		                .orElseThrow(() -> new RuntimeException("Role not found: " + roleId)))
		            .collect(Collectors.toSet());
		
		user.setRoles(roles);
		userRepository.save(user);
		
	    List<String> roleNames = roles.stream()
	            .map(Role::getName)
	            .collect(Collectors.toList());

		
		String token = this.jwtUtil.generateToken(userName, roleNames, email);
		
		return token;
	}
	
	
	
	
	//GOOGLE AND FACEBOOK REGISTER-LOGIN

}
