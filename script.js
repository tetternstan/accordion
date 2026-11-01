// 1. Grab all the question buttons
const questions = document.querySelectorAll(".accordion button");

// 2. Open one answer or close it
function setOpen(button, open) {
    const answer = document.getElementById(button.getAttribute("aria-controls"));

    button.setAttribute("aria-expanded", open);
    answer.hidden = !open;
}

// 3. What happens when a question is clicked
function toggleQuestion(clickedButton) {
    const wasOpen = clickedButton.getAttribute("aria-expanded") === "true";

    // Close every question first
    questions.forEach(function (button) {
        setOpen(button, false);
    });

    // Then open the clicked one, unless it was already open
    if (!wasOpen) {
        setOpen(clickedButton, true);
    }
}

// 4. Listen for a click on every question
questions.forEach(function (button) {
    button.addEventListener("click", function () {
        toggleQuestion(button);
    });
});