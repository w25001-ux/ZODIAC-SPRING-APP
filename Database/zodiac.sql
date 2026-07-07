CREATE TABLE IF NOT EXISTS zodiac_signs (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  start_month INTEGER NOT NULL,
  start_day INTEGER NOT NULL,
  end_month INTEGER NOT NULL,
  end_day INTEGER NOT NULL,
  element TEXT NOT NULL,
  symbol TEXT NOT NULL,
  description TEXT NOT NULL
);

INSERT INTO zodiac_signs (id, name, start_month, start_day, end_month, end_day, element, symbol, description) VALUES
  (1, 'Aries', 3, 21, 4, 19, 'Fire', 'Ram', 'Bold, confident, and energetic.'),
  (2, 'Taurus', 4, 20, 5, 20, 'Earth', 'Bull', 'Patient, practical, and loyal.'),
  (3, 'Gemini', 5, 21, 6, 20, 'Air', 'Twins', 'Curious, adaptable, and communicative.'),
  (4, 'Cancer', 6, 21, 7, 22, 'Water', 'Crab', 'Caring, intuitive, and protective.'),
  (5, 'Leo', 7, 23, 8, 22, 'Fire', 'Lion', 'Generous, creative, and confident.'),
  (6, 'Virgo', 8, 23, 9, 22, 'Earth', 'Virgin', 'Practical, detail-oriented, and helpful.'),
  (7, 'Libra', 9, 23, 10, 22, 'Air', 'Scales', 'Balanced, diplomatic, and graceful.'),
  (8, 'Scorpio', 10, 23, 11, 21, 'Water', 'Scorpion', 'Intense, passionate, and loyal.'),
  (9, 'Sagittarius', 11, 22, 12, 21, 'Fire', 'Archer', 'Adventurous, honest, and optimistic.'),
  (10, 'Capricorn', 12, 22, 1, 19, 'Earth', 'Goat', 'Disciplined, responsible, and wise.'),
  (11, 'Aquarius', 1, 20, 2, 18, 'Air', 'Water Bearer', 'Innovative, independent, and friendly.'),
  (12, 'Pisces', 2, 19, 3, 20, 'Water', 'Fish', 'Compassionate, imaginative, and gentle.');
