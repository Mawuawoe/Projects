import React from "react";

const ResultScreen = ({ score, totalQuestions, onReStartQuiz }) => {
  const percentage = (score / totalQuestions) * 100;

  const getScoreMessage = () => {
    if (percentage === 100) return "Perfect Score 🎯";
    if (percentage >= 90) return "Excellent Score 🌟";
    if (percentage >= 70) return "Good Score 👍";
    if (percentage >= 50) return "Fair Score 🙂";
    return "Keep Practicing 💪";
  };

  return (
    <section className="flex flex-col items-center gap-3">
      <h1 className="text-primary text-3xl font-bold">Quiz Results</h1>
      <div className="bg-bgmain w-full text-center text-info rounded-lg">
        <p>
          You scored {score} out of {totalQuestions}
        </p>
        <p>{getScoreMessage()}</p>
      </div>
      <button
        onClick={onReStartQuiz}
        className="py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/70 cursor-pointer"
      >
        Restart Quiz
      </button>
    </section>
  );
};

export default ResultScreen;
