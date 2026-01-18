import React, { useState } from "react";
import quizQuestions from "../data/quizQuestions";

const QuestionScreen = ({
  score,
  setScore,
  quizStage,
  setQuizStage,
  currentQuestionIndex,
  setCurrentQuestionIndex,
}) => {
  // variable
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;
  const totalQuestionNumber = quizQuestions.length;
  const progress = (currentQuestionIndex / quizQuestions.length) * 100;

  // state variable
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [isDisabled, setIsdisabled] = useState(false);

  // function to handle click
  function handleClick(isCorrect, index) {
    if (isDisabled) return;

    setSelectedAnswerIndex(index);
    setIsdisabled(true);

    if (isCorrect) {
      setScore((s) => s + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex + 1 === quizQuestions.length) {
        setQuizStage("resultScreen");
      } else {
        setCurrentQuestionIndex((c) => c + 1);
        setSelectedAnswerIndex(null);
        setIsdisabled(false);
      }
    }, 1000);
  }

  function getBtnClass(answer, index) {
    if (index === selectedAnswerIndex && answer.correct) {
      return "bg-right";
    }

    if (index === selectedAnswerIndex && !answer.correct) {
      return "bg-wrong";
    }

    return "bg-bgmain hover:bg-bgmain/70";
  }

  return (
    <section className="flex flex-col gap-3 items-center">
      <h3 className="font-bold text-2xl">{currentQuestion.question}</h3>
      <div id="question-info" className="w-full flex justify-between">
        <p>
          Question {questionNumber} of {totalQuestionNumber}
        </p>
        <p>Score: {score}</p>
      </div>
      <div className="flex flex-col gap-1.5 w-full justify-self-start">
        {currentQuestion.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleClick(answer.correct, index)}
            className={`py-2 px-4 rounded-lg text-start cursor-pointer transition ${getBtnClass(
              answer,
              index
            )}`}
          >
            {answer.text}
          </button>
        ))}
      </div>
      <div className="w-full h-2 bg-bgmain rounded-lg overflow-hidden">
        <div className="h-2 bg-primary" style={{ width: `${progress}%` }}></div>
      </div>
    </section>
  );
};

export default QuestionScreen;
