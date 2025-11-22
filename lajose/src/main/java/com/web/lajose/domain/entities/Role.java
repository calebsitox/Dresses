package com.web.lajose.domain.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Collection;

@Entity
@Table(name = "roles")
@Data

public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToMany(mappedBy = "roles")
    private Collection<User> users;
    
    private String description;

    // 🔑 Constructor vacío requerido por JPA
    public Role() {
    }

    // Constructor con parámetros (opcional)
    public Role(String name, String description) {
        this.name = name;
        this.description = description;
    }



}
