package org.studench.backend.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.studench.backend.repo.CommentRepo;

@Service
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepo commentRepo;
}
