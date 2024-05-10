package org.studench.backend.services;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
import java.util.List;
import java.util.Optional;
import java.util.zip.DataFormatException;

@Service
@RequiredArgsConstructor
public class ThreadService {
    private static final Logger log = LoggerFactory.getLogger(ThreadService.class);
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


    public List<Thread> getThreadsByTheme(Long themeId) {
        List< Optional<Thread> > threads = threadRepo.findAllByThemeId(themeId);

//        get threads and for each thread get image and decompress it
        for (Optional<Thread> thread : threads) {
            if (thread.isPresent()) {
                Thread t = thread.get();
                if (t.getImageData() != null) {
                    try {
                        t.setImageData(ImageUtil.decompressImage(t.getImageData()));
                    } catch (DataFormatException | IOException e) {
                        log.error("Error while decompressing image", e);
                    }
                }
            }
        }



//         add isPresent() check to avoid NullPointerException
        return threads.stream().filter(Optional::isPresent).map(Optional::get).toList();

    }

    public Thread getThread(Long threadId) {
        Thread thread = threadRepo.findById(threadId).orElseThrow(() -> new IllegalArgumentException("Thread with id " + threadId + " not found"));
        if (thread.getImageData() != null) {
            try {
                thread.setImageData(ImageUtil.decompressImage(thread.getImageData()));
            } catch (DataFormatException | IOException e) {
                log.error("Error while decompressing image", e);
            }
        }
        return thread;
    }





    public byte[] downloadImage(Long threadId) throws DataFormatException, IOException {
        Thread thread = threadRepo.findById(threadId).orElseThrow(() -> new IllegalArgumentException("Thread with id " + threadId + " not found"));
        return ImageUtil.decompressImage(thread.getImageData());
    }



    public byte[] uploadImage(MultipartFile imageFile) throws IOException {
        return imageFile.getBytes();
    }



}