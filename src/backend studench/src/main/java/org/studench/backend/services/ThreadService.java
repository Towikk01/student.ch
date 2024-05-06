package org.studench.backend.services;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.multipart.MultipartFile;
import org.studench.backend.data.ThreadTheme;
import org.studench.backend.data.User;
import org.studench.backend.dto.ThreadDto;
import org.studench.backend.repo.ThreadRepo;
import org.studench.backend.data.Thread;
import org.studench.backend.repo.ThreadThemeRepo;
import org.studench.backend.utils.ImageUtil;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class ThreadService {
    private final ThreadRepo threadRepo;
    private final ThreadThemeRepo threadThemeRepo;


    public Long createThread(ThreadDto threadDto, MultipartFile image) throws IOException {
        Thread thread = new Thread();

        User currentUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        thread.setAuthor(currentUser);
        thread.setTitle(threadDto.getTitle());
        thread.setText(threadDto.getText());
        thread.setDate(LocalDateTime.now());
        ThreadTheme theme = threadThemeRepo.findById(threadDto.getThemeId()).orElseThrow(() -> new IllegalArgumentException("Theme with id " + threadDto.getThemeId() + " not found"));
        thread.setTheme(theme);
        if (image != null) {
            byte[] imageData = ImageUtil.compressImage(uploadImage(image));
            thread.setImageData(imageData);
        }

        threadRepo.save(thread);

        return thread.getId();
    }



    public byte[] uploadImage(MultipartFile imageFile) throws IOException {
        return imageFile.getBytes();
    }
}
