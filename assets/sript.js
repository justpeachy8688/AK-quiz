var startScreen = document.getElementById("start-screen")
var scoreSubmission = document.getElementById("score-submission")
var quizTimer = document.getElementById("timer")
var timeLeft = 76;
var timerInterval;
document.getElementById("start-button").addEventListener("click", onStartQuizClick)
var questionsEl = document.getElementById("questions");
var quizBody = document.getElementById("quiz");
var gameoverDiv = document.getElementById("gameover");
var startQuizDiv = document.getElementById("start-screen");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");


function onStartQuizClick() {
    startScreen.classList.add("d-none")
    scoreSubmission.classList.remove("d-none")
    gameoverDiv.style.display = "none";
    generateQuizQuestion();
}

//Quiz Questions
var quizQuestions = [{
    question: "In 1867, what was the cost (per acre) that the United States purchased Alaska for?",
    choiceA: "$1,000",
    choiceB: "$0.02",
    choiceC: "$350",
    choiceD: "$5",
    correctAnswer: "B"
},
{
    question: "What is the tallest peak in Alaska?",
    choiceA: "Mount Foraker",
    choiceB: "Mount Saint Elias",
    choiceC: "Redoubt",
    choiceD: "Denali",
    correctAnswer: "D"
},
{
    question: "What is Alaska's capitol city that is only accessible by boat or plane?",
    choiceA: "Juneau",
    choiceB: "Anchorage",
    choiceC: "Fairbanks",
    choiceD: "Seward",
    correctAnswer: "A"
},
{
    question: "What is Alaska's state bird?",
    choiceA: "Puffin",
    choiceB: "Ptarmigan",
    choiceC: "Raven",
    choiceD: "Seagull",
    correctAnswer: "B"
},
{
    question: "What is the state sport of Alaska?",
    choiceA: "Hockey",
    choiceB: "Baseball",
    choiceC: "Dog Mushing",
    choiceD: "Bear Wrestling",
    correctAnswer: "C"
},
{
    question: "Approximately, how many lakes are there in Alaska?",
    choiceA: "50",
    choiceB: "26",
    choiceC: "3",
    choiceD: "3,000,000",
    correctAnswer: "D"
},
{
    question: "The ony battle in WWII to take place on American soil happened on what Alaskan island?",
    choiceA: "Kodiak",
    choiceB: "Attu",
    choiceC: "Barter",
    choiceD: "Fox Island",
    correctAnswer: "B"
},
];


//Timer
timerInterval = setInterval(function () {
    timeLeft--;
    quizTimer.textContent = "Time left: " + timeLeft;

    if (timeLeft === 0) {
        clearInterval(timerInterval);
        showScore();
    }
}, 1000);
quizBody.style.display = "block";

//In 1867, what was the cost (per acre) that the United States purchased Alaska for?
//What is the tallest peak in Alaska?
//What is Alaska's capitol city that is only accessible by boat or plane?
//What is Alaska's state bird?
//What is the state sport of Alaska?
//Approximately, how many lakes are there in Alaska?
//The ony battle in WWII to take place on American soil happened on what Alaskan island?


//submit button