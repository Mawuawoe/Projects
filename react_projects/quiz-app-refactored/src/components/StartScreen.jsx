import React from "react";

const StartScreen = ({ onStartQuiz }) => {
  return (
    <section className="flex flex-col items-center gap-3">
      <h1 className="text-primary text-3xl font-bold">Quiz Time</h1>
      <p className="text-info">Test your knowledge with these fun questions</p>
      <button
        onClick={onStartQuiz}
        className="py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/70 cursor-pointer"
      >
        Start Quiz
      </button>
    </section>
  );
};

export default StartScreen;
