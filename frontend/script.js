
console.log("script.js loaded");
// fetch("http://localhost:8081/zodiacs")
//   .then(response => response.json())
//   .then(data => {
//     console.log("Backend data:", data);
//   })
//   .catch(error => {
//     console.error("Backend error:", error);
//   });

const form = document.getElementById("zodiac-form");
const result = document.getElementById("result");
const grid = document.getElementById("zodiac-grid");
const exploreBtn = document.getElementById("explore-btn");

// function getZodiacSign(month, day) {
//   if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
//     return { name: "Aries", icon: "♈", date: "March 21 - April 19", page: "pages/aries.html", element: "Fire" };
//   }

//   if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
//     return { name: "Taurus", icon: "♉", date: "April 20 - May 20", page: "pages/taurus.html", element: "Earth" };
//   }

//   if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
//     return { name: "Gemini", icon: "♊", date: "May 21 - June 20", page: "pages/gemini.html", element: "Air" };
//   }

//   if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
//     return { name: "Cancer", icon: "♋", date: "June 21 - July 22", page: "pages/cancer.html", element: "Water" };
//   }

//   if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
//     return { name: "Leo", icon: "♌", date: "July 23 - August 22", page: "pages/leo.html", element: "Fire" };
//   }

//   if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
//     return { name: "Virgo", icon: "♍", date: "August 23 - September 22", page: "pages/virgo.html", element: "Earth" };
//   }

//   if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
//     return { name: "Libra", icon: "♎", date: "September 23 - October 22", page: "pages/libra.html", element: "Air" };
//   }

//   if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
//     return { name: "Scorpio", icon: "♏", date: "October 23 - November 21", page: "pages/scorpio.html", element: "Water" };
//   }

//   if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
//     return { name: "Sagittarius", icon: "♐", date: "November 22 - December 21", page: "pages/sagittarius.html", element: "Fire" };
//   }

//   if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
//     return { name: "Capricorn", icon: "♑", date: "December 22 - January 19", page: "pages/capricorn.html", element: "Earth" };
//   }

//   if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
//     return { name: "Aquarius", icon: "♒", date: "January 20 - February 18", page: "pages/aquarius.html", element: "Air" };
//   }

//   if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
//     return { name: "Pisces", icon: "♓", date: "February 19 - March 20", page: "pages/pisces.html", element: "Water" };
//   }

//   return null;
// }

if (form) {
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

    result.classList.remove("hidden");
    result.innerHTML = `
      <p>Finding your zodiac sign...</p>
    `;

    fetch(`http://localhost:8081/zodiacs/birthday?month=${month}&day=${day}`)
      .then(response => response.json())
      .then(zodiac => {
        result.innerHTML = `
          <h3>Your Zodiac Sign</h3>
          <p class="result-sign">${zodiac.icon} ${zodiac.name}</p>
          <p>${zodiac.dateRange}</p>
          <p>Element: ${zodiac.element}</p>
          <a href="pages/${zodiac.name.toLowerCase()}.html" class="detail-button">
            View Details
          </a>
        `;
      })
      .catch(error => {
        console.error("API error:", error);
      });
  });
}

  

if (exploreBtn) {
  exploreBtn.addEventListener("click", function () {

    fetch("http://localhost:8081/zodiacs")
      .then(response => response.json())
      .then(zodiacs => {

        grid.innerHTML = "";

        zodiacs.forEach(zodiac => {

          grid.innerHTML += `
            <a href="pages/${zodiac.page}" class="sign-link">
              <article class="sign-card">
                <h3>${zodiac.name}</h3>
                <p>${zodiac.dateRange}</p>
              </article>
            </a>
          `;

        });

        grid.classList.remove("hidden");

      })
      .catch(error => {
        console.error(error);
      });

  });
}

// =========================
// Detail Page
// =========================

function loadDetailPage() {

  const pageName = window.location.pathname
    .split("/")
    .pop()
    .replace(".html", "");

  fetch(`http://localhost:8081/zodiacs/search?name=${pageName}`)
    .then(response => response.json())
    .then(zodiac => {

      document.getElementById("icon").src = "../Images/" + zodiac.icon;
      document.getElementById("name").textContent = zodiac.name;
      document.getElementById("dateRange").textContent = zodiac.dateRange;
      document.getElementById("element").textContent = zodiac.element;
      document.getElementById("description").textContent = zodiac.description;
      document.getElementById("personality").textContent = zodiac.personality;
      document.getElementById("strengths").textContent = zodiac.strengths;
      document.getElementById("weaknesses").textContent = zodiac.weaknesses;
      document.getElementById("love").textContent = zodiac.love;
      document.getElementById("career").textContent = zodiac.career;
      document.getElementById("luckyColor").textContent = zodiac.luckyColor;
      document.getElementById("luckyNumber").textContent = zodiac.luckyNumber;
    })
    .catch(error => {
      console.error("Detail API error:", error);
    });

}

if (document.getElementById("name")) {
  loadDetailPage();
}

