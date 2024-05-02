package org.studench.backend.data;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;

@Data
@Table(name = "roles")
@Entity
@Getter
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "name")
    private String name;
//    ROLES: USER, MODERATOR, ADMIN
}
