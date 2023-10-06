import { createContext, useState } from "react";

export const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [state, setState] = useState({
    username: "",
    currentQuestion: 0,
    score: 0,
    questions: [
      {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Rome", "Berlin"],
        correctAnswer: "Paris",
      },
      {
        question: "What is the square root of 16?",
        answers: ["4", "8", "16", "32"],
        correctAnswer: "4",
      },
      {
        question: "What is the chemical symbol for water?",
        answers: ["H2O", "O2", "H2", "CO2"],
        correctAnswer: "H2O",
      },
    ],
  });

  return (
    <QuizContext.Provider value={{ state, setState }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;