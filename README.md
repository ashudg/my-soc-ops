# 🎉 Soc Ops — Social Bingo

> Break the ice at any in-person event. Find people who match the squares, get **5 in a row**, and win!

![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646cff?logo=vite&logoColor=white)
![Deploy](https://img.shields.io/badge/Deploy-GitHub_Pages-222?logo=github&logoColor=white)

---

## ✨ Features

- 🟩 **5 × 5 randomised bingo board** — a fresh card every game
- 🆓 **FREE SPACE** in the centre to get you started
- 🙋 **Icebreaker prompts** — find teammates who bike to work, speak multiple languages, love spicy food, and more
- 🏆 **Instant win detection** — rows, columns, and diagonals all count
- 📱 **Mobile-first design** — works great on any phone at your next mixer
- 💾 **Auto-saves progress** — `localStorage` keeps your board if you accidentally close the tab
- 🎨 **Fully customizable** — swap in your own questions in one file

---

## 🚀 Getting Started

### Prerequisites

- [Node.js 22](https://nodejs.org/) or higher

### Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) and tap **Start Game**.

### Build for production

```bash
npm run build
```

Pushes to `main` deploy automatically to **GitHub Pages**.

---

## 🎮 How to Play

1. Hit **Start Game** to get your randomised 5 × 5 board.
2. Mingle — find a real person who matches each square's description.
3. **Tap the square** once you've found a match.
4. Get **5 in a row** (horizontal, vertical, or diagonal) to shout **BINGO!** 🎊

---

## 🛠 Customize the Questions

All prompts live in one place:

```
src/data/questions.ts
```

Edit the `questions` array — each entry is a plain string describing a person:

```ts
export const questions: string[] = [
  "bikes to work",
  "has lived in another country",
  "plays an instrument",
  // add your own…
];
```

The board will use your new prompts the next time a game starts. Perfect for tailoring the game to your team, conference, or community.

---

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) and the [Lab Guide](.lab/GUIDE.md) for full setup and workshop instructions.
