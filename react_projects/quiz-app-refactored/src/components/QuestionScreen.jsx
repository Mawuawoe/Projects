import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const QuestionScreen = ({
  currentQuestion,
  questionIndex,
  totalQuestions,
  score,
  onAnswer,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  // handle answer click
  function handleClick(isCorrect, index) {
    setSelectedIndex(index);
    setIsDisabled(true);

    setTimeout(() => {
      onAnswer(isCorrect);
      setSelectedIndex(null);
      setIsDisabled(false);
    }, 1000);
  }

  const getBtnClass = (answer, index) => {
    if (index === selectedIndex && answer.correct) return "bg-green-300";
    if (index === selectedIndex && !answer.correct) return "bg-red-300";
    return "bg-bgmain hover:bg-bgmain/70";
  };

  const progress = (questionIndex / totalQuestions) * 100;

  return (
    <section className="flex flex-col gap-3 items-center w-full">
      <h3 className="text-xl font-bold">{currentQuestion.question}</h3>
      <div className="w-full flex justify-between text-info">
        <p>
          Question {questionIndex} of {totalQuestions}
        </p>
        <p>Score: {score}</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        {currentQuestion.answers.map((answer, index) => (
          <button
            key={index}
            disabled={isDisabled}
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
      <ProgressBar progress={progress} />
    </section>
  );
};

export default QuestionScreen;
