# Math Game 🎮🧠

A fun and interactive browser-based math quiz game where players answer randomly generated math problems before the timer runs out.

## 🚀 Live Demo

Play now: [Math Game Live](https://Vivek7987.github.io/Math-Game/)


---

## 📌 Features

- ⏱️ 60-second countdown timer
- 🎯 Random math question generation (+, -, ×, ÷)
- ✅ Instant feedback on correct or incorrect answers
- 📈 Real-time score tracking
- 🔁 Reset and start new game anytime
- 💻 Fully responsive & animated UI

---

## 📸 Screenshots

![Math Game Screenshot](screenshot.png) <!-- Add a screenshot image in your repo -->

---

## 📂 Project Structure

math-game/
├── index.html
├── main.css
├── javascript.js
└── README.md



---

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6)

---

## 📋 How to Play

1. Click **Start Game**.
2. A random math question will appear.
3. Select the correct answer from the 4 options.
4. Each correct answer increases your score.
5. Try to get the highest score before the timer ends!

---

## 💡 Game Logic

- Game starts on clicking **Start Game**
- 60-second countdown starts
- A new math question (using +, -, ×, ÷) is randomly generated
- Correct answer is placed randomly in one of the 4 boxes
- Other boxes are filled with random incorrect options
- Score increases on correct selection, feedback shown for 1 sec
- Game ends when timer hits 0

---

## 🧠 Example Question Format

- 5 + 3 → 8 (correct), rest are wrong random values
- 6 × 4 → 24
- 9 ÷ 3 → 3
- 7 − 2 → 5

---

## 🎨 UI Design Highlights

- Soft blue container with shadow and rounded corners
- Floating feedback boxes (`Correct` / `Try Again`)
- Stylish hover effects on options and buttons
- Countdown timer and score badge

---

## 🧪 Developer Notes

- Used `setInterval` for countdown
- Avoids duplicate answers in boxes
- Uses `Math.random()` for generating numbers and positions
- Clean separation of JS logic into functions (`generateQA`, `startCountdown`, `calculateAnswer`)

---

## 📈 Future Improvements

- ✅ Add difficulty levels (Easy, Medium, Hard)
- ✅ Include sound effects on right/wrong answers
- ✅ Track high score using localStorage
- ✅ Add division answer rounding support (currently shows float)

---

## ✅ Requirements to Run

Just open the `index.html` file in any modern browser — no server setup needed!

---

## 📬 Feedback

If you like this game or have suggestions, feel free to open an issue or fork the repo!

---

## ©️ License

MIT License. Feel free to use or modify.

---

## 👨‍💻 Author

**Vivek Pal**

- GitHub: [@Vivek7987](https://github.com/Vivek7987)
- LinkedIn: [linkedin.com/in/vivekpal798](https://linkedin.com/in/vivekpal798)

---
