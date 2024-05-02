package org.studench.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class  LoginDto {


    @Size(min = 5, max = 50, message = "Username should be between 5 and 50 characters")
    @NotBlank(message = "Username cannot be empty")
    private String username;

    @Size(min = 8, max = 255, message = "Password should be between 8 and 255 characters")
    @NotBlank(message = "Password cannot be empty")
    private String password;
}