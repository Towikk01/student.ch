package org.studench.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.studench.backend.data.Thread;
import org.studench.backend.dto.ThreadDto;
import org.studench.backend.services.ThreadService;

import java.io.IOException;

@RestController
@RequestMapping("/thread")
@RequiredArgsConstructor
public class ThreadController {
    private final ThreadService threadService;
    @PostMapping("/create")
    public ResponseEntity<String> createThread(ThreadDto threadDto, @RequestParam (required = false, name = "image") MultipartFile file) throws IOException {
        try {
            Long threadId = threadService.createThread(threadDto, file);
            System.out.println("Thread created with id: " + threadId);
            return ResponseEntity.ok().body("{\"thread_id\":\"" + threadId + "\"}");
        } catch (Exception e) {
            System.out.println(e.getMessage());
            throw new RuntimeException(e.getMessage());
        }

    }
}
