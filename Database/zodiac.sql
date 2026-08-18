CREATE DATABASE IF NOT EXISTS zodiac_db;
USE zodiac_db;

CREATE TABLE IF NOT EXISTS zodiac (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE,
  date_range VARCHAR(50) NOT NULL,
  icon VARCHAR(100) NOT NULL,
  page VARCHAR(100) NOT NULL,
  element VARCHAR(20) NOT NULL,
  lucky_color VARCHAR(50),
  lucky_number VARCHAR(50),
  description TEXT,
  personality TEXT,
  strengths TEXT,
  weaknesses TEXT,
  love TEXT,
  career TEXT
);

INSERT INTO zodiac
  (name, date_range, icon, page, element, lucky_color, lucky_number,
   description, personality, strengths, weaknesses, love, career)
VALUES
  ('Aries', 'March 21 - April 19', 'aries.png', 'aries.html', 'Fire', 'Red', '1, 8', 'Bold, confident, and energetic.', 'Direct, enthusiastic, and action-oriented.', 'Courage and initiative', 'Impatience and impulsiveness', 'Passionate and spontaneous', 'Thrives in leadership and fast-paced roles'),
  ('Taurus', 'April 20 - May 20', 'taurus.png', 'taurus.html', 'Earth', 'Green', '2, 6', 'Patient, practical, and loyal.', 'Grounded, dependable, and comfort-loving.', 'Reliability and persistence', 'Stubbornness and resistance to change', 'Loyal and affectionate', 'Excels in stable, practical work'),
  ('Gemini', 'May 21 - June 20', 'gemini.png', 'gemini.html', 'Air', 'Yellow', '3, 5', 'Curious, adaptable, and communicative.', 'Quick-thinking, sociable, and versatile.', 'Communication and adaptability', 'Restlessness and inconsistency', 'Playful and intellectually engaged', 'Excels in communication and varied roles'),
  ('Cancer', 'June 21 - July 22', 'cancer.png', 'cancer.html', 'Water', 'Silver', '2, 7', 'Caring, intuitive, and protective.', 'Sensitive, nurturing, and family-oriented.', 'Empathy and intuition', 'Moodiness and overprotectiveness', 'Devoted and emotionally attentive', 'Thrives in caring and creative professions'),
  ('Leo', 'July 23 - August 22', 'leo.png', 'leo.html', 'Fire', 'Gold', '1, 9', 'Generous, creative, and confident.', 'Warm, expressive, and proud.', 'Confidence and generosity', 'Pride and a need for attention', 'Romantic and wholehearted', 'Shines in leadership and creative roles'),
  ('Virgo', 'August 23 - September 22', 'virgo.png', 'virgo.html', 'Earth', 'Navy', '5, 14', 'Practical, detail-oriented, and helpful.', 'Analytical, organized, and thoughtful.', 'Precision and problem-solving', 'Overthinking and perfectionism', 'Supportive and attentive', 'Excels in analytical and service-focused work'),
  ('Libra', 'September 23 - October 22', 'libra.png', 'libra.html', 'Air', 'Pink', '6, 15', 'Balanced, diplomatic, and graceful.', 'Sociable, fair-minded, and harmony-seeking.', 'Diplomacy and cooperation', 'Indecision and conflict avoidance', 'Romantic and partnership-oriented', 'Thrives in collaborative and aesthetic fields'),
  ('Scorpio', 'October 23 - November 21', 'scorpio.png', 'scorpio.html', 'Water', 'Burgundy', '8, 11', 'Intense, passionate, and loyal.', 'Focused, private, and emotionally deep.', 'Determination and insight', 'Jealousy and secrecy', 'Deeply committed and passionate', 'Excels in research and high-stakes roles'),
  ('Sagittarius', 'November 22 - December 21', 'sagittarius.png', 'sagittarius.html', 'Fire', 'Purple', '3, 12', 'Adventurous, honest, and optimistic.', 'Independent, philosophical, and freedom-loving.', 'Optimism and broad-mindedness', 'Bluntness and impatience with routine', 'Adventurous and honest', 'Thrives in travel, teaching, and exploration'),
  ('Capricorn', 'December 22 - January 19', 'capricorn.png', 'capricorn.html', 'Earth', 'Brown', '4, 10', 'Disciplined, responsible, and wise.', 'Ambitious, patient, and structured.', 'Discipline and long-term planning', 'Rigidity and pessimism', 'Steady and committed', 'Excels in management and long-term projects'),
  ('Aquarius', 'January 20 - February 18', 'aquarius.png', 'aquarius.html', 'Air', 'Blue', '4, 11', 'Innovative, independent, and friendly.', 'Original, humanitarian, and future-focused.', 'Innovation and objectivity', 'Detachment and unpredictability', 'Values friendship and independence', 'Thrives in technology and social-impact work'),
  ('Pisces', 'February 19 - March 20', 'pisces.png', 'pisces.html', 'Water', 'Sea Green', '3, 7', 'Compassionate, imaginative, and gentle.', 'Intuitive, artistic, and empathetic.', 'Compassion and creativity', 'Escapism and weak boundaries', 'Tender and emotionally intuitive', 'Excels in creative and healing professions')
ON DUPLICATE KEY UPDATE
  date_range = VALUES(date_range), icon = VALUES(icon), page = VALUES(page),
  element = VALUES(element), lucky_color = VALUES(lucky_color),
  lucky_number = VALUES(lucky_number), description = VALUES(description),
  personality = VALUES(personality), strengths = VALUES(strengths),
  weaknesses = VALUES(weaknesses), love = VALUES(love), career = VALUES(career);
