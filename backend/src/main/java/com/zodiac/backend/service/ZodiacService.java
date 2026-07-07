package com.zodiac.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.zodiac.backend.entity.Zodiac;
import com.zodiac.backend.repository.ZodiacRepository;

@Service
public class ZodiacService {

    private final ZodiacRepository zodiacRepository;

    public ZodiacService(ZodiacRepository zodiacRepository) {
        this.zodiacRepository = zodiacRepository;
    }
    public Zodiac getZodiacByName(String name) {
    return zodiacRepository.findByName(name).orElse(null);
    }
    public List<Zodiac> getAllZodiacs() {
        return zodiacRepository.findAll();
    }
    public Zodiac getZodiacById(Long id) {
        return zodiacRepository.findById(id).orElse(null);
    }

    public Zodiac createZodiac(Zodiac zodiac) {
        return zodiacRepository.save(zodiac);
    }
    public Zodiac updateZodiac(Long id, Zodiac zodiac) {
    Zodiac existing = zodiacRepository.findById(id).orElse(null);

    if (existing == null) {
        return null;
    }
    

    existing.setName(zodiac.getName());
    existing.setDateRange(zodiac.getDateRange());
    existing.setDescription(zodiac.getDescription());
    existing.setLuckyColor(zodiac.getLuckyColor());
    existing.setLuckyNumber(zodiac.getLuckyNumber());
    existing.setPersonality(zodiac.getPersonality());
    existing.setStrengths(zodiac.getStrengths());
    existing.setWeaknesses(zodiac.getWeaknesses());
    existing.setLove(zodiac.getLove());
    existing.setCareer(zodiac.getCareer());

    return zodiacRepository.save(existing);
}
public void deleteZodiac(Long id) {
    zodiacRepository.deleteById(id);
    }
}