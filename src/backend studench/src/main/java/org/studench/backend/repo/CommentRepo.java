package org.studench.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.studench.backend.data.Comment;

public interface CommentRepo extends JpaRepository<Comment, Long> {
}
