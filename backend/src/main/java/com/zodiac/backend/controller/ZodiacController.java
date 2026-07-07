package com.zodiac.backend.controller;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.zodiac.backend.entity.Zodiac;
import com.zodiac.backend.service.ZodiacService;

@CrossOrigin(origins="*")
@RestController
public class ZodiacController {

    private final ZodiacService zodiacService;

    public ZodiacController(ZodiacService zodiacService) {
        this.zodiacService = zodiacService;
    }
    @GetMapping("/zodiacs/birthday")
    public Zodiac getByBirthday(@RequestParam int month, @RequestParam int day) {
        return zodiacService.getZodiacByBirthday(month, day);
    }

    @GetMapping("/zodiacs")
    public List<Zodiac> getAllZodiacs() {
        return zodiacService.getAllZodiacs();
    }
    @GetMapping("/zodiacs/search")
    public Zodiac searchByName(@RequestParam String name) {
    return zodiacService.getZodiacByName(name);
    }

    @GetMapping("/zodiacs/{id}")
    public Zodiac getZodiacById(@PathVariable Long id) {
        return zodiacService.getZodiacById(id);
    }

    @PostMapping("/zodiacs")
    public Zodiac createZodiac(@RequestBody Zodiac zodiac) {
        return zodiacService.createZodiac(zodiac);
    }

    @PutMapping("/zodiacs/{id}")
    public Zodiac updateZodiac(@PathVariable Long id, @RequestBody Zodiac zodiac) {
        return zodiacService.updateZodiac(id, zodiac);
    }

    @DeleteMapping("/zodiacs/{id}")
    public void deleteZodiac(@PathVariable Long id) {
        zodiacService.deleteZodiac(id);
    }
}
