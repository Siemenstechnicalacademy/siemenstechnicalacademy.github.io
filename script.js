
const students = [
    { name: "Siemens ", pass: "1234" }, // <--- YOUR MASTER KEY
    { name: "Saurabh", pass: "3252" }, { name: "Soham", pass: "3261" },
    { name: "Shreya", pass: "3263" }, { name: "Ruchita", pass: "3271" },
    { name: "Mithil", pass: "3274" }, { name: "Swapnil", pass: "3281" },
    { name: "Sankit", pass: "3284" }, { name: "Adil", pass: "3288" },
    { name: "Nayan", pass: "3291" }, { name: "Parth", pass: "3292" },
    { name: "Yash", pass: "3294" }, { name: "Manas", pass: "3296" },
    { name: "Sujit", pass: "3299" }, { name: "Kunal", pass: "3301" },
    { name: "Viraj", pass: "3302" }, { name: "Tejas", pass: "3311" },
    { name: "Yadnyesh", pass: "3313" }, { name: "Harsh", pass: "3314" },
    { name: "Jitesh", pass: "3320" }, { name: "Dimpal", pass: "3321" },
    { name: "Kasturi", pass: "3329" }, { name: "Daksh", pass: "3330" },
    { name: "Payal", pass: "3334" }, { name: "Samadhan", pass: "3335" },
    { name: "Pramita", pass: "3340" }, { name: "Bhushan", pass: "3341" },
    { name: "Om", pass: "3342" }, { name: "Shriraj", pass: "3344" },
    { name: "Ragini", pass: "3355" }, { name: "Sarthak", pass: "3246" },
    { name: "Paras", pass: "3251" }, { name: "Aryan", pass: "3257" },
    { name: "Nayan Ashok", pass: "3258" }, { name: "Sayali", pass: "3276" },
    { name: "Palak", pass: "3278" }, { name: "Renuka", pass: "3283" },
    { name: "Nikhil", pass: "3285" }, { name: "Ved", pass: "3286" },
    { name: "Shivani", pass: "3287" }, { name: "Nishant", pass: "3289" },
    { name: "Tanmay", pass: "3293" }, { name: "Raj", pass: "3295" },
    { name: "Aryan Ganpat", pass: "3303" }, { name: "Vighnesh", pass: "3306" },
    { name: "Teju", pass: "3316" }, { name: "Dhiraj", pass: "3317" },
    { name: "Anagha", pass: "3323" }, { name: "Indra", pass: "3324" },
    { name: "Aryan Anil", pass: "3328" }, { name: "Sandesh", pass: "3331" },
    { name: "Khushali", pass: "3332" }, { name: "Rishabh", pass: "3333" },
    { name: "Siddhesh", pass: "3336" }, { name: "Shivam", pass: "3337" },
    { name: "Ashish", pass: "3343" }, { name: "Shravan", pass: "3345" },
    { name: "Yash Sharad", pass: "3348" }, { name: "Jayshree", pass: "3352" },
    { name: "Purva", pass: "3356" }
];

// ==========================================
// 2. VARIABLES & SECURITY
// ==========================================
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timeLeft = 1800; 
let timerInterval;
let warningCount = 0; 
let isAdminSession = false; // Tracks if you logged in as Admin

function showInstructions() {
    const enteredName = document.getElementById('studentName').value.trim();
    const enteredPass = document.getElementById('studentPass').value.trim();
    const errorMsg = document.getElementById('login-error');

    // Check if logging in with Master Key
    if (enteredName === "Admin" && enteredPass === "0000") {
        isAdminSession = true;
        loadSelectedQuestions();
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('instruction-section').style.display = 'block';
        return;
    }

    // Standard student login
    const student = students.find(s => s.name.toLowerCase() === enteredName.toLowerCase() && s.pass === enteredPass);

    if (student) {
        isAdminSession = false;
        loadSelectedQuestions();
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('instruction-section').style.display = 'block';
    } else {
        errorMsg.style.display = 'block';
    }
}

// SECURITY MONITOR (Bypassed if Admin)
document.addEventListener("visibilitychange", function() {
    if (document.getElementById('question-section').style.display === 'block' && !isAdminSession) {
        if (document.hidden) {
            warningCount++;
            if (warningCount === 1) alert("⚠️ WARNING 1: Do not leave this page!");
            else if (warningCount === 2) alert("⚠️ FINAL WARNING: Next switch terminates exam!");
            else if (warningCount >= 3) {
                alert("❌ EXAM TERMINATED: Security violations.");
                finishExam(true); 
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
        document.getElementById('timer-display').innerText = `Time: ${m}:${s < 10 ? '0'+s : s}`;
        if (timeLeft <= 0) finishExam();
    }, 1000);
}

function loadQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    document.getElementById('question-number').innerText = (currentQuestionIndex + 1);
    document.getElementById('question-text').innerText = q.q;
    const container = document.getElementById('options-container');
    container.innerHTML = "";
    q.options.forEach(opt => {
        const isChecked = userAnswers[currentQuestionIndex] === opt ? "checked" : "";
        container.innerHTML += `
            <label class="option-label" style="display:block; background:#f9f9f9; padding:10px; margin:5px 0; border:1px solid #ddd; border-radius:5px; cursor:pointer;">
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

function finishExam(isTerminated = false) {
    clearInterval(timerInterval);
    let score = 0;
    currentQuestions.forEach((q, i) => { if (userAnswers[i] === q.answer) score++; });
    
    document.getElementById('question-section').style.display = 'none';
    document.getElementById('result-section').style.display = 'block';
    
    if (isTerminated) {
        document.getElementById('result-status').innerText = "TERMINATED (CHEATING)";
        document.getElementById('result-status').style.color = "red";
    }

    document.getElementById('final-score').innerText = score;
    document.getElementById('total-q').innerText = currentQuestions.length;
    document.getElementById('result-percent').innerText = `Percentage: ${Math.round((score/currentQuestions.length)*100)}%`;
}

// RETAKE LOGIC
function requestRetake() {
    const attemptName = prompt("Teacher Login Required. Enter Master Name:");
    const attemptPass = prompt("Enter Master Password:");
    
    if (attemptName === "Siemens" && attemptPass === "1234") {
        alert("Exam Reset Successful!");
        location.reload(); // Restarts the whole page for a clean re-exam
    } else {
        alert("❌ Unauthorized. Access Denied.");
    }
}
