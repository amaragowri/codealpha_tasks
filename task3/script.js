let activities = JSON.parse(localStorage.getItem("activities")) || [];

// Add activity
function addActivity() {
  let activity = document.getElementById("activity").value;
  let duration = document.getElementById("duration").value;
  let calories = document.getElementById("calories").value;

  if (activity === "" || duration === "" || calories === "") {
    alert("Fill all fields");
    return;
  }

  let data = {
    activity,
    duration: Number(duration),
    calories: Number(calories)
  };

  activities.push(data);

  localStorage.setItem("activities", JSON.stringify(activities));

  displayActivities();
  clearInputs();
}

// Display activities
function displayActivities() {
  let list = document.getElementById("activityList");
  list.innerHTML = "";

  let totalCalories = 0;

  activities.forEach(item => {
    totalCalories += item.calories;

    list.innerHTML += `
      <div class="activity-item">
        <p><b>${item.activity}</b></p>
        <p>Duration: ${item.duration} mins</p>
        <p>Calories: ${item.calories}</p>
      </div>
    `;
  });

  document.getElementById("totalActivities").innerText = activities.length;
  document.getElementById("totalCalories").innerText = totalCalories;

  updateProgress(totalCalories);
}

// Progress bar (goal = 500 calories)
function updateProgress(calories) {
  let goal = 500;
  let percent = (calories / goal) * 100;

  if (percent > 100) percent = 100;

  document.getElementById("progressBar").style.width = percent + "%";
}

// Clear inputs
function clearInputs() {
  document.getElementById("activity").value = "";
  document.getElementById("duration").value = "";
  document.getElementById("calories").value = "";
}

// Load data on start
displayActivities();