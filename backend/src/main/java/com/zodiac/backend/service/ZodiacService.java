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
public Zodiac getZodiacByBirthday(int month, int day) {
    String name = null;

    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) name = "Aries";
    else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) name = "Taurus";
    else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) name = "Gemini";
    else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) name = "Cancer";
    else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) name = "Leo";
    else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) name = "Virgo";
    else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) name = "Libra";
    else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) name = "Scorpio";
    else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) name = "Sagittarius";
    else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) name = "Capricorn";
    else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) name = "Aquarius";
    else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) name = "Pisces";

    return zodiacRepository.findByName(name).orElse(null);
}
public void deleteZodiac(Long id) {
    zodiacRepository.deleteById(id);
    }
}