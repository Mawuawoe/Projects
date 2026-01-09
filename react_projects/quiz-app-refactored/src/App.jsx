import React, { useState } from "react";
import StartScreen from "./components/StartScreen";
import QuestionScreen from "./components/QuestionScreen";
import quizQuestions from "./data/quizQuestions";
import ResultScreen from "./components/ResultScreen";

const App = () => {
  // App level state
  const [quizStage, setQuizStage] = useState("start");
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const startQuiz = () => {
    setQuizStage("quiz");
    setScore(0), setCurrentQuestionIndex(0);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((s) => s + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex === quizQuestions.length) {
      setQuizStage("result");
    } else {
      setCurrentQuestionIndex((c) => c + 1);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-bgmain p-4">
      <div className="bg-white w-full max-w-[600px] py-6 px-4 rounded-lg shadow-md">
        {quizStage === "start" && <StartScreen onStartQuiz={startQuiz} />}
        {quizStage === "quiz" && (
          <QuestionScreen
            currentQuestion={quizQuestions[currentQuestionIndex]}
            questionIndex={currentQuestionIndex}
            totalQuestions={quizQuestions.length}
            score={score}
            onAnswer={handleAnswer}
          />
        )}
        {quizStage === "result" && (
          <ResultScreen
            score={score}
            totalQuestions={quizQuestions.length}
            onReStartQuiz={startQuiz}
          />
        )}
      </div>
    </div>
  );
};

export default App;
