// Quiz questions
const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];

// DOM element selected
const startBtn = document.querySelector("#start-btn");
const questionPage = document.querySelector("#question-screen");
const startpage = document.querySelector("#start-screen");
const question = document.querySelector("#question");
const ansDiv = document.querySelector("#ans-div");
const resultScreen = document.querySelector("#result-screen");
const currentQuestionSpan = document.querySelector("#current-question-number");
const totalQuestions = document.querySelector("#total-number-of-questions");
const currentScoreSpan = document.querySelector("#current-score");
const finalScore = document.querySelector("#final-score");
const allAnswerButtons = ansDiv.querySelectorAll("button");
const restartBtn = document.querySelector("#restart-btn");
const progressBar = document.querySelector("#progress");
const resultMessage = document.querySelector("#result-message");

// variables
let currentQuestionIndex = 0;
let score = 0;

//  function to showQuestion
function showQuestion() {
  // clear previous answers
  ansDiv.innerHTML = "";

  const currentQuestion = quizQuestions[currentQuestionIndex];

  // Set question text
  question.textContent = currentQuestion.question;

  // Question info
  currentQuestionSpan.textContent = currentQuestionIndex;
  totalQuestions.textContent = quizQuestions.length;

  // progress bar
  progressBar.style.width = `${
    (currentQuestionIndex / quizQuestions.length) * 100
  }%`;

  // Create answer buttons
  currentQuestion.answers.forEach((answer) => {
    const ansBtn = document.createElement("button");

    ansBtn.classList.add(
      "w-full",
      "py-2",
      "px-2",
      "bg-bgmain",
      "rounded-lg",
      "text-info",
      "text-left",
      "hover:bg-bgmain/80",
      "transition"
    );

    ansBtn.textContent = answer.text;
    // handle answering question
    ansBtn.addEventListener("click", (e) => {
      handleAnswer(answer.correct, e, currentQuestion);
    });
    ansDiv.append(ansBtn);
  });
}

// handle answering questions
function handleAnswer(isCorrect, e, question) {
  const selectedBtn = e.currentTarget;

  // Disable all buttons immediately
  const allAnswerButtons = ansDiv.querySelectorAll("button");
  allAnswerButtons.forEach((btn) => {
    btn.disabled = true;
  });

  selectedBtn.classList.remove("bg-bgmain", "hover:bg-bgmain/80");

  if (isCorrect) {
    score++;
    currentScoreSpan.textContent = score;
    selectedBtn.classList.add("bg-right");
  } else {
    selectedBtn.classList.add("bg-wrong");

    // reveal the correct answer
    allAnswerButtons.forEach((btn, index) => {
      if (question.answers[index].correct) {
        btn.classList.add("bg-right");
      }
    });
  }

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

// function to start quiz
const startQuiz = () => {
  // add hidden to start-screen
  startpage.classList.add("hidden");
  // remove hidden from question screen to show this page
  questionPage.classList.remove("hidden");
  // add hidden from result screen
  resultScreen.classList.add("hidden");

  // At every quiz start reset variables
  currentQuestionIndex = 0;
  score = 0;

  showQuestion();
};

// Result page
function showResult() {
  // result info
  finalScore.textContent = score;

  const percentage = (score / quizQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect score!";
  } else if (percentage >= 90) {
    resultMessage.textContent = "Excellent score, but not perfect!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Very good!";
  } else if (percentage >= 70) {
    resultMessage.textContent = "Good effort!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "You passed!";
  } else if (percentage >= 50) {
    resultMessage.textContent = "Barely passed";
  } else {
    resultMessage.textContent = "Better luck next time!";
  }

  // add hidden to start-screen
  startpage.classList.add("hidden");
  // add hidden from question screen
  questionPage.classList.add("hidden");
  // remove hidden from result screen
  resultScreen.classList.remove("hidden");
}

// add event onclick to handle startQuiz function
startBtn.addEventListener("click", startQuiz);

// retart quiz when you click restart
restartBtn.addEventListener("click", startQuiz);
