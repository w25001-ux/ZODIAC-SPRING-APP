const zodiacs = [
  ["Aries", "March 21 - April 19", "aries.png", "aries.html", "Fire", "Red", "1, 8", "Bold, confident, and energetic.", "Direct, enthusiastic, and action-oriented.", "Courage and initiative", "Impatience and impulsiveness", "Passionate and spontaneous", "Leadership and fast-paced roles"],
  ["Taurus", "April 20 - May 20", "taurus.png", "taurus.html", "Earth", "Green", "2, 6", "Patient, practical, and loyal.", "Grounded, dependable, and comfort-loving.", "Reliability and persistence", "Stubbornness and resistance to change", "Loyal and affectionate", "Stable, practical work"],
  ["Gemini", "May 21 - June 20", "gemini.png", "gemini.html", "Air", "Yellow", "3, 5", "Curious, adaptable, and communicative.", "Quick-thinking, sociable, and versatile.", "Communication and adaptability", "Restlessness and inconsistency", "Playful and intellectually engaged", "Communication and varied roles"],
  ["Cancer", "June 21 - July 22", "cancer.png", "cancer.html", "Water", "Silver", "2, 7", "Caring, intuitive, and protective.", "Sensitive, nurturing, and family-oriented.", "Empathy and intuition", "Moodiness and overprotectiveness", "Devoted and emotionally attentive", "Caring and creative professions"],
  ["Leo", "July 23 - August 22", "leo.png", "leo.html", "Fire", "Gold", "1, 9", "Generous, creative, and confident.", "Warm, expressive, and proud.", "Confidence and generosity", "Pride and a need for attention", "Romantic and wholehearted", "Leadership and creative roles"],
  ["Virgo", "August 23 - September 22", "virgo.png", "virgo.html", "Earth", "Navy", "5, 14", "Practical, detail-oriented, and helpful.", "Analytical, organized, and thoughtful.", "Precision and problem-solving", "Overthinking and perfectionism", "Supportive and attentive", "Analytical and service-focused work"],
  ["Libra", "September 23 - October 22", "libra.png", "libra.html", "Air", "Pink", "6, 15", "Balanced, diplomatic, and graceful.", "Sociable, fair-minded, and harmony-seeking.", "Diplomacy and cooperation", "Indecision and conflict avoidance", "Romantic and partnership-oriented", "Collaborative and aesthetic fields"],
  ["Scorpio", "October 23 - November 21", "scorpio.png", "scorpio.html", "Water", "Burgundy", "8, 11", "Intense, passionate, and loyal.", "Focused, private, and emotionally deep.", "Determination and insight", "Jealousy and secrecy", "Deeply committed and passionate", "Research and high-stakes roles"],
  ["Sagittarius", "November 22 - December 21", "sagittarius.png", "sagittarius.html", "Fire", "Purple", "3, 12", "Adventurous, honest, and optimistic.", "Independent, philosophical, and freedom-loving.", "Optimism and broad-mindedness", "Bluntness and impatience with routine", "Adventurous and honest", "Travel, teaching, and exploration"],
  ["Capricorn", "December 22 - January 19", "capricorn.png", "capricorn.html", "Earth", "Brown", "4, 10", "Disciplined, responsible, and wise.", "Ambitious, patient, and structured.", "Discipline and long-term planning", "Rigidity and pessimism", "Steady and committed", "Management and long-term projects"],
  ["Aquarius", "January 20 - February 18", "aquarius.png", "aquarius.html", "Air", "Blue", "4, 11", "Innovative, independent, and friendly.", "Original, humanitarian, and future-focused.", "Innovation and objectivity", "Detachment and unpredictability", "Values friendship and independence", "Technology and social-impact work"],
  ["Pisces", "February 19 - March 20", "pisces.png", "pisces.html", "Water", "Sea Green", "3, 7", "Compassionate, imaginative, and gentle.", "Intuitive, artistic, and empathetic.", "Compassion and creativity", "Escapism and weak boundaries", "Tender and emotionally intuitive", "Creative and healing professions"]
].map(([name, dateRange, icon, page, element, luckyColor, luckyNumber, description, personality, strengths, weaknesses, love, career], index) => ({
  id: index + 1, name, dateRange, icon, page, element, luckyColor, luckyNumber,
  description, personality, strengths, weaknesses, love, career
}));

function zodiacNameForBirthday(month, day) {
  const date = new Date(2024, month - 1, day);
  if (date.getFullYear() !== 2024 || date.getMonth() !== month - 1 || date.getDate() !== day) return null;
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
  return "Pisces";
}

module.exports = function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  if (req.query.month !== undefined || req.query.day !== undefined) {
    const month = Number(req.query.month);
    const day = Number(req.query.day);
    const name = zodiacNameForBirthday(month, day);
    if (!name) return res.status(400).json({ error: "Invalid birthday" });
    return res.status(200).json(zodiacs.find(zodiac => zodiac.name === name));
  }

  if (req.query.name) {
    const zodiac = zodiacs.find(item => item.name.toLowerCase() === String(req.query.name).toLowerCase());
    return zodiac ? res.status(200).json(zodiac) : res.status(404).json({ error: "Zodiac sign not found" });
  }

  return res.status(200).json(zodiacs);
};
