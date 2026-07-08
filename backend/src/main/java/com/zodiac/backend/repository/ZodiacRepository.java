package com.zodiac.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zodiac.backend.entity.Zodiac;

@Repository
public interface ZodiacRepository extends JpaRepository<Zodiac, Long> {

    Optional<Zodiac> findByName(String name);
    Optional<Zodiac> findByNameIgnoreCase(String name);
}
