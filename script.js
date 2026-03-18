// --- STUDENT DATABASE ---
const students = [
    { name: "Deva", pass: "1371" },
    { name: "Hitesh", pass: "2685" },
    { name: "Saurabh", pass: "3252" },
    { name: "Soham", pass: "3261" },
    { name: "Shreya", pass: "3263" },
    // ... add more students here as needed
];

let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = []; 
let timeLeft = 1800; 
let timerInterval;
let violationCount = 0;

// 1. GET QUESTIONS FROM THE MASTER BANK (questions.js)
function loadSelectedQuestions() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedIds = urlParams.get('ids');

    let allQuestionsList = [];
    for (let topic in masterQuestionBank) {
        allQuestionsList = allQuestionsList.concat(masterQuestionBank[topic]);
    }

    if (selectedIds) {
        // Teacher generated a specific link
        const idArray = selectedIds.split(',');
        currentQuestions = allQuestionsList.filter(q => idArray.includes(q.id));
    } else {
        // Standard Link: Shuffle all and pick 20
        currentQuestions = allQuestionsList.sort(() => 0.5 - Math.random()).slice(0, 20);
    }
    
    // Shuffle options for each question
    currentQuestions.forEach(q => q.options = q.options.sort(() => 0.5 - Math.random()));
    userAnswers = new Array(currentQuestions.length).fill(null);
}

function showInstructions() {
    const enteredNameRaw = document.getElementById('studentName').value.trim();
    const enteredPass = document.getElementById('studentPass').value.trim();
    const errorMsg = document.getElementById('login-error');

    // ADMIN MASTER KEY
    if (enteredNameRaw.toUpperCase() === "ADMIN" && enteredPass === "0000") {
        localStorage.removeItem("examStatus");
        alert("Admin: System Reset.");
        location.reload();
        return;
    }

    const student = students.find(s => {
        const firstName = s.name.split(' ')[0].toLowerCase();
        return firstName === enteredNameRaw.toLowerCase() && s.pass === enteredPass;
    });

    if (student) {
        loadSelectedQuestions();
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('instruction-section').style.display = 'block';
    } else {
        errorMsg.innerText = "❌ Invalid Name or TC Number.";
        errorMsg.style.display = 'block';
    }
}

function startExam() {
    document.getElementById('instruction-section').style.display = 'none';
    document.getElementById('question-section').style.display = 'block';
    
    timerInterval = setInterval(() => {
        timeLeft--;
        let min = Math.floor(timeLeft / 60);
        let sec = timeLeft % 60;
        document.getElementById('timer-display').innerText = `Time: ${min}:${sec < 10 ? '0'+sec : sec}`;
        if (timeLeft <= 0) calculateFinalScore();
    }, 1000);
    
    loadQuestion();
}

function loadQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    document.getElementById('question-text').innerText = q.q;
    document.getElementById('question-number').innerText = currentQuestionIndex + 1;
    document.getElementById('progress-bar').style.width = ((currentQuestionIndex + 1) / currentQuestions.length * 100) + "%";
    
    const container = document.getElementById('options-container');
    container.innerHTML = ""; 
    q.options.forEach(opt => {
        const checked = userAnswers[currentQuestionIndex] === opt ? "checked" : "";
        container.innerHTML += `<label class="option-label"><input type="radio" name="opt" value="${opt}" ${checked} onchange="userAnswers[${currentQuestionIndex}]='${opt}'"> ${opt}</label>`;
    });

    document.getElementById('prev-btn').style.visibility = currentQuestionIndex === 0 ? "hidden" : "visible";
    document.getElementById('next-btn').innerText = currentQuestionIndex === currentQuestions.length - 1 ? "FINISH" : "NEXT";
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        if(confirm("Submit Exam?")) calculateFinalScore();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function calculateFinalScore() {
    clearInterval(timerInterval);
    let score = 0;
    currentQuestions.forEach((q, i) => { if (userAnswers[i] === q.answer) score++; });
    
    const percent = Math.round((score / currentQuestions.length) * 100);
    document.getElementById('question-section').style.display = 'none';
    document.getElementById('result-section').style.display = 'block';
    document.getElementById('final-score').innerText = score;
    document.getElementById('result-percent').innerText = `Percentage: ${percent}%`;
}
