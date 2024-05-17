package org.studench.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.studench.backend.data.HideThread;

import java.util.Optional;

@Repository
public interface HideThreadRepo extends JpaRepository<HideThread, Long> {

    void deleteByThreadIdAndUserId(Long threadId, Long userId);
   Optional<HideThread> findByUserIdAndThreadId(Long userId, Long threadId);
}
