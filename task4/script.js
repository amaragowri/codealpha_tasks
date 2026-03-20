// Data (can be replaced with backend later)
let data = {
  vocab: [
    { word: "Hello", translation: "Namaste" },
    { word: "Water", translation: "Neellu" },
    { word: "Food", translation: "Aaharam" }
  ],
  phrases: [
    { word: "How are you?", translation: "Ela unnaru?" },
    { word: "Thank you", translation: "Dhanyavadalu" }
  ]
};

let currentCategory = "vocab";
let index = 0;

// Load card
function loadCard() {
  let item = data[currentCategory][index];

  document.getElementById("word").innerText = item.word;
  document.getElementById("translation").innerText = item.translation;
  document.getElementById("translation").classList.add("hidden");

  loadQuiz();
}

// Show translation
function showTranslation() {
  document.getElementById("translation").classList.remove("hidden");
}

// Next
function nextCard() {
  index = (index + 1) % data[currentCategory].length;
  loadCard();
}

// Previous
function prevCard() {
  index = (index - 1 + data[currentCategory].length) % data[currentCategory].length;
  loadCard();
}

// Change category
document.getElementById("category").addEventListener("change", function() {
  currentCategory = this.value;
  index = 0;
  loadCard();
});

// Quiz
function loadQuiz() {
  let item = data[currentCategory][index];
  document.getElementById("quizQuestion").innerText = "Translate: " + item.word;
  document.getElementById("quizAnswer").value = "";
  document.getElementById("result").innerText = "";
}

// Check answer
function checkAnswer() {
  let item = data[currentCategory][index];
  let userAnswer = document.getElementById("quizAnswer").value;

  if (userAnswer.toLowerCase() === item.translation.toLowerCase()) {
    document.getElementById("result").innerText = "Correct ✅";
  } else {
    document.getElementById("result").innerText = "Wrong ❌ (Ans: " + item.translation + ")";
  }
}

// Initial load
loadCard();