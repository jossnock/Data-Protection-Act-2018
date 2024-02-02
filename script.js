function loaded() {
    console.log("The page has now loaded");
}

function showCorrect() {
    document.getElementById("feedback-area").innerHTML = "Correct"
}

function showIncorrect() {
document.getElementById("feedback-area").innerHTML = "Incorrect"
}