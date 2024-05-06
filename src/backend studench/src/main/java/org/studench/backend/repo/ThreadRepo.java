package org.studench.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.studench.backend.data.Thread;

public interface ThreadRepo extends JpaRepository<Thread, Long> {
}
