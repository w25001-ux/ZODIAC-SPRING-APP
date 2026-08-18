# 🌌 Zodiac Sign Finder

A web application to discover your zodiac sign by birthday.

---

## ✨ Features

- 🔍 Search zodiac sign by birthday
- 🌟 View all 12 zodiac signs
- 📖 Zodiac detail pages
- 🎨 Beautiful Galaxy UI
- 📱 Responsive Design
- 🔗 REST API Integration

---

## 🛠️ Technologies

### 🎨 Frontend
- 🌐 HTML5
- 🎨 CSS3
- ⚡ JavaScript

### ⚙️ Backend
- ☕ Java
- 🍃 Spring Boot
- 🔌 REST API

<!-- ### 🗄️ Database
- 🐬 MySQL -->

### 🧰 Tools
- 💻 VS Code
- 💡 IntelliJ IDEA
- 🌿 Git
- 🐙 GitHub
- 📮 Postman

---

## 👥 Team

### 🙋 AUNG THI HA
**Frontend Developer**

- 🎨 UI Design
- 💻 HTML / CSS / JavaScript
- 🔗 API Integration
- 📱 Responsive Design

### 👨‍💻 THWE THWE AUNG
**Backend Developer**

- ☕ Spring Boot
- 🗄️ MySQL
- 🔌 REST API

---

## 🚀 How to Run

### ⚙️ Backend

1. Install Java 21 and MySQL.
2. Run `Database/zodiac.sql` in MySQL.
3. Set the database password in the terminal (do not save it in Git):

```powershell
$env:DB_PASSWORD="your-mysql-password"
cd backend
.\mvnw.cmd spring-boot:run
```

Optional settings are `DB_URL` and `DB_USERNAME`. Their defaults are
`jdbc:mysql://localhost:3306/zodiac_db` and `root`.

### 🌐 Frontend

After the backend starts on port `8081`, open `frontend/index.html`

or

Use **Live Server**

---

## 📡 API

- 📄 GET `/zodiacs`
- 🔍 GET `/zodiacs/search?name=Scorpio`
- 🎂 GET `/zodiacs/birthday?month=10&day=27`

---

## 📸 Screenshots

### 🏠 Home

<img width="559" height="862" alt="スクリーンショット 2026-07-08 230842" src="https://github.com/user-attachments/assets/d40a8439-3bdc-485c-b435-633e2cd35ff6" />


### ♏ Detail Page

<img width="1462" height="654" alt="スクリーンショット 2026-07-08 230704" src="https://github.com/user-attachments/assets/9c8abbaa-8bf0-4713-93ce-27fc2cde4212" />

# <img width="416" height="854" alt="スクリーンショット 2026-07-08 230815" src="https://github.com/user-attachments/assets/aa24a705-a2ed-419f-b2bc-24eaabf85013" />



---
