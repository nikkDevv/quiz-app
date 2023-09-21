const questions = [
    {
        question: "What is the name of the ancient script used by the Philippines before Spanish colonization?",
        answers: [
            { text: "Kawi", correct: false},
            { text: "Baybayin", correct: true},
            { text: "Alibata", correct: false},
            { text: "Tagalog script", correct: false},
        ]
    },
    {
        question: "Who is considered the national hero of the Philippines?",
        answers: [
            { text: "Jose Rizal", correct: true},
            { text: "Andres Bonifacio", correct: false},
            { text: "Emilio Aguinaldo", correct: false},
            { text: "Ferdinand Marcos", correct: false},
        ]
    },
    {
        question: "What event marked the declaration of Philippine independence from Spanish rule?",
        answers: [
            { text: "EDSA Revolution", correct: false},
            { text: "Battle of Mactan", correct: false},
            { text: "Cry of Pugad Lawin", correct: false},
            { text: "Declaration of Philipine Independece", correct: true},
        ]
    },
    {
        question: "Which Philippine president served the longest non-consecutive term in office?",
        answers: [
            { text: "Corazon Aquino", correct: false},
            { text: "Fidel V Ramos", correct: false},
            { text: "Gloria Macapagal-Arroyo", correct: false},
            { text: "Manuel L. Quezon", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}


function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("incorrect");
    }
}


startQuiz();
