// Set the countdown time in seconds (30 seconds in this case)
let totalTime = 30;

// Get references to the DOM elements
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const progressBar = document.getElementById("progress-bar"); // Add this line

// Function to start the countdown
function startCountdown() {
    const interval = setInterval(() => {
        // Calculate minutes and seconds
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;

        // Update the display
        minutesDisplay.textContent = String(minutes).padStart(2, '0');
        secondsDisplay.textContent = String(seconds).padStart(2, '0');

        // Update the progress bar width based on remaining time
        const progressPercentage = ((30 - totalTime) / 30) * 100; // Calculate filled percentage
        progressBar.style.width = `${progressPercentage}%`; // Set the width of the progress bar

        // Decrease total time
        totalTime--;

        // Stop the countdown when time is up
        if (totalTime < 0) {
            clearInterval(interval);
            alert("Time's up!");
            // Optionally reset the timer or perform any other action here
        }
    }, 1000); // Update every second
}

// Call startCountdown function when the page loads or at a specific event
document.addEventListener("DOMContentLoaded", () => {
    startCountdown(); // Start the countdown on page load
});
