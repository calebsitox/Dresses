package com.web.lajose.service;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
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

	// NORMAL REGISTER

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

		List<String> roleNames = toListRoles(roles);

		String token = this.jwtUtil.generateToken(userName, roleNames, email);

		return token;
	}

	public String loginUser(String email, String password) {

		String token = "";

		Optional<User> userOpt = this.userRepository.findByEmail(email);

		if (Objects.nonNull(userOpt)) {
			User user = userOpt.get();
			
			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

			if (encoder.matches(password, user.getPasswordHash())) {


				List<String> roleNames = toListRoles(user.getRoles());

				token = this.jwtUtil.generateToken(user.getUserName(), roleNames, email);
			}

		}

		return token;
	}

	private List<String> toListRoles(Collection<Role> roles) {
		List<String> roleNames = roles.stream().map(Role::getName).collect(Collectors.toList());
		return roleNames;
	}

	// GOOGLE AND FACEBOOK REGISTER-LOGIN

}
