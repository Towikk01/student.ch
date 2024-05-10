package org.studench.backend.controller;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.studench.backend.data.Thread;
import org.studench.backend.data.ThreadLike;
import org.studench.backend.dto.ThreadDto;
import org.studench.backend.dto.ThreadLikeDto;
import org.studench.backend.services.ThreadService;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/thread")
@RequiredArgsConstructor
public class ThreadController {
    private static final Logger log = LoggerFactory.getLogger(ThreadController.class);
    private final ThreadService threadService;
    @PostMapping("/create")
    public ResponseEntity<String> createThread(ThreadDto threadDto, @RequestParam (required = false, name = "image") MultipartFile file) throws IOException {
        try {
            Long threadId = threadService.createThread(threadDto, file);
            return ResponseEntity.ok().body("{\"thread_id\":\"" + threadId + "\"}");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

    @GetMapping("all/{themeId}")
    public ResponseEntity<List<Thread>> getThreadsByTheme(@PathVariable Long themeId) {
        try {
            return ResponseEntity.ok().body(threadService.getThreadsByTheme(themeId));
        } catch (Exception e) {
            log.error("Error while getting threads by theme", e);
            throw new RuntimeException("Error while getting threads by theme", e);
        }
    }

    @GetMapping("/{threadId}")
    public ResponseEntity<Thread> getThread(@PathVariable Long threadId) {
        try {
            return ResponseEntity.ok().body(threadService.getThread(threadId));
        } catch (Exception e) {
            log.error("Error while getting thread", e);
            throw new RuntimeException("Error while getting thread", e);
        }
    }

    @GetMapping("/latest")
    public ResponseEntity<List<Thread>> getLatestThreads() {
        try {
            return ResponseEntity.ok().body(threadService.getLatestThreads());
        } catch (Exception e) {
            log.error("Error while getting latest threads", e);
            throw new RuntimeException("Error while getting latest threads", e);
        }
    }

    @PostMapping("/{threadId}/like")
    public ResponseEntity<String> likeThread(@PathVariable Long threadId) {
        try {
            boolean isLiked =  threadService.likeThread(threadId);
            if (isLiked) {
                return ResponseEntity.ok().body("{\"message\":\"Thread liked\"}");
            } else {
                return ResponseEntity.badRequest().body("{\"message\":\"Thread not liked\"}");
            }
        } catch (Exception e) {
            log.error("Error while liking thread", e);
            throw new RuntimeException("Error while liking thread", e);
        }
    }

    @GetMapping("/{threadId}/isLiked")
    public ResponseEntity<String> isLiked(@PathVariable Long threadId) {
        try {
            boolean isLiked = threadService.isLiked(threadId);
            if (isLiked) {
                return ResponseEntity.ok().body("{\"message\":\"Thread is liked\"}");
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            log.error("Error while checking if thread is liked", e);
            throw new RuntimeException("Error while checking if thread is liked", e);
        }
    }

    @DeleteMapping("/{threadId}/unlike")
    public ResponseEntity<String> unlikeThread(@PathVariable Long threadId) {
        try {
            boolean isUnliked = threadService.unlikeThread(threadId);
            if (isUnliked) {
                return ResponseEntity.noContent().build();
            } else {
                return ResponseEntity.badRequest().body("{\"message\":\"Thread not unliked\"}");
            }
        } catch (Exception e) {
            log.error("Error while unliking thread", e);
            throw new RuntimeException("Error while unliking thread", e);
        }
    }


}
