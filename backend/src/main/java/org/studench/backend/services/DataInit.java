package org.studench.backend.services;

import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.studench.backend.data.Role;
import org.studench.backend.data.ThreadTheme;
import org.studench.backend.repo.RolesRepo;
import org.studench.backend.repo.ThreadLikeRepo;
import org.studench.backend.repo.ThreadRepo;
import org.studench.backend.repo.ThreadThemeRepo;

import java.util.ArrayList;
import java.util.List;

@Component
@AllArgsConstructor
public class DataInit {
   private final RolesRepo rolesRepo;
   private final ThreadThemeRepo threadThemeRepo;
   private final ThreadRepo threadRepo;


   @PostConstruct
   public void init() {
        List<String> roles = new ArrayList<>();
        roles.add("ADMIN");
        roles.add("MODERATOR");
        roles.add("USER");

            for (String role : roles) {
                if (!rolesRepo.existsByName(role)) {
                    rolesRepo.save(new Role(role));
                }
            }

        List<String> themes = new ArrayList<>();
        themes.add("STUDY");
        themes.add("DORMITORY");
        themes.add("FOOD");

            for (String theme : themes) {
                if (!threadThemeRepo.existsByName(theme)) {
                    threadThemeRepo.save(new ThreadTheme(theme));
                }
            }


            








   }
}
