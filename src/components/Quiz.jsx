import { useState, useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const Quiz = () => {
  const { state, setState } = useContext(QuizContext);

  const [currentAnswer, setCurrentAnswer] = useState("");
  const [showName, setShowName] = useState(false);
  const handleAnswerQuestion = () => {
    if (
      currentAnswer === state.questions[state.currentQuestion].correctAnswer
    ) {
      setState((prevState) => ({
        ...prevState,
        score: prevState.score + 1,
      }));
    }

    setState((prevState) => ({
      ...prevState,
      currentQuestion: prevState.currentQuestion + 1,
    }));
  };

  if (state.currentQuestion === state.questions.length) {
    return (
      <div>
        <h1>Quiz Over!</h1>
        <p>
          Your score is {state.score}. You got {state.score} out of{" "}
          {state.questions.length} questions correct.
        </p>
      </div>
    );
  } else {
    const currentQuestion = state.questions[state.currentQuestion];

    return (
      <div>
        <input
          type="text"
          placeholder="Enter your name to start!"
          value={state.username}
          onChange={(e) => setState({ ...state, username: e.target.value })}
        />
        <button onClick={() => setShowName(true)}>Go!</button>
        {showName && (
          <>
            <h1 style={{ fontSize: 50 }}>
              <i> Welcome to the Quiz {state.username} </i> <br /> Question{" "}
              {state.currentQuestion + 1}
            </h1>
            <p>{currentQuestion.question}</p>

            <ul>
              {currentQuestion.answers.map((answer) => (
                <li key={answer}>
                  <input
                    type="radio"
                    name="answer"
                    value={answer}
                    checked={currentAnswer === answer}
                    onChange={() => setCurrentAnswer(answer)}
                  />
                  {answer}
                </li>
              ))}
            </ul>

            <button onClick={handleAnswerQuestion}>Next</button>
          </>
        )}
      </div>
    );
  }
};

export default Quiz;
