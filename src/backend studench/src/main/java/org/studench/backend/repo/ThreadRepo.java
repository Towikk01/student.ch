package org.studench.backend.repo;

import io.jsonwebtoken.security.Jwks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.studench.backend.data.Thread;

import java.util.List;
import java.util.Optional;

public interface ThreadRepo extends JpaRepository<Thread, Long> {

    @Query("select t from Thread t where t.theme.id = ?1")
    List<Optional<Thread>> findAllByThemeId(Long themeId);
}
