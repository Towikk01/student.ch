package org.studench.backend.dto;
import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class ThreadDto {
    private String title;
    private String text;
    private Long themeId;

}
