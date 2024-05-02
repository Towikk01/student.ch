package org.studench.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class SignUpDto {


    @Size(min = 5, max = 50, message = "Username should be between 5 and 50 characters")
    @NotBlank(message = "Username cannot be empty")
    private String username;


    @Size(max = 255, message = "Password should be less than 255 characters")
    @NotBlank(message = "Password cannot be empty")
    private String password;

    @NotBlank(message = "First name cannot be empty")
    private String firstName;

    @NotBlank(message = "Last name cannot be empty")
    private String lastName;

    @NotNull(message = "Role cannot be empty")
    private Integer roleId;
}