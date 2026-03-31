
// --- APPLICATION STATE ---
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timeLeft = 1800; // 30 minutes
let timerInterval;
let violationCount = 0;

// Helper to shuffle
// Fisher-Yates (Knuth) Shuffle Algorithm - High-Performance & Truly Unbiased
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// Helper to sanitize names for Firebase paths
function getSafeName(name) {
    return name ? name.replace(/[.#$[\]]/g, "_") : "unknown_user";
}

// ===============================
// 🔥 STRICT RANDOMIZED NO-REPEAT SYSTEM
// ===============================
function generateQuestionsByLogin(bank, count, studentName) {
    // 61st Batch Topics (Total 25)
    const topicDistribution = {
        "volume": 8,
        "algebra": 8,
        "mensuration": 9
    };

    let drawTasks = [];

    // 1. Add normal topics
    Object.keys(topicDistribution).forEach(topic => {
        drawTasks.push({
            topic: topic,
            poolKeySuffix: topic,
            questions: bank[topic] || [],
            needed: topicDistribution[topic]
        });
    });

    let finalQuestions = [];

    // 2. Process each task independently to maintain strict distribution
    drawTasks.forEach(task => {
        let poolKey = studentName + "_pool_" + task.poolKeySuffix;
        let topicPool = [];

        try {
            let storedPool = localStorage.getItem(poolKey);
            if (storedPool) {
                topicPool = JSON.parse(storedPool);
            }
        } catch (e) {
            console.error("Error reading question pool", e);
        }

        const allTopicQuestions = task.questions;
        if (allTopicQuestions.length === 0) return; // Skip if no questions in bank

        const needed = task.needed;

        // Initialize/Refill pool if empty or too small
        if (!topicPool || topicPool.length < needed) {
            // "Don't repeat until the last one": Refill with all available questions, shuffled
            topicPool = shuffle([...allTopicQuestions]);
        }

        // Draw exactly what's needed
        let drawnQuestions = topicPool.splice(0, needed);

        // Add topic metadata
        drawnQuestions.forEach(q => {
            finalQuestions.push({ ...q, topic: task.topic });
        });

        // Save the remaining pool back
        localStorage.setItem(poolKey, JSON.stringify(topicPool));
    });

    // 4. Final shuffle so topics are mixed (Truly Randomized)
    finalQuestions = shuffle(finalQuestions);

    // 5. Shuffle the options within each question
    finalQuestions = finalQuestions.map(q => {
        return { ...q, options: shuffle([...q.options]) };
    });

    return finalQuestions;
}

// ===============================
// 🔑 LOGIN FUNCTION
// ===============================
function showInstructions() {
    const name = document.getElementById('studentName').value.trim();
    const tc = document.getElementById('tcNumber').value.trim();
    const pass = document.getElementById('studentPass').value.trim();
    const errorMsg = document.getElementById('login-error');

    if (name.toLowerCase() === "siemens" && pass === "1234") {
        localStorage.clear();
        alert("✅ Admin: Access has been RESET.");
        location.reload();
        return;
    }

    if (!name || !tc || !pass) {
        alert("Please fill in all details (Name, TC, and Password)!");
        return;
    }

    const student = students.find(s => {
        const dbName = s.name.split(' ')[0].toLowerCase();
        const inputName = name.split(' ')[0].toLowerCase();
        return dbName === inputName && s.pass === pass && s.batch === "61st";
    });

    if (student) {
        const safeName = getSafeName(student.name);
        // ── Step 1: Check exam activation for this student's division ──
        const divKey = '61st_' + student.division;
        database.ref('exam_activation/' + divKey).once('value').then(activationSnap => {
            const activationData = activationSnap.val();
            const isActive = activationData && activationData.active === true;

            if (!isActive) {
                errorMsg.innerText = `⏳ Exam not activated yet for 61st ${student.division}. Please wait for your instructor.`;
                errorMsg.style.display = 'block';
                return;
            }

            // ── Step 2: Check session lock ──
            return database.ref('student_sessions/' + safeName).once('value').then(snapshot => {
                const data = snapshot.val();
                if (data && data.locked) {
                    errorMsg.innerText = "❌ Account Locked: You have already logged in. Ask Admin to reset.";
                    errorMsg.style.display = 'block';
                    localStorage.setItem("currentStudent", student.name);
                    checkAndStartUserListener();
                } else {
                    database.ref('student_sessions/' + safeName).set({
                        locked: true,
                        timestamp: Date.now()
                    });

                    localStorage.setItem("currentStudent", student.name);
                    localStorage.setItem("currentTC", tc);
                    localStorage.setItem("currentBatch", "61st");
                    localStorage.setItem("currentDivision", student.division);

                    document.getElementById('login-section').style.display = 'none';
                    document.getElementById('instruction-section').style.display = 'block';

                    let loginCountKey = student.name + "_loginCount";
                    let loginCount = parseInt(localStorage.getItem(loginCountKey) || "0");
                    currentQuestions = generateQuestionsByLogin(questionBank, loginCount, student.name);
                    userAnswers = new Array(currentQuestions.length).fill(null);

                    localStorage.setItem(loginCountKey, loginCount + 1);
                }
            });
        }).catch(err => {
            console.error(err);
            alert("Could not connect to database. Check your internet.");
        });
    } else {
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
        document.getElementById('timer-display').innerText = `Time: ${min}:${sec < 10 ? '0' + sec : sec}`;
        if (timeLeft <= 0) calculateFinalScore();
    }, 1000);

    loadQuestion();
}

// ===============================
// 🎯 FIX: CAPTURING ANSWERS CORRECTLY
// ===============================
function loadQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    document.getElementById('question-text').innerText = q.q || q.question;
    document.getElementById('question-number').innerText = currentQuestionIndex + 1;
    document.getElementById('progress-bar').style.width = ((currentQuestionIndex + 1) / currentQuestions.length * 100) + "%";

    const container = document.getElementById('options-container');
    container.innerHTML = "";

    q.options.forEach(opt => {
        const isChecked = userAnswers[currentQuestionIndex] === opt;

        const optionBtn = document.createElement('label');
        optionBtn.className = "option-label";
        optionBtn.innerHTML = `
            <input type="radio" name="opt" value="${opt.replace(/"/g, '&quot;')}" ${isChecked ? 'checked' : ''}>
            ${opt}
        `;

        optionBtn.onclick = () => {
            userAnswers[currentQuestionIndex] = opt;
        };

        container.appendChild(optionBtn);
    });

    document.getElementById('prev-btn').style.visibility = currentQuestionIndex === 0 ? "hidden" : "visible";
    document.getElementById('next-btn').innerText = currentQuestionIndex === (currentQuestions.length - 1) ? "FINISH" : "NEXT";
}



function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        if (confirm("Submit Exam?")) calculateFinalScore();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// ===============================
// 📊 FIX: PREVENTING "UNDEFINED" IN REPORT
// ===============================
function calculateFinalScore() {
    clearInterval(timerInterval);
    localStorage.setItem("examStatus", "done");

    let score = 0;
    const reportDetails = currentQuestions.map((q, i) => {
        const isCorrect = userAnswers[i] === q.answer;
        if (isCorrect) score++;
        return {
            question: q.q || q.question,
            userSelection: userAnswers[i] || "Not Answered",
            correctAnswer: q.answer,
            status: isCorrect
        };
    });

    const studentName = localStorage.getItem("currentStudent") || "Unknown";
    const tcNo = localStorage.getItem("currentTC") || "N/A";
    const studentBatch = localStorage.getItem("currentBatch") || "N/A";
    const studentDivision = localStorage.getItem("currentDivision") || "N/A";
    const finalPercent = Math.round((score / currentQuestions.length) * 100);

    // SEND TO FIREBASE (includes division)
    database.ref('exam_results').push({
        name: studentName,
        tcNumber: tcNo,
        batch: studentBatch,
        division: studentDivision,
        score: score,
        totalQuestions: currentQuestions.length,
        percentage: finalPercent,
        details: reportDetails,
        submittedAt: new Date().toLocaleString(),
        violations: violationCount
    });

    // UPDATE UI
    document.getElementById('question-section').style.display = 'none';
    document.getElementById('result-section').style.display = 'block';
    document.getElementById('final-score').innerText = score;
    document.getElementById('result-percent').innerText = `Percentage: ${finalPercent}%`;

    const statusLabel = document.getElementById('result-status');
    if (finalPercent >= 70) {
        statusLabel.innerText = "PASSED";
        statusLabel.style.color = "#28a745";
    } else {
        statusLabel.innerText = "FAILED";
        statusLabel.style.color = "#d9534f";
    }
}

// Anti-Cheat
document.addEventListener("visibilitychange", function () {
    if (document.hidden && document.getElementById('question-section').style.display === 'block') {
        violationCount++;
        if (violationCount === 1) {
            alert("⚠️ Warning: Leaving the screen is not allowed!");
        } else if (violationCount >= 2) {
            alert("❌ Terminated: Multiple violations detected.");
            calculateFinalScore();
        }
    }
});

// Remote Reset Timing Control
const pageLoadTime = Date.now();
let userResetListenerActive = false;

function handleResetSignal(firebaseTimestamp, type) {
    const localTimestamp = parseInt(localStorage.getItem("lastResetTimestamp") || "0");
    // Only reload if the reset signal is NEW (occurred after this page session started)
    if (firebaseTimestamp > localTimestamp && firebaseTimestamp > pageLoadTime) {
        localStorage.clear();
        localStorage.setItem("lastResetTimestamp", firebaseTimestamp.toString());
        location.reload();
    }
}

function listenForAdminResets() {
    if (typeof database !== 'undefined') {
        database.ref('account_resets/global').on('value', (snapshot) => {
            const data = snapshot.val();
            if (data && data.timestamp) {
                handleResetSignal(data.timestamp, "Global Reset");
            }
        });

        checkAndStartUserListener();
        setInterval(checkAndStartUserListener, 2000);
    }
}

function checkAndStartUserListener() {
    if (userResetListenerActive) return;
    const currentStudent = localStorage.getItem("currentStudent");
    if (currentStudent && typeof database !== 'undefined') {
        const safeName = getSafeName(currentStudent);
        database.ref('account_resets/users/' + safeName).on('value', (snapshot) => {
            const data = snapshot.val();
            if (data && data.timestamp) {
                handleResetSignal(data.timestamp, "User Reset");
            }
        });
        userResetListenerActive = true;
    }
}

// Initialize listener
listenForAdminResets();
