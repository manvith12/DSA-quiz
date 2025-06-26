# DSA Quiz Component

Welcome to the **DSA Quiz** component!  
This is a modular, visually engaging quiz interface designed as part of a larger open-source project by our university's OpenSource Club. The main project is a comprehensive **DSA Visualization Tool** that helps students and enthusiasts learn Data Structures and Algorithms (DSA) through interactive visualizations and quizzes.

---

## ✨ Features

- **Modern UI:** Beautiful, animated landing page with category cards for Data Structures and Algorithms.
- **Topic-based Quizzes:** Each card links to a quiz on a specific DSA topic (e.g., Linked Lists, Trees, Sorting Algorithms).
- **React Router Integration:** Seamless navigation between topics using React Router.
- **Component-Based:** All quiz logic and UI are split into reusable React components.
- **State Management:** Uses [Zustand](https://github.com/pmndrs/zustand) for simple and scalable state management.
- **Animations:** Smooth transitions and effects powered by [Framer Motion](https://www.framer.com/motion/).
- **Responsive Design:** Works well on both desktop and mobile devices.

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd DSA-quiz
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm start
   ```
   or
   ```sh
   npm run dev
   ```

4. **Open your browser:**  
   Visit [http://localhost:3000](http://localhost:3000) to see the app in action.

---

## 🧩 Folder Structure

```
src/
  ├── App.jsx                # Main app with routing
  ├── index.jsx              # Entry point
  └── quiz/
      ├── components/        # All quiz and UI components
      ├── data/              # Quiz questions
      ├── store/             # Zustand store for state
      └── styles/            # CSS for components
```

---

## 📝 How It Works

- The **landing page** (`landingpage.jsx`) displays cards for each DSA topic.
- Clicking a card navigates to the quiz for that topic.
- Each quiz is rendered by the `Quiz` component, which loads questions and manages user progress.
- Results and progress are shown at the end of each quiz.

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)

---

## 🤝 Contributing

We welcome contributions!  
If you'd like to add new quiz topics, improve the UI, or help with the DSA visualization tool, please open an issue or submit a pull request.

---

## 📚 About the Project

This quiz module is part of a larger **DSA Visualization Tool** being developed by the OpenSource Club.  
Our goal is to make learning DSA fun, interactive, and accessible for everyone.

---

## 🧑‍💻 Authors & Credits

- Developed by members of the OpenSource Club
- Special thanks to all contributors and testers!