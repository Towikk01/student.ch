package org.studench.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.studench.backend.data.Comment;

import java.util.List;

public interface CommentRepo extends JpaRepository<Comment, Long> {

    List<Comment> findAllByThreadId(Long threadId);
}
