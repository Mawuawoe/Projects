import React from "react";

const ResutScreen = ({
  score,
  setScore,
  totalScore,
  setQuizStage,
  setCurrentQuestionIndex,
}) => {
  // variable
  const percentage = (score / totalScore) * 100;

  // function to handleclick
  function handleClick() {
    setScore(0);
    setCurrentQuestionIndex(0);
    setQuizStage("questionScreen");
  }

  function getScoreMessage(percentage) {
    if (percentage === 100) return "Perfect Score 🎯";
    if (percentage >= 90) return "Excellent Score 🌟";
    if (percentage >= 70) return "Good Score 👍";
    if (percentage >= 50) return "Fair Score 🙂";
    return "Keep Practicing 💪";
  }

  return (
    <section className="flex flex-col gap-3 items-center">
      <h1 className="text-2xl text-primary font-bold">Quiz Results</h1>
      <div className="w-full text-center space-y-1.5 bg-bgmain text-info rounded-lg">
        <p>
          You scored {score} out {totalScore}
        </p>
        <p>{getScoreMessage(percentage)}</p>
      </div>
      <button
        onClick={handleClick}
        className="py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/70 cursor-pointer"
      >
        Restart Quiz
      </button>
    </section>
  );
};

export default ResutScreen;
