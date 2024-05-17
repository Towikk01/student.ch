package org.studench.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.studench.backend.data.CommentReply;

import java.util.List;

public interface CommentReplyRepo extends JpaRepository<CommentReply, Integer> {

    @Query("SELECT cr FROM CommentReply cr WHERE cr.comment.id = :commentId")
    List<CommentReply> findAllByCommentId(Long commentId);

}
