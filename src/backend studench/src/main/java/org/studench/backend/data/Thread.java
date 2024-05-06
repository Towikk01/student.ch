package org.studench.backend.data;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.annotations.Type;


import java.sql.Types;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Data
@Entity
@Table(name = "threads")
public class Thread {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String text;
    @OneToMany
    private List<Comment> comments;
    @ManyToOne
    private ThreadTheme theme;
    @ManyToOne
    private User author;
    private LocalDateTime date;
    @JdbcTypeCode(Types.BINARY)

    @Column (nullable = true)
    private byte[] imageData;

}
