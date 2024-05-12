package org.studench.backend.data;

import jakarta.persistence.*;
import org.hibernate.annotations.JdbcTypeCode;

import java.sql.Types;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "comments")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String text;
    @ManyToOne
    private Thread thread;
    @ManyToOne
    private User author;
    private LocalDateTime date;
    @JdbcTypeCode(Types.BINARY)
    @Column (nullable = true)
    private byte[] imageData;
}
