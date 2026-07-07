console.log("script.js loaded");

const form = document.getElementById("zodiac-form");
const result = document.getElementById("result");
const grid = document.getElementById("zodiac-grid");
const exploreBtn = document.getElementById("explore-btn");

function getZodiacSign(month, day) {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return { name: "Aries", icon: "♈", date: "March 21 - April 19", page: "pages/aries.html", element: "Fire" };
  }

  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return { name: "Taurus", icon: "♉", date: "April 20 - May 20", page: "pages/taurus.html", element: "Earth" };
  }

  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return { name: "Gemini", icon: "♊", date: "May 21 - June 20", page: "pages/gemini.html", element: "Air" };
  }

  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return { name: "Cancer", icon: "♋", date: "June 21 - July 22", page: "pages/cancer.html", element: "Water" };
  }

  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return { name: "Leo", icon: "♌", date: "July 23 - August 22", page: "pages/leo.html", element: "Fire" };
  }

  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return { name: "Virgo", icon: "♍", date: "August 23 - September 22", page: "pages/virgo.html", element: "Earth" };
  }

  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return { name: "Libra", icon: "♎", date: "September 23 - October 22", page: "pages/libra.html", element: "Air" };
  }

  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return { name: "Scorpio", icon: "♏", date: "October 23 - November 21", page: "pages/scorpio.html", element: "Water" };
  }

  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return { name: "Sagittarius", icon: "♐", date: "November 22 - December 21", page: "pages/sagittarius.html", element: "Fire" };
  }

  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return { name: "Capricorn", icon: "♑", date: "December 22 - January 19", page: "pages/capricorn.html", element: "Earth" };
  }

  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return { name: "Aquarius", icon: "♒", date: "January 20 - February 18", page: "pages/aquarius.html", element: "Air" };
  }

  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return { name: "Pisces", icon: "♓", date: "February 19 - March 20", page: "pages/pisces.html", element: "Water" };
  }

  return null;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const month = Number(document.getElementById("month").value);
  const day = Number(document.getElementById("day").value);

  if (!month || month < 1 || month > 12 || !day || day < 1 || day > 31) {
    result.classList.remove("hidden");
    result.innerHTML = `
      <p class="error">Please enter a valid month and day.</p>
    `;
    return;
  }

  const sign = getZodiacSign(month, day);
  
  console.log("sign =", sign);

  if (!sign) {
    result.classList.remove("hidden");
    result.innerHTML = `
      <p class="error">Could not find a zodiac sign for that date.</p>
    `;
    return;
  }

  result.classList.remove("hidden");
  result.innerHTML = `
    <p>Finding your zodiac sign...</p>
  `;

  setTimeout(function () {
    result.innerHTML = `
      <h3>Your Zodiac Sign</h3>
      <p class="result-sign">${sign.icon} ${sign.name}</p>
      <p>${sign.date}</p>
      <p>Element: ${sign.element}</p>
      <a href="${sign.page}" class="detail-button">View Details</a>
    `;
  }, 500);
});

exploreBtn.addEventListener("click", function () {
  grid.classList.toggle("hidden");
});