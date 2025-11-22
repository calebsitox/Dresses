package com.web.lajose.domain.entities;

import java.util.Collection;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name; 
    
    @Column(unique = true)
    private String userName; 

    private String passwordHash;
    
    @Column(unique = true)
    private String email;

    private boolean enabled = true; 

    // Relación Many-to-Many: un usuario puede tener varios roles
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "users_roles", 
        joinColumns = @JoinColumn(
            name = "user_id", referencedColumnName = "id"), 
        inverseJoinColumns = @JoinColumn(
            name = "role_id", referencedColumnName = "id"))
    private Collection<Role> roles;


}