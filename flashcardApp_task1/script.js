let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [
  { question: "What is HTML?", answer: "HyperText Markup Language" },
  { question: "What is CSS?", answer: "Styling language" }
];

let currentIndex = 0;

// Display card
function displayCard() {
  document.getElementById("question").innerText = flashcards[currentIndex].question;
  document.getElementById("answer").innerText = flashcards[currentIndex].answer;
  document.getElementById("answer").classList.add("hidden");

  // Fill inputs for edit
  document.getElementById("newQuestion").value = flashcards[currentIndex].question;
  document.getElementById("newAnswer").value = flashcards[currentIndex].answer;
}

// Show answer
function showAnswer() {
  document.getElementById("answer").classList.remove("hidden");
}

// Next card
function nextCard() {
  currentIndex = (currentIndex + 1) % flashcards.length;
  displayCard();
}

// Previous card
function prevCard() {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  displayCard();
}

// Add new card
function addCard() {
  let q = document.getElementById("newQuestion").value;
  let a = document.getElementById("newAnswer").value;

  if (q === "" || a === "") {
    alert("Enter both question and answer");
    return;
  }

  flashcards.push({ question: q, answer: a });
  localStorage.setItem("flashcards", JSON.stringify(flashcards));

  currentIndex = flashcards.length - 1;
  displayCard();
}

// Update card
function updateCard() {
  flashcards[currentIndex].question = document.getElementById("newQuestion").value;
  flashcards[currentIndex].answer = document.getElementById("newAnswer").value;

  localStorage.setItem("flashcards", JSON.stringify(flashcards));
  displayCard();
}

// Delete card
function deleteCard() {
  flashcards.splice(currentIndex, 1);

  if (flashcards.length === 0) {
    flashcards.push({ question: "No cards left", answer: "Add new card" });
    currentIndex = 0;
  } else {
    currentIndex = currentIndex % flashcards.length;
  }

  localStorage.setItem("flashcards", JSON.stringify(flashcards));
  displayCard();
}

// Initial load
displayCard();