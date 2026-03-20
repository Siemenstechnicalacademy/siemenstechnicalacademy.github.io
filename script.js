// --- STUDENT DATABASE ---
const students = [
    { name: "Deva", pass: "1371" },
    { name: "Hitesh", pass: "2685" },
    { name: "Saurabh Shivaji Bhoir", pass: "3252" },
    { name: "Soham Mahendra Chaudhari", pass: "3261" },
    { name: "Shreya Sharad Dabhade", pass: "3263" },
    { name: "Ruchita Pandurang Farde", pass: "3271" },
    { name: "Mithil Jitendra Gawde", pass: "3274" },
    { name: "Swapnil Jotiram Jambhale", pass: "3281" },
    { name: "Sankit Shivprasad Kahar", pass: "3284" },
    { name: "Adil Dawood Khan", pass: "3288" },
    { name: "Nayan Shrikant Kondilkar", pass: "3291" },
    { name: "Parth Gajanan Kondilkar", pass: "3292" },
    { name: "Yash Ankush Kumawat", pass: "3294" },
    { name: "Manas Sunil Lad", pass: "3296" },
    { name: "Sujit Dinesh Magar", pass: "3299" },
    { name: "Kunal Pundalik Mahajan", pass: "3301" },
    { name: "Viraj Dhanaji Malik", pass: "3302" },
    { name: "Tejas Ganpat Padwal", pass: "3311" },
    { name: "Yadnyesh Prakash Partole", pass: "3313" },
    { name: "Harsh Ganesh Patil", pass: "3314" },
    { name: "Jitesh Ganesh Rane", pass: "3320" },
    { name: "Dimpal Subhash Rasal", pass: "3321" },
    { name: "Kasturi Kiran Shingate", pass: "3329" },
    { name: "Daksh Prabhakar Sonawane", pass: "3330" },
    { name: "Payal Tatya Suryavanshi", pass: "3334" },
    { name: "Samadhan Sitaram Suryavanshi", pass: "3335" },
    { name: "Pramita Gautam Vavhal", pass: "3340" },
    { name: "Bhushan Gurunath Vishe", pass: "3341" },
    { name: "Om Dinesh Vishe", pass: "3342" },
    { name: "Shriraj Nitin Wadkar", pass: "3344" },
    { name: "Ragini Shivnath Jaiswar", pass: "3355" },
    { name: "Sarthak Dattatray", pass: "3246" },
    { name: "Paras Bhagwan", pass: "3251" },
    { name: "Aryan Sameer", pass: "3257" },
    { name: "Nayan Ashok", pass: "3258" },
    { name: "Sayali Mahadev", pass: "3276" },
    { name: "Palak Raghav", pass: "3278" },
    { name: "Renuka Kailas", pass: "3283" },
    { name: "Nikhil Pradip", pass: "3285" },
    { name: "Ved Arun Kawale", pass: "3286" },
    { name: "Shivani Sharad", pass: "3287" },
    { name: "Nishant Bharat", pass: "3289" },
    { name: "Tanmay Mahendra", pass: "3293" },
    { name: "Raj Ramkrit", pass: "3295" },
    { name: "Aryan Ganpat", pass: "3303" },
    { name: "Vighnesh Suryakan", pass: "3306" },
    { name: "Teju Deepak", pass: "3316" },
    { name: "Dhiraj Anil", pass: "3317" },
    { name: "Anagha Hanumat", pass: "3323" },
    { name: "Indra Arun", pass: "3324" },
    { name: "Aryan Anil", pass: "3328" },
    { name: "Sandesh Bapu Sor", pass: "3331" },
    { name: "Khushali Sainath", pass: "3332" },
    { name: "Rishabh Santosh", pass: "3333" },
    { name: "Siddhesh Sopan", pass: "3336" },
    { name: "Shivam Sachin", pass: "3337" },
    { name: "Ashish Ganesh", pass: "3343" },
    { name: "Shravan Wadkar", pass: "3345" },
    { name: "Yash Sharad", pass: "3348" },
    { name: "Jayshree Vasant", pass: "3352" },
    { name: "Purva Panchal", pass: "3356" }
];

const questionBank = [
    [
  { 
    "q": "The perimeter of one face of a cube is 20 cm, its volume (in cm³) will be .............", 
    "options": ["125", "250", "400", "625"], 
    "answer": "125" 
  },
  { 
    "q": "What is the volume V (in cm³) of the container which can hold 5.28 litre of oil?", 
    "options": ["V = 5.28 cm³", "V = 52.8 cm³", "V = 528 cm³", "V = 5280 cm³"], 
    "answer": "V = 5280 cm³" 
  },
  { 
    "q": "What is the total capacity V in litre of a cubical coolant tank of sides 500 mm?", 
    "options": ["V = 12.5 litre", "V = 25.0 litre", "V = 125.0 litre", "V = 250.0 litre"], 
    "answer": "V = 125.0 litre" 
  },
  { 
    "q": "Calculate the volume of the cube whose side is 9 cm.", 
    "options": ["272 cm³", "364 cm³", "729 cm³", "427 cm³"], 
    "answer": "729 cm³" 
  },
  { 
    "q": "A cube has a volume of 7220 cm³. Find its side.", 
    "options": ["19.32 cm", "22.5 cm", "25.00 cm", "1.932 cm"], 
    "answer": "19.32 cm" 
  },
  { 
    "q": "Find the mass of cube whose side is 10 cm and density of the material is 6.9 gm/cc.", 
    "options": ["6400 gm", "6700 gm", "6800 gm", "6900 gm"], 
    "answer": "6900 gm" 
  },
  { 
    "q": "Find the mass of cube whose side is 5 cm and density of the material is 6.9 gm/cc.", 
    "options": ["862.5 gm", "852.5 gm", "762.5 gm", "652.5 gm"], 
    "answer": "862.5 gm" 
  },
  { 
    "q": "What will be the density (ρ) of iron cube, if mass (m) of metal = 5 kg, volume (V) = 685 cm³", 
    "options": ["6.29 gram /cm³", "7.29 gram /cm³", "8.29 gram /cm³", "9.29 gram /cm³"], 
    "answer": "7.29 gram /cm³" 
  },
  { 
    "q": "If an iron cube weighing 4.99 kg has a volume of 640 cc. What will be the density?", 
    "options": ["7.2 gram /cm³", "7.5 gram /cm³", "7.8 gram /cm³", "8.0 gram /cm³"], 
    "answer": "7.8 gram /cm³" 
  },
  { 
    "q": "What is the volume of a room of length 15 feet breadth, 10 feet and height 12 feet?", 
    "options": ["1000 cu.feet", "1200 cu.feet", "1600 cu.feet", "1800 cu.feet"], 
    "answer": "1800 cu.feet" 
  },
  { 
    "q": "The volume of a cuboid of sides 10m, 10cm, 10 cm is ............ ", 
    "options": ["100 cm³", "1000 cm³", "10000 cm³", "100000 cm³"], 
    "answer": "100000 cm³" 
  },
  { 
    "q": "Find the weight of rectangular block of a cast iron casting of 100 x 9 x 12 cm, when the density is 7.8gm/cc.", 
    "options": ["84.24 kg", "84.35 kg", "84.56 kg", "84.60 kg"], 
    "answer": "84.24 kg" 
  },
  { 
    "q": "A casting of a rectangular block having 25 cm x 20 cm x 8 cm size. The density of C.I in 7.5 gm/cc. Calculate the weight.", 
    "options": ["20 kg", "22 kg", "25 kg", "30 kg"], 
    "answer": "30 kg" 
  },
  { 
    "q": "Find the weight of Rectangular block of a cast iron casting of 200cm x 18cm x 6cm. When the density is 7.8 gm/cc.", 
    "options": ["1684.8 kg", "168.48 kg", "164.84 kg", "16.848 kg"], 
    "answer": "168.48 kg" 
  },
  { 
    "q": "Calculate the mass (m) of a piece of metal in kg if Length (l) = 1000 mm ; Breadth (b) = 60 mm Height (h) = 10 mm ; Density (P) = 7.85 g/cm³", 
    "options": ["1.71 kg", "2.71 kg", "3.71 kg", "4.71 kg"], 
    "answer": "4.71 kg" 
  }
[
  {
    "q": "Calculate the mass of steel plate length 1800 mm, width 65 mm, thickness 12 mm and density is 7.85 kg/dm³.",
    "options": ["14.02 kg", "12.02 kg", "11.03 kg", "10.03 kg"],
    "answer": "11.03 kg"
  },
  {
    "q": "Calculate the mass in kg of a rectangular steel plate of dimension 220m x 330m x 15m (density of plate is 7.85kg/dm³)",
    "options": ["855 kg", "723 kg", "7.25 kg", "8.55 kg"],
    "answer": "8.55 kg"
  },
  {
    "q": "To calculate the total surface area of cylinder which formula is used?",
    "options": ["(πr²/4) + L.S.A", "(πr²/2) + L.S.A", "(πd²/4) + L.S.A", "(πd²/2) + L.S.A"],
    "answer": "(πd²/2) + L.S.A"
  },
  {
    "q": "Volume of cylinder is equal to ...................",
    "options": ["πr²h", "(1/3)πr²h", "(2/3)πr²h", "(3/4)πr²h"],
    "answer": "πr²h"
  },
  {
    "q": "Which one of the following formulae is the correct one to be used to calculate the height (h) of the liquid column in a cylindrical vessel of inside diameter (d) and the volume of liquid (V)?",
    "options": ["h = (π x V) / (d² x π)", "h = (4 x V) / (d x π)", "h = (4 x V) / d²", "h = (4 x V) / (d² x π)"],
    "answer": "h = (4 x V) / (d² x π)"
  },
  {
    "q": "What is the formula for volume of a cylinder with its base diameter 'd' and height 'H'?",
    "options": ["d x H", "d² x H", "(πd²/4) x H", "(πd²/4) x H²d"],
    "answer": "(πd²/4) x H"
  },
  {
    "q": "Calculate the volume of a cylinder whose base area is 120 cm² and height of the cylinder is 16 cm.",
    "options": ["1600 cm³", "1920 cm³", "2240 cm³", "2420 cm³"],
    "answer": "1920 cm³"
  },
  {
    "q": "Find the total surface area of a cylinder of 14 cm diameter and 20 cm height. (Take π = 22/7)",
    "options": ["1582 cm²", "1354 cm²", "1188 cm²", "1072 cm²"],
    "answer": "1188 cm²"
  },
  {
    "q": "Volume of cylinder whose height is 21cm & base radius is 14 cm is .........",
    "options": ["19404 cc", "4116 cc", "12936 cc", "181104 cc"],
    "answer": "12936 cc"
  },
  {
    "q": "The ratio of the respective heights and the respective radii of two cylinders are 1 : 2 and 2 : 1 respectively. Then their respective volumes are in the ratio ...................",
    "options": ["4 : 1", "2 : 1", "1 : 4", "1 : 2"],
    "answer": "2 : 1"
  },
  {
    "q": "Find the volume of the cylinder whose diameter is 20 cm and height is 40 cm.",
    "options": ["12571.14 cm³", "1257.14 cm³", "129.72 cm³", "12.972 cm³"],
    "answer": "12571.14 cm³"
  },
  {
    "q": "Base area and volume of a solid cylinder are 13.86cm² and 69.3 cm³ respectively. Find its height.",
    "options": ["5 cm", "0.5 cm", "0.1 cm", "0.05 cm"],
    "answer": "5 cm"
  },
  {
    "q": "How many litre of water a cylinder of radius 75 cm and height 100 cm can hold?",
    "options": ["1767.38 litre", "1776.38 litre", "1767.857 litre", "1677.38 litre"],
    "answer": "1767.857 litre"
  }

];

let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = new Array(20).fill(null); 
let timeLeft = 1800; 
let timerInterval;
let violationCount = 0;

function shuffle(a) { return a.sort(() => Math.random() - 0.5); }

function showInstructions() {
    const enteredNameRaw = document.getElementById('studentName').value.trim();
    const enteredPass = document.getElementById('studentPass').value.trim();
    const errorMsg = document.getElementById('login-error');

    // --- FIXED ADMIN RESET LOGIC ---
    if (enteredNameRaw.toLowerCase() === "siemens" && enteredPass === "1234") {
        localStorage.clear(); // Clear everything
        alert("✅ Admin: Access has been RESET. The system is now ready for a new session.");
        location.reload(); 
        return;
    }

    if (localStorage.getItem("examStatus") === "done") {
        errorMsg.innerText = "❌ You have already submitted. Contact your admin to reset.";
        errorMsg.style.display = 'block';
        return;
    }

    // SEARCH LOGIN
    const student = students.find(s => {
        const firstNameInDB = s.name.split(' ')[0].toLowerCase();
        const firstEnteredName = enteredNameRaw.split(' ')[0].toLowerCase();
        return firstNameInDB === firstEnteredName && s.pass.trim() === enteredPass;
    });

    if (student) {
        errorMsg.style.display = 'none';
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('instruction-section').style.display = 'block';
        currentQuestions = shuffle([...questionBank]);
        currentQuestions.forEach(q => q.options = shuffle([...q.options]));
    } else {
        errorMsg.innerText = "❌ Name or TC Number is not correct.";
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

function calculateFinalScore() {
    clearInterval(timerInterval);
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
