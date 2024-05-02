package org.studench.backend.services;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.studench.backend.data.User;
import org.studench.backend.dto.UserShowDto;

@Service
@RequiredArgsConstructor
public class PersonalAccountService {
    public UserShowDto getCurrentUserInformation() {
        var user = (User)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        var userShowDto = new UserShowDto();
        userShowDto.setFirstName(user.getFirstName());
        userShowDto.setLastName(user.getLastName());
        userShowDto.setUsername(user.getUsername());
        userShowDto.setRole(user.getRole());
        return userShowDto;

    }
}
