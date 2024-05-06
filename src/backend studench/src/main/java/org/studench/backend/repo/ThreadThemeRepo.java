package org.studench.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.studench.backend.data.ThreadTheme;

public interface ThreadThemeRepo extends JpaRepository<ThreadTheme, Long> {
}
