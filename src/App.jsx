import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./quiz/components/landingpage";
import Quiz from "./quiz/components/Quiz";
import QuestionCard from "./quiz/components/QuestionCard";
import QuizResults from "./quiz/components/QuizResults";
// Import other quiz components as needed

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz/:topic" element={<Quiz />} />
      {/* Add more routes for other topics as needed */}
      {/* Example for results page */}
      <Route path="/quiz/results" element={<QuizResults />} />
    </Routes>
  );
}

export default App;
