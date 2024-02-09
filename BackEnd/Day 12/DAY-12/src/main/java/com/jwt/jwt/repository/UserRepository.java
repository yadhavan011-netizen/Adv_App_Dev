package com.jwt.jwt.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jwt.jwt.entity.User;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByGmail(String gmail);
}
