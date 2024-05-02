package org.studench.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.studench.backend.dto.UserShowDto;
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

}
