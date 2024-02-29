function loaded() {
    console.log("The page has now loaded");
    initVars();
    loadQuestion();
}

var questions, currentQuestion, score, questionContainer, optionsContainer, quizForm, submitButton, resultContainer;

function initVars(){
    questions = [
        {
            question: "What does DPA stand for?",
            options: ["Data Processing Act", "Digital Privacy Act", "Data Protection Act", "Digital Piracy Act"],
            correctAnswer: "Data Protection Act"
        },
        {
            question: "Which of the following is not covered by the DPA (2018)?",
            options: ["Biometrics", "Political opinions", "Occupation", "Religious beliefs"],
            correctAnswer: "Occupation"
        },
        {
            question: "For ordinary circumstances, how long should it take for an organisation to provide requested information?",
            options: ["1 week", "3 weeks", "1 month", "2 months"],
            correctAnswer: "1 month"
        },
        {
            question: "When did the act recieve royal assent",
            options: ["18th March 2018", "31st March 2018", "25th May 2018", "22nd June 2018"],
            correctAnswer: "25th May 2018"
        },
        {
            question: "Which year was the previous itteration of the Data Protection Act published?",
            options: ["1996", "1998", "2002", "2006"],
            correctAnswer: "1998"
        },
        {
            question: "Which of the following rights do users have reguarding their personal data?",
            options: ["Accessing the data", "Having the data erased", "Objecting to how their data is processed", "All of the above"],
            correctAnswer: "All of the above"
        },
        {
            question: "Which of the following powers does the ICO have, in reguard to enforcing the data protection principles",
            options: ["Warnings", "Penalty notices", "Assessment notices", "All of the above"],
            correctAnswer: "All of the above"
        }
    ];
    
    currentQuestion = 0;
    score = 0;
    
    questionContainer = document.getElementById("question-container");
    optionsContainer = document.getElementById("options-container");
    quizForm = document.getElementById("quiz-form");
    submitButton = document.getElementById("submit-button");
    resultContainer = document.getElementById("result");
}

function loadQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionContainer.textContent = currentQuestionData.question;

    optionsContainer.innerHTML = "";
    currentQuestionData.options.forEach((option, index) => {
        const li = document.createElement("li");
        const label = document.createElement("label");
        const radio = document.createElement("input");

        radio.type = "radio";
        radio.name = "answer";
        radio.value = option;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(option));

        li.appendChild(label);
        optionsContainer.appendChild(li);
    });
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        return selectedAnswer.value === questions[currentQuestion].correctAnswer;
    }

    return false;
}

function updateScore() {
    score += 1;
}

function showResult() {
    resultContainer.textContent = `You scored ${score} out of ${questions.length}.`;
}

function nextQuestion() {
    if (checkAnswer()) {
        updateScore();
    }

    currentQuestion += 1;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}




