package org.studench.backend.services;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.studench.backend.data.User;
import org.studench.backend.repo.UserRepo;

@Service
@RequiredArgsConstructor
public class UserService {

        private final UserRepo repository;

        /**
         *  User save
         *
         * @return saved user
         */
        public User save(User user) {
            return repository.save(user);
        }


        /**
         * User creating
         *
         * @return created user
         */
        public User create(User user) {
            if (repository.existsByUsername(user.getUsername())) {

                throw new RuntimeException("User with this username already exists");
            }


            return save(user);
        }

        /**
         * Get user by username
         *
         * @return user
         */
        public User getByUsername(String username) {
            return repository.findByUsername(username)
                    .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        }

        /**
         * Get user by username
         *
         * @return user
         */
        public UserDetailsService userDetailsService() {
            return this::getByUsername;
        }


        public User getCurrentUser()
        {
            // Get the username from the security context
            var username = SecurityContextHolder.getContext().getAuthentication().getName();
            return getByUsername(username);
        }


        boolean existsByUsername(String username) {
            return repository.existsByUsername(username);
        }
    }

