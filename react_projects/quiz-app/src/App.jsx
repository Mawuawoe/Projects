import React, { useState } from "react";
import StartScreen from "./components/StartScreen";
import QuestionScreen from "./components/QuestionScreen";
import ResutScreen from "./components/ResutScreen";
import quizQuestions from "./data/quizQuestions";

const App = () => {
  const [quizStage, setQuizStage] = useState("startScreen");
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  return (
    <div className="min-h-screen flex justify-center items-center bg-bgmain">
      <div className="bg-white w-full max-w-[600px] py-4 px-4 rounded-lg">
        {quizStage === "startScreen" && (
          <StartScreen quizStage={quizStage} setQuizStage={setQuizStage} />
        )}
        {quizStage === "questionScreen" && (
          <QuestionScreen
            quizStage={quizStage}
            setQuizStage={setQuizStage}
            score={score}
            setScore={setScore}
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
          />
        )}
        {quizStage === "resultScreen" && (
          <ResutScreen
            quizStage={quizStage}
            setQuizStage={setQuizStage}
            score={score}
            setScore={setScore}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            totalScore={quizQuestions.length}
          />
        )}
      </div>
    </div>
  );
};

export default App;
