package org.studench.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.studench.backend.dto.UserShowDto;
import org.studench.backend.dto.UsernameEditDto;
import org.studench.backend.services.PersonalAccountService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/me")
public class PersonalAccountController {
    private final PersonalAccountService personalAccountService;

    @GetMapping("/info")
    public ResponseEntity<UserShowDto> getPersonalInfo() {
        return ResponseEntity.ok(personalAccountService.getCurrentUserInformation());
    }

    @PatchMapping("/edit_username")
    public ResponseEntity<String> editUsername(@RequestBody UsernameEditDto usernameEditDto) {
        personalAccountService.editUsername(usernameEditDto.getNewUsername());
        return ResponseEntity.noContent().build();
    }

}
