const questionBank = [
    { q: "Two angles are said to be supplementary when their sum is equal to...", options: ["90°", "120°", "180°", "360°"], answer: "180°" },
    { q: "If one supplementary angle is 150°, find the other angle.", options: ["30°", "45°", "10°", "25°"], answer: "30°" },
    { q: "The supplementary angle of 120° is...", options: ["30°", "60°", "90°", "180°"], answer: "60°" },
    { q: "The formula for the diagonal of a square is...", options: ["√2 * a", "√2 * a²", "2 * a", "a / √2"], answer: "√2 * a" },
    { q: "Which type of quadrilateral has all sides and all diagonals equal?", options: ["Rectangle", "Square", "Rhombus", "Parallelogram"], answer: "Square" },
    { q: "Perimeter of a square is found by the formula...", options: ["√2 * side", "4 * side", "2 * side", "side²"], answer: "4 * side" },
    { q: "The perimeter of a square is 100mm. Find its side.", options: ["15 mm", "20 mm", "25 mm", "30 mm"], answer: "25 mm" },
    { q: "Find the diagonal of a square whose side is 8 cm.", options: ["14.44 cm", "13.22 cm", "11.31 cm", "11.24 cm"], answer: "11.31 cm" },
    { q: "Perimeter of a square sheet is 44 cm. Find its area.", options: ["88 cm²", "121 cm²", "256 cm²", "441 cm²"], answer: "121 cm²" },
    { q: "The formula to find the perimeter of a rectangle is...", options: ["2 * l * b", "l * b", "2 * (l + b)", "2 * (l - b)"], answer: "2 * (l + b)" },
    { q: "Area of a rectangle is...", options: ["Length x Breadth", "2 * (Length + Breadth)", "Base x Height", "1/2 * Base x Height"], answer: "Length x Breadth" },
    { q: "Find the perimeter of a square steel plate whose side is 28 cm.", options: ["142 cm", "132 cm", "122 cm", "112 cm"], answer: "112 cm" },
    { q: "How many sides does a trapezium have?", options: ["6", "5", "4", "3"], answer: "4" },
    { q: "The sum of internal angles in a triangle is...", options: ["90°", "180°", "270°", "360°"], answer: "180°" },
    { q: "What is the area of a square whose diagonal is 15 cm?", options: ["112.5 cm²", "111.25 cm²", "110.25 cm²", "109.35 cm²"], answer: "112.5 cm²" },
    { q: "The area of a rhombus is 84cm². One diagonal is 12cm. Find the other.", options: ["12 cm", "13 cm", "14 cm", "15 cm"], answer: "14 cm" },
    { q: "In a parallelogram, opposite sides are parallel and equal, but angles are...", options: ["Always 90°", "Not at right angles", "Always 45°", "Sum to 100°"], answer: "Not at right angles" },
    { q: "Area of a parallelogram is calculated by...", options: ["Base x Height", "2 x Base x Height", "Side²", "Base x Height / 2"], answer: "Base x Height" },
    { q: "An isosceles triangle has how many equal angles?", options: ["One", "Two", "Three", "None"], answer: "Two" },
    { q: "If two angles of an isosceles triangle sum to 130°, the third angle is...", options: ["65°", "60°", "50°", "70°"], answer: "50°" }
];

let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = new Array(20).fill(null); 
let timeLeft = 1800; 
let timerInterval;
let violationCount = 0;

function shuffle(a) { return a.sort(() => Math.random() - 0.5); }

// --- UPDATED LOGIN LOGIC ---
function showInstructions() {
    const name = document.getElementById('studentName').value.trim();
    const pass = document.getElementById('studentPass').value.trim();
    const errorMsg = document.getElementById('login-error');

    // 1. Check for SIR'S MASTER RESET
    if (name === "Siemens" && pass === "1234") {
        localStorage.removeItem("examStatus"); // Clears the lock
        alert("Sir, the exam access has been RESET. Student can login now.");
        location.reload();
        return;
    }

    // 2. Check if Student is already LOCKED OUT
    if (localStorage.getItem("examStatus") === "done") {
        errorMsg.innerText = "❌ You have already submitted. Contact Sir to reset.";
        errorMsg.style.display = 'block';
        return;
    }

    // 3. Normal Student Login
    if (name === "Deva" && pass === "1371") {
        errorMsg.style.display = 'none';
        currentQuestions = shuffle([...questionBank]);
        currentQuestions.forEach(q => q.options = shuffle([...q.options]));
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('instruction-section').style.display = 'block';
    } else {
        errorMsg.innerText = "❌ Name or Password is not correct.";
        errorMsg.style.display = 'block';
    }
}

function startExam() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) { elem.requestFullscreen(); }
    document.getElementById('instruction-section').style.display = 'none';
    document.getElementById('question-section').style.display = 'block';
    timerInterval = setInterval(() => {
        timeLeft--;
        let min = Math.floor(timeLeft / 60);
        let sec = timeLeft % 60;
        document.getElementById('timer-display').innerText = `Time: ${min}:${sec < 10 ? '0'+sec : sec}`;
        if (timeLeft <= 0) { calculateFinalScore(); }
    }, 1000);
    loadQuestion();
}

function loadQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    document.getElementById('question-text').innerText = q.q;
    document.getElementById('question-number').innerText = currentQuestionIndex + 1;
    document.getElementById('progress-bar').style.width = ((currentQuestionIndex + 1) / 20 * 100) + "%";
    const container = document.getElementById('options-container');
    container.innerHTML = ""; 
    q.options.forEach(opt => {
        const checked = userAnswers[currentQuestionIndex] === opt ? "checked" : "";
        container.innerHTML += `<label class="option-label"><input type="radio" name="opt" value="${opt}" ${checked} onchange="userAnswers[${currentQuestionIndex}]='${opt}'"> ${opt}</label>`;
    });
    document.getElementById('prev-btn').style.visibility = currentQuestionIndex === 0 ? "hidden" : "visible";
    document.getElementById('next-btn').innerText = currentQuestionIndex === 19 ? "FINISH" : "NEXT";
}

function nextQuestion() {
    if (currentQuestionIndex < 19) { currentQuestionIndex++; loadQuestion(); } 
    else { if(confirm("Submit Exam?")) calculateFinalScore(); }
}

function prevQuestion() { if (currentQuestionIndex > 0) { currentQuestionIndex--; loadQuestion(); } }

// --- UPDATED FINISH LOGIC ---
function calculateFinalScore() {
    clearInterval(timerInterval);
    
    // LOCK the student browser so they can't login again
    localStorage.setItem("examStatus", "done");

    let score = 0;
    currentQuestions.forEach((q, i) => { if (userAnswers[i] === q.answer) score++; });
    const percent = (score / 20) * 100;
    
    document.getElementById('question-section').style.display = 'none';
    document.getElementById('result-section').style.display = 'block';
    document.getElementById('final-score').innerText = score;
    document.getElementById('result-percent').innerText = `Percentage: ${percent}%`;
    
    const status = document.getElementById('result-status');
    if (violationCount >= 2) {
        status.innerText = "TERMINATED";
        status.style.color = "red";
    } else {
        status.innerText = percent >= 70 ? "PASSED" : "FAILED";
        status.style.color = percent >= 70 ? "#28a745" : "#d9534f";
    }
}

document.addEventListener("visibilitychange", function() {
    if (document.hidden && document.getElementById('question-section').style.display === 'block') {
        violationCount++;
        if (violationCount === 1) {
            alert("⚠️ WARNING: You left the exam screen. Next time will terminate your exam!");
        } else if (violationCount >= 2) {
            alert("❌ EXAM TERMINATED: Too many violations.");
            calculateFinalScore();
        }
    }
});

document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
    if (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'u' || e.key === 's')) {
        e.preventDefault();
        alert("Shortcuts disabled.");
    }
});
