package org.studench.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.studench.backend.data.Comment;
import org.studench.backend.dto.CommentDto;
import org.studench.backend.services.CommentService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/comment")
public class CommentController {
    private final CommentService commentService;

    @PostMapping("{threadId}/create")
    public void createComment(CommentDto commentDto, @PathVariable Long threadId, @RequestParam(required = false, name = "image") MultipartFile image) {
        try{
            commentService.createComment(commentDto, threadId, image);

        } catch (Exception e) {
            throw new RuntimeException("Error while creating comment", e);
        }
    }
}
