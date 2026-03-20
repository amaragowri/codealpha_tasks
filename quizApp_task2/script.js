let quiz = [
  {
    question: "What is HTML?",
    options: ["Programming Language", "Markup Language", "Database", "Operating System"],
    answer: "Markup Language"
  },
  {
    question: "What is CSS used for?",
    options: ["Styling", "Logic", "Database", "Networking"],
    answer: "Styling"
  },
  {
    question: "What is JavaScript?",
    options: ["Styling", "Programming Language", "Database", "Hardware"],
    answer: "Programming Language"
  }
];

let currentIndex = 0;
let score = 0;
let answered = false;

// Load question
function loadQuestion() {
  answered = false;

  document.getElementById("question").innerText = quiz[currentIndex].question;

  let optionsHTML = "";
  quiz[currentIndex].options.forEach(option => {
    optionsHTML += `<button class="option-btn" onclick="checkAnswer(this, '${option}')">${option}</button>`;
  });

  document.getElementById("options").innerHTML = optionsHTML;
}

// Check answer
function checkAnswer(button, selected) {
  if (answered) return;

  let correct = quiz[currentIndex].answer;
  let buttons = document.querySelectorAll(".option-btn");

  buttons.forEach(btn => {
    if (btn.innerText === correct) {
      btn.style.backgroundColor = "green"; // correct answer
    } else {
      btn.style.backgroundColor = "red"; // wrong answers
    }
    btn.disabled = true;
  });

  if (selected === correct) {
    score++;
  }

  answered = true;
}

// Next question
function nextQuestion() {
  if (!answered) {
    alert("Please select an answer first!");
    return;
  }

  currentIndex++;

  if (currentIndex < quiz.length) {
    loadQuestion();
  } else {
    document.getElementById("question").innerText = "Quiz Completed!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("score").innerText = `Your Score: ${score}/${quiz.length}`;
  }
}

// Start
loadQuestion();