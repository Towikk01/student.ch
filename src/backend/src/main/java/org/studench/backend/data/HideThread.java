package org.studench.backend.data;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table
@Data
public class HideThread {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    private Thread thread;
    @ManyToOne
    private User user;
}
