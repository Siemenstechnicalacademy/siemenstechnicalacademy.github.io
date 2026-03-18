let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timeLeft = 1800; 
let timerInterval;
let warningCount = 0; // Tracks tab switching

function showInstructions() {
    const enteredName = document.getElementById('studentName').value.trim().toLowerCase();
    const enteredPass = document.getElementById('studentPass').value.trim();
    const errorMsg = document.getElementById('login-error');

    const student = students.find(s => s.name.toLowerCase() === enteredName && s.pass === enteredPass);

    if (student) {
        loadSelectedQuestions();
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('instruction-section').style.display = 'block';
    } else {
        errorMsg.style.display = 'block';
    }
}

// SECURITY MONITOR: Detects if user leaves the tab
document.addEventListener("visibilitychange", function() {
    // Only monitor if the exam has actually started
    if (document.getElementById('question-section').style.display === 'block') {
        if (document.hidden) {
            warningCount++;
            
            if (warningCount === 1) {
                alert("⚠️ WARNING 1: Do not leave this page! Your exam will be submitted if you switch tabs again.");
            } else if (warningCount === 2) {
                alert("⚠️ FINAL WARNING: One more violation and your exam will end immediately.");
            } else if (warningCount >= 3) {
                alert("❌ EXAM TERMINATED: Multiple security violations detected. Your score is being submitted.");
                finishExam(); // Auto-submits the exam
            }
        }
    }
});

function loadSelectedQuestions() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedIds = urlParams.get('ids');
    let allQuestions = [];

    for (let topic in masterQuestionBank) {
        allQuestions = allQuestions.concat(masterQuestionBank[topic]);
    }

    if (selectedIds) {
        const idArray = selectedIds.split(',');
        currentQuestions = allQuestions.filter(q => idArray.includes(q.id));
    } else {
        currentQuestions = allQuestions.slice(0, 10);
    }
    userAnswers = new Array(currentQuestions.length).fill(null);
}

function startExam() {
    document.getElementById('instruction-section').style.display = 'none';
    document.getElementById('question-section').style.display = 'block';
    startTimer();
    loadQuestion();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        let m = Math.floor(timeLeft / 60);
        let s = timeLeft % 60;
        document.getElementById('timer-display').innerText = `Time: ${m}:${secFormat(s)}`;
        if (timeLeft <= 0) finishExam();
    }, 1000);
}

function secFormat(s) { return s < 10 ? '0'+s : s; }

function loadQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    document.getElementById('question-number').innerText = (currentQuestionIndex + 1);
    document.getElementById('question-text').innerText = q.q;
    
    const container = document.getElementById('options-container');
    container.innerHTML = "";
    q.options.forEach(opt => {
        const isChecked = userAnswers[currentQuestionIndex] === opt ? "checked" : "";
        container.innerHTML += `
            <label class="option-label">
                <input type="radio" name="answer" value="${opt}" ${isChecked} onchange="saveAnswer('${opt}')"> ${opt}
            </label>`;
    });

    document.getElementById('prev-btn').style.visibility = currentQuestionIndex === 0 ? "hidden" : "visible";
    document.getElementById('next-btn').innerText = currentQuestionIndex === currentQuestions.length - 1 ? "FINISH" : "NEXT";
}

function saveAnswer(val) { userAnswers[currentQuestionIndex] = val; }

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        if(confirm("Are you sure you want to finish?")) finishExam();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function finishExam() {
    clearInterval(timerInterval);
    let score = 0;
    currentQuestions.forEach((q, i) => { if (userAnswers[i] === q.answer) score++; });
    
    document.getElementById('question-section').style.display = 'none';
    document.getElementById('result-section').style.display = 'block';
    document.getElementById('final-score').innerText = score;
    document.getElementById('total-q').innerText = currentQuestions.length;
    document.getElementById('result-percent').innerText = `Percentage: ${Math.round((score/currentQuestions.length)*100)}%`;
}
