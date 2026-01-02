const questions = [
  {
    question: "Which language is used for web development?",
    options: ["Python", "HTML", "C++", "Java"],
    answer: 1
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheet",
      "Cascading Style Sheet",
      "Computer Style Sheet",
      "Colorful Style Sheet"
    ],
    answer: 1
  },
  {    
    question: "Which is a JavaScript framework?",
    options: ["React", "Django", "Laravel", "Flask"],
    answer: 0
  },
  {
    question: "Which tag is used for JavaScript?",
    options: ["<js>", "<script>", "<javascript>", "<code>"],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option-btn");
const nextBtn = document.getElementById("next-btn");
const progress = document.getElementById("progress");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreText = document.getElementById("score-text");

function loadQuestion() {
  resetOptions();
  const q = questions[currentQuestion];
  questionEl.innerText = q.question;
  progress.innerText = `Question ${currentQuestion + 1} of ${questions.length}`;

  optionBtns.forEach((btn, index) => {
    btn.innerText = q.options[index];
    btn.onclick = () => selectAnswer(btn, index);
  });
}

function selectAnswer(btn, index) {
  const correct = questions[currentQuestion].answer;

  optionBtns.forEach(b => b.disabled = true);

  if (index === correct) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
    optionBtns[correct].classList.add("correct");
  }

  nextBtn.style.display = "block";
}

function resetOptions() {
  optionBtns.forEach(btn => {
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;
  });
  nextBtn.style.display = "none";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizBox.classList.add("hide");
  resultBox.classList.remove("hide");
  scoreText.innerText = `${score} / ${questions.length}`;
}

loadQuestion();
