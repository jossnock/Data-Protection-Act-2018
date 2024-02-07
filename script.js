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


//experimenting:
function showQuestions(){
    var questions = [
        {
            question: "Which of the following is not covered by the DPA (2018):",
            answers: {
                a: "Biometrics",
                b: "Political Opinions",
                c: "Occupation"
            },
            correctAnswer: "c"
        },
        {
            question: "For ordinary circumstances, how long should it take for an organisation to provide requested information",
            answers: {
                a: "1 week",
                b: "2 months",
                c: "6 months"
            },
            correctAnswer: "b"
        },
    ];

}
function showResults(){
    
}

showQuestions();
