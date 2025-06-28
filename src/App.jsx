import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./quiz/components/landingpage";
import Quiz from "./quiz/components/Quiz";
import QuizResults from "./quiz/components/QuizResults";
import Archive from "./archive/components/landingpage"; // Import Archive component
import ArchiveTopic from "./archive/components/Archive"; // Import ArchiveTopic component
import ArchivePyqTopic from "./archive/components/Archive"; // Import ArchivePyqTopic component

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> {/* Homepage */}
      
      <Route path="/quiz/:topic" element={<Quiz />} /> {/* Dynamic route for quiz topics */}
      <Route path="/quiz/results" element={<QuizResults />} /> {/* Quiz results */}
      <Route path="/archive" element={<Archive />} /> {/* Archive homepage */}
      <Route path="/archive/:topic" element={<ArchiveTopic />} /> {/* Dynamic route for archive topics */}
      <Route path="/archive/pyq/:topic" element={<ArchivePyqTopic />} /> {/* Dynamic route for archive pyq topics */}
    </Routes>
  );
}

export default App;
