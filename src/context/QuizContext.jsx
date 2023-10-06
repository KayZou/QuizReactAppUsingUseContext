import { createContext, useState, useEffect } from "react";

export const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [state, setState] = useState({
    username: "",
    currentQuestion: 0,
    score: 0,
    questions: [],
  });
  useEffect(() => {
    fetch("../../public/qt.json")
      .then((response) => response.json())
      .then((data) => {
        setState((prevState) => ({
          ...prevState,
          questions: data,
        }));
      })
      .catch((error) => {
        console.error("Error fetching quiz data: ", error);
      });
  }, []);
  return (
    <QuizContext.Provider value={{ state, setState }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;