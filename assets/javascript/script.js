// Questions and answers for game area

const questions = [

    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hand Text Makeup Language", correct: false },
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Hard Text Markdown Language", correct: false },
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Cascading Style Sheeps", correct: false },
            { text: "Cascading Sheets Style", correct: false },
            { text: "Cascading Style Sheets", correct: true },
        ]
    },
    {
        question: "What does SQL stand for?",
        answers: [
            { text: "Structured Query Language", correct: true },
            { text: "Standard Query Lamp", correct: false },
            { text: "Styled Question Language", correct: false },
        ]
    }
];

// Variables for game area

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// Start quiz function

function startQuiz() {
currentQuestionIndex = 0;
score = 0;
nextButton.innerHTML = "Next";
showQuestion();
}

// Reset answers inside answer-buttons

// Checking for the right and wrong answers 

// Next buttons function

// Show score function