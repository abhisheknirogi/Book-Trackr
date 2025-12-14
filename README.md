So This Project is made for Bluenet
 
 # Book-Trackr

 Book Trackr is a modern **frontend book tracking application** that helps users manage their reading journey. Users can track books they want to read, are currently reading, or have completed, with a fast, modular, and testable frontend setup.

---

## 🚀 Features

- Add new books with details (title, author, category, etc.)
- Track reading status: **To Read / Reading / Completed**
- Edit and delete book entries
- Persistent data using **LocalStorage**
- Page routing for multiple views (Home, Add Book, Completed, etc.)
- Fully modular **ES6+ JavaScript** code
- Tested using **Jest**
- Fast development using **Vite**

---

## 🛠️ Tech Stack

- **HTML5 & CSS3** – structure and styling
- **JavaScript (ES6+)** – frontend logic
- **Vite** – build and development tooling
- **Page.js (or custom routing)** – client-side routing
- **Jest** – unit testing
- **LocalStorage** – persistent data

---

## 📂 Project Structure

book-trackr/
│── index.html
│── style.css
│── main.js
│── router.js # handles page routing
│── components/ # reusable JS components
│── pages/ # different page views
│── tests/ # Jest tests
│── vite.config.js
│── README.md

yaml
Copy code

---

## ⚙️ Installation & Setup

1️⃣ **Clone the repository**

```bash
git clone https://github.com/your-username/book-trackr.git
cd book-trackr
2️⃣ Install dependencies

bash
Copy code
npm install
3️⃣ Run the project

bash
Copy code
npm run dev
Vite will start a local dev server (usually at http://localhost:5173)

Open it in your browser to use the app

4️⃣ Run tests

bash
Copy code
npm test

## 🎯 Learning Objectives
Modular ES6+ JavaScript development

Client-side routing

Persistent state management with LocalStorage

Testing frontend code using Jest

Using modern build tools (Vite)

Structuring scalable frontend projects

## 🔮 Future Enhancements
User authentication (login/signup)

Reading progress tracker (pages/percentage)

Notes and highlights per book

Dark mode and theming

Cloud database integration

