function loaded() {
    console.log("The page has now loaded");
}

function showNothing() {
    document.getElementById("feedback-area").innerHTML = "";
}

function showCorrect() {
    document.getElementById("feedback-area").innerHTML = "Correct";
    const myTimeout = setTimeout(showNothing, 5000);
}

function showIncorrect() {
document.getElementById("feedback-area").innerHTML = "Incorrect"
const myTimeout = setTimeout(showNothing, 5000);
}