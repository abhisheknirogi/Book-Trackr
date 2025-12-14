So This Project is made for Bluenet
 
title: "📚 Book Trackr"
description: >
  Book Trackr is a modern frontend application to help users track their reading journey.
  It allows users to manage books they want to read, are currently reading, or have completed,
  all in the browser using LocalStorage.

features:
  - Add, edit, and delete books
  - Track reading status: "To Read / Reading / Completed"
  - Client-side routing for multiple pages/views
  - Persistent data with LocalStorage
  - Fully modular ES6+ JavaScript
  - Unit testing using Jest
  - Fast development with Vite

tech_stack:
  - HTML5 & CSS3: structure and styling
  - JavaScript (ES6+): frontend logic
  - Vite: development and build tool
  - Page.js (or custom routing): client-side routing
  - Jest: unit testing
  - LocalStorage: data persistence

project_structure: |
  book-trackr/
  │── index.html
  │── style.css
  │── main.js
  │── router.js       # handles routing between pages
  │── components/     # reusable JS components
  │── pages/          # individual page views
  │── tests/          # Jest unit tests
  │── vite.config.js
  │── README.md

setup:
  install_dependencies: "npm install"
  run_dev_server: "npm run dev  # opens the app in browser with hot-reloading"
  run_tests: "npm test"

learning_goals:
  - ES6+ modular JavaScript
  - Client-side routing
  - Frontend state management with LocalStorage
  - Testing frontend code with Jest
  - Using Vite for fast development
  - Structuring maintainable frontend projects

future_enhancements:
  - User authentication (login/signup)
  - Reading progress tracker (pages/percentage)
  - Notes/highlights for books
  - Dark mode and theming
  - Cloud database integration
