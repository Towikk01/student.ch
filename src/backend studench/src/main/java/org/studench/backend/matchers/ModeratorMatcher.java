package org.studench.backend.matchers;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.util.matcher.RequestMatcher;
import org.studench.backend.data.Role;
import org.studench.backend.data.User;

public class ModeratorMatcher implements RequestMatcher {
    public boolean matches(HttpServletRequest request){
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Role role = user.getRole();
        String path = request.getRequestURI();
        return role.getName().equals("MODERATOR") && (path.equals("/comment/moderator/all_comments") || path.equals("/thread/moderator/all_threads") || path.equals("/comment/moderator/*/delete") || path.equals("/thread/moderator/*/delete"));

    }
}
