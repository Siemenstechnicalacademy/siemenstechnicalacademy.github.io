// --- STUDENT DATABASE ---
const students = [
    { name: "Deva", pass: "1371" },
    { name: "Nikhil",pass: "3272" },
    { name : "Dimpal",pass: "3321"},
    { name : "Tanuja",pass: "3346"},
    { name : "Samruddhi",pass: "3270"},
    { name : "Kartiki",pass: "3351"},
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

// --- QUESTION BANK ---
const questionBank = {
    volume: [
        { "q": "The perimeter of one face of a cube is 20 cm, its volume (in cm³) will be .............", "options": ["125", "250", "400", "625"], "answer": "125" },
        { "q": "What is the volume V (in cm³) of the container which can hold 5.28 litre of oil?", "options": ["V = 5.28 cm³", "V = 52.8 cm³", "V = 528 cm³", "V = 5280 cm³"], "answer": "V = 5280 cm³" },
        { "q": "What is the total capacity V in litre of a cubical coolant tank of sides 500 mm?", "options": ["V = 12.5 litre", "V = 25.0 litre", "V = 125.0 litre", "V = 250.0 litre"], "answer": "V = 125.0 litre" },
        { "q": "Calculate the volume of the cube whose side is 9 cm.", "options": ["272 cm³", "364 cm³", "729 cm³", "427 cm³"], "answer": "729 cm³" },
        { "q": "A cube has a volume of 7220 cm³. Find its side.", "options": ["19.32 cm", "22.5 cm", "25.00 cm", "1.932 cm"], "answer": "19.32 cm" },
        { "q": "Find the mass of cube whose side is 10 cm and density of the material is 6.9 gm/cc.", "options": ["6400 gm", "6700 gm", "6800 gm", "6900 gm"], "answer": "6900 gm" },
        { "q": "Find the mass of cube whose side is 5 cm and density of the material is 6.9 gm/cc.", "options": ["862.5 gm", "852.5 gm", "762.5 gm", "652.5 gm"], "answer": "862.5 gm" },
        { "q": "What will be the density (ρ) of iron cube, if mass (m) of metal = 5 kg, volume (V) = 685 cm³", "options": ["6.29 gram /cm³", "7.29 gram /cm³", "8.29 gram /cm³", "9.29 gram /cm³"], "answer": "7.29 gram /cm³" },
        { "q": "If an iron cube weighing 4.99 kg has a volume of 640 cc. What will be the density?", "options": ["7.2 gram /cm³", "7.5 gram /cm³", "7.8 gram /cm³", "8.0 gram /cm³"], "answer": "7.8 gram /cm³" },
        { "q": "What is the volume of a room of length 15 feet breadth, 10 feet and height 12 feet?", "options": ["1000 cu.feet", "1200 cu.feet", "1600 cu.feet", "1800 cu.feet"], "answer": "1800 cu.feet" },
        { "q": "The volume of a cuboid of sides 10m, 10cm, 10 cm is ............ ", "options": ["100 cm³", "1000 cm³", "10000 cm³", "100000 cm³"], "answer": "100000 cm³" },
        { "q": "Find the weight of rectangular block of a cast iron casting of 100 x 9 x 12 cm, when the density is 7.8gm/cc.", "options": ["84.24 kg", "84.35 kg", "84.56 kg", "84.60 kg"], "answer": "84.24 kg" },
        { "q": "A casting of a rectangular block having 25 cm x 20 cm x 8 cm size. The density of C.I in 7.5 gm/cc. Calculate the weight.", "options": ["20 kg", "22 kg", "25 kg", "30 kg"], "answer": "30 kg" },
        { "q": "Find the weight of Rectangular block of a cast iron casting of 200cm x 18cm x 6cm. When the density is 7.8 gm/cc.", "options": ["1684.8 kg", "168.48 kg", "164.84 kg", "16.848 kg"], "answer": "168.48 kg" },
        { "q": "Calculate the mass (m) of a piece of metal in kg if Length (l) = 1000 mm ; Breadth (b) = 60 mm Height (h) = 10 mm ; Density (P) = 7.85 g/cm³", "options": ["1.71 kg", "2.71 kg", "3.71 kg", "4.71 kg"], "answer": "4.71 kg" },
        { "q": "Calculate the mass of steel plate length 1800 mm, width 65 mm, thickness 12 mm and density is 7.85 kg/dm³.", "options": ["14.02 kg", "12.02 kg", "11.03 kg", "10.03 kg"], "answer": "11.03 kg" },
        { "q": "Calculate the mass in kg of a rectangular steel plate of dimension 220m x 330m x 15m (density of plate is 7.85kg/dm³)", "options": ["855 kg", "723 kg", "7.25 kg", "8.55 kg"], "answer": "8.55 kg" },
        { "q": "To calculate the total surface area of cylinder which formula is used?", "options": ["(πr²/4) + L.S.A", "(πr²/2) + L.S.A", "(πd²/4) + L.S.A", "(πd²/2) + L.S.A"], "answer": "(πd²/2) + L.S.A" },
        { "q": "Volume of cylinder is equal to ...................", "options": ["πr²h", "(1/3)πr²h", "(2/3)πr²h", "(3/4)πr²h"], "answer": "πr²h" },
        { "q": "Which one of the following formulae is the correct one to be used to calculate the height (h) of the liquid column in a cylindrical vessel of inside diameter (d) and the volume of liquid (V)?", "options": ["h = (π x V) / (d² x π)", "h = (4 x V) / (d x π)", "h = (4 x V) / d²", "h = (4 x V) / (d² x π)"], "answer": "h = (4 x V) / (d² x π)" },
        { "q": "What is the formula for volume of a cylinder with its base diameter 'd' and height 'H'?", "options": ["d x H", "d² x H", "(πd²/4) x H", "(πd²/4) x H²d"], "answer": "(πd²/4) x H" },
        { "q": "Calculate the volume of a cylinder whose base area is 120 cm² and height of the cylinder is 16 cm.", "options": ["1600 cm³", "1920 cm³", "2240 cm³", "2420 cm³"], "answer": "1920 cm³" },
        { "q": "Find the total surface area of a cylinder of 14 cm diameter and 20 cm height. (Take π = 22/7)", "options": ["1582 cm²", "1354 cm²", "1188 cm²", "1072 cm²"], "answer": "1188 cm²" },
        { "q": "Volume of cylinder whose height is 21cm & base radius is 14 cm is .........", "options": ["19404 cc", "4116 cc", "12936 cc", "181104 cc"], "answer": "12936 cc" },
        { "q": "The ratio of the respective heights and the respective radii of two cylinders are 1 : 2 and 2 : 1 respectively. Then their respective volumes are in the ratio ...................", "options": ["4 : 1", "2 : 1", "1 : 4", "1 : 2"], "answer": "2 : 1" },
        { "q": "Find the volume of the cylinder whose diameter is 20 cm and height is 40 cm.", "options": ["12571.14 cm³", "1257.14 cm³", "129.72 cm³", "12.972 cm³"], "answer": "12571.14 cm³" },
        { "q": "Base area and volume of a solid cylinder are 13.86cm² and 69.3 cm³ respectively. Find its height.", "options": ["5 cm", "0.5 cm", "0.1 cm", "0.05 cm"], "answer": "5 cm" },
        { "q": "How many litre of water a cylinder of radius 75 cm and height 100 cm can hold?", "options": ["1767.38 litre", "1776.38 litre", "1767.857 litre", "1677.38 litre"], "answer": "1767.857 litre" }
    ],
    algebra: [
        { q: "If 6x - 9x + 5x = 15 - 13 find the value of x.", options: ["1","2","3","4"], answer: "1" },
        { q: "If x = 3 and y = 2 find the value of x² + xy + y²", options: ["19","17","15","13"], answer: "19" },
        { q: "(a+b)² = ...........", options: ["a² + b² - 2ab","a² + b² + 2ab","a² - b² + ab","a² - b² - ab"], answer: "a² + b² + 2ab" },
        { q: "Choose the correct expansion of (a - b)²", options: ["a² - 2ab + b²","a² + 2ab - b²","a² + 2ab + b²","a² - b² - 2ab"], answer: "a² - 2ab + b²" },
        { q: "Which one of the following is equal to (a + b)(a - b)?", options: ["a² + b²","a - b²","a² - b²","a² - b"], answer: "a² - b²" },
        { q: "a³ - b³ = ....................", options: ["a³ + b³ - 3ab","a² - b² - ab","(a - b)(a² + ab + b²)","1.5"], answer: "(a - b)(a² + ab + b²)" },
        { q: "(a + b)² - 2ab =", options: ["0","a² + b²","a² - b²","4ab"], answer: "a² + b²" },
        { q: "The product of (3x + 4y)(3x - 4y) = .............", options: ["9x² + 16y²","9x² + 12xy + 16y²","9x² - 16y²","9x² + 12xy - 16y²"], answer: "9x² - 16y²" },
        { q: "The expansion of (a - b)³ is .........", options: ["a³ - b³ - 3ab(a - b)","a³ + b³ + 3ab(a + b)","a³ - b³ - 3a²b - 3ab²","a³ - b³ - 3a²b² - 3ab²"], answer: "a³ - b³ - 3ab(a - b)" },
        { q: "The expansion of (a + b)³ is .........", options: ["a³ - b³ - 3ab(a - b)","a³ + b³ - 3ab(a - b)","a³ + b³ + 3ab(a + b)","a³ + b³ + 3ab² - 3a²b"], answer: "a³ + b³ + 3ab(a + b)" },
        { q: "(a + b + c)² = ...........", options: ["a² + b² + c² + 2(ab + bc + ca)","a² + b² + c² + 2(a²b + b²c + c²a)","a² + b² + c² + (ab + bc + ca)","a + b + c + (2a²b + 2b²c + 2c²a)"], answer: "a² + b² + c² + 2(ab + bc + ca)" },
        { q: "Choose the correct expansion of a³ + b³", options: ["(a + b)(a² + b² + ab)","(a + b)(a² + b² - ab)","(a - b)(a² + b² + ab)","(a + b)(a² - b² + ab)"], answer: "(a + b)(a² + b² - ab)" },
        { q: "Simplify: (a - b)² / (a² - 2ab + b²)", options: ["(a - b)","(a + b)","0","1"], answer: "1" },
        { q: "Factorise : x² - 25", options: ["(x + 5)(x - 5)","(x - 10)(x + 10)","(x² + 5)(x² - 5)","(x² + 10)(x² - 10)"], answer: "(x + 5)(x - 5)" },
        { q: "Factorise : x² - 49", options: ["(x + 7)(x - 7)","(x + 7)(x + 7)","(x² + 7)(x² - 7)","(x² - 7)(x² - 7)"], answer: "(x + 7)(x - 7)" },
        { q: "Factorise : x⁴ - 81", options: ["(x + 3)(x - 3)","(x² + 9)(x² - 9)","(x² + 9)(x + 3)(x - 3)","(x² - 3)(x² + 9)"], answer: "(x² + 9)(x + 3)(x - 3)" },
        { q: "Solve the equation x² - 2x - 8 = 0", options: ["-2, 4","2, -4","2, 4","0, 4"], answer: "-2, 4" },
        { q: "One of the factors of x² + 6x + 8 is ...........", options: ["x + 6","x + 4","x + 1","x + 8"], answer: "x + 4" },
        { q: "Both (x² - 1)(x² + 1) are the factors of ...........", options: ["(x⁴ - 1)","(x⁴ + 1)","(x² + 2x + 1)","(x² - 2x + 1)"], answer: "(x⁴ - 1)" },
        { q: "Find the factors of x² - 7x + 10 = 0", options: ["x = +5 or +2","x = +5 or -2","x = -5 or -2","x = -5 or +2"], answer: "x = +5 or +2" },
        { q: "Find the factors of x² - 10x + 24 = 0", options: ["x = 4 or 6","x = -4 or -6","x = -4 or 6","x = 12 or -2"], answer: "x = 4 or 6" },
        { q: "Factorise the equation x² - 3x + 2", options: ["(x + 1)(x - 2)","(x - 2)(x - 1)","(x - 1)(x - 2)","(x + 1)(x + 2)"], answer: "(x - 1)(x - 2)" },
        { q: "Solve the equation x² - 2x - 24 = 0", options: ["x = 3 ; y = -8","x = 4 ; y = -6","x = 6 ; y = -4","x = 6 ; y = -3"], answer: "x = 6 ; y = -4" },
        { q: "x² - 5x + 4 = 0 Solve the above equation", options: ["x = 1 or 4","x = -1 or -4","x = +1 or -4","x = -1 or +4"], answer: "x = 1 or 4" },
        { q: "The general form of quadratic equation is", options: ["ax² + bx² + c = 0","ax² + bx + c = 0","(a + b)x + c = 0","ax³ + bx + c = 0"], answer: "ax² + bx + c = 0" },
        { q: "If a < 0, then function f(x) = ax² + bx + c has ......", options: ["Maximum value","Minimum value","Constant value","Positive value"], answer: "Maximum value" },
        { q: "Which formula is used to solve the equation ax² + bx + c = 0?", options: ["x = (-b ± √(b² - 4ac)) / 2a","x = (-b ± √(b² + 4ac)) / 2a","x = (b ± √(b² - 4ac)) / 2a","x = (-b ± √(b² + 4ac)) / 2b"], answer: "x = (-b ± √(b² - 4ac)) / 2a" },
        { q: "If (a + b) = 6, ab = 9 find value of a² + b²", options: ["36","24","18","12"], answer: "18" },
        { q: "If a + b = 5 and a - b = 4, then the value of a² - b² is equal to :", options: ["25","1","9","20"], answer: "20" },
        { q: "Solve : 11x + 3y = 50 ; 8x + 3y = 38", options: ["4, -2","4, 2","4, 3","-4, -2"], answer: "4, 2" }
    ],
    mensuration: [
        { q: "The perimeter 'U' and the breadth 'b' of the rectangular mid steel sheet are given. Which formula is used to calculate the length (l)?", options: ["l = (U - 2b) / 2", "l = U - 2b", "l = (U - b) / 2", "l = U / 2 - b"], answer: "l = (U - 2b) / 2" },
        { q: "A rod 66 cm long is bent in the form of a rectangle such that its length is 7 cm greater than its breadth. Find length and breadth.", options: ["18, 25", "16, 23", "12, 19", "20, 13"], answer: "20, 13" },
        { q: "Which one is the area of plate in m²? (200 mm x 100 mm)", options: ["0.2 m²", "0.02 m²", "0.002 m²", "0.0002 m²"], answer: "0.02 m²" },
        { q: "The percentage increase in area of a rectangle if each side is increased by 20% is:", options: ["44 %", "40 %", "42 %", "46 %"], answer: "44 %" },
        { q: "What is the thickness 'b' of the steel bar? (Area = 600 mm², Length = 50 mm)", options: ["550 mm", "120 mm", "100 mm", "12 mm"], answer: "12 mm" },
        { q: "The ratio of rectangle length and breadth is 6 : 4. If breadth is 28 cm, find length.", options: ["32 cm", "42 cm", "52 cm", "62 cm"], answer: "42 cm" },
        { q: "If diagonals of a quadrilateral bisect at right angles, the shape is:", options: ["Rhombus", "Rectangle", "Parallelogram", "Trapezium"], answer: "Rhombus" },
        { q: "A rhombus has side 4 m. Its perimeter is:", options: ["10 m", "16 m", "32 m", "18 m"], answer: "16 m" },
        { q: "Quadrilateral with opposite sides parallel and equal but angles not 90°:", options: ["Rhombus", "Parallelogram", "Rhomboid", "Trapezoid"], answer: "Parallelogram" },
        { q: "In a parallelogram, adjacent sides are equal 'a'. Diagonal length is:", options: ["2a", "a√3", "a√2", "a"], answer: "a√2" },
        { q: "Area of parallelogram formula:", options: ["Base x height", "2 x base x height", "Semi-perimeter x base", "Base x height / 2"], answer: "Base x height" },
        { q: "Area of parallelogram (base=10 cm, height=5 cm):", options: ["25 cm²", "50 cm²", "60 cm²", "75 cm²"], answer: "50 cm²" },
        { q: "Find height of parallelogram (base=10 cm, area=120 cm²):", options: ["11 cm", "12 cm", "13 cm", "14 cm"], answer: "12 cm" },
        { q: "Area of trapezoid formula:", options: ["(h / 2)(a + b)", "h(a + b)", "(h / 2)ab", "h(a - b)"], answer: "(h / 2)(a + b)" },
        { q: "Equal angles of an isosceles triangle are:", options: ["30°", "45°", "60°", "90°"], answer: "45°" },
        { q: "In isosceles triangle, sum of two angles is 130°. Third angle is:", options: ["55°", "60°", "50°", "45°"], answer: "50°" },
        { q: "Triangle with sides 5 cm, 9 cm, 12 cm is:", options: ["Scalene triangle", "Equilateral triangle", "Isosceles triangle", "Right angle triangle"], answer: "Scalene triangle" },
        { q: "Isosceles triangle has:", options: ["Three sides equal", "No sides equal", "Two sides equal", "Cannot say"], answer: "Two sides equal" },
        { q: "If ∠A = ∠B = ∠C, triangle is:", options: ["Acute", "Obtuse", "Isosceles", "Equilateral"], answer: "Equilateral" },
        { q: "Semi-perimeter formula (Heron’s formula):", options: ["s = (a + b + c)/2", "s = (a + b + c)/3", "s = a + b + c", "s = a + b - c"], answer: "s = (a + b + c)/2" },
        { q: "Area of triangle (20 cm, 15 cm, 10 cm):", options: ["80.00 cm²", "79.24 cm²", "75.24 cm²", "72.24 cm²"], answer: "72.24 cm²" },
        { q: "Triangle area (base=6 cm, height=5 cm):", options: ["11 cm²", "30 cm²", "15 cm²", "22 cm²"], answer: "15 cm²" },
        { q: "Triangle base 200 mm, area 2000 mm² → height:", options: ["10 mm", "15 mm", "20 mm", "200 mm"], answer: "20 mm" },
        { q: "Area of isosceles triangle (side=7 cm, base=5 cm):", options: ["16.205 cm²", "15.225 cm²", "16.325 cm²", "16.350 cm²"], answer: "16.350 cm²" },
        { q: "Height of equilateral triangle:", options: ["(√3 / 4)a", "(√3 / 2)a", "1/2 a", "(√3 / 2)a²"], answer: "(√3 / 2)a" },
        { q: "Area of equilateral triangle (side=20 cm):", options: ["1732.0 cm²", "1640.0 cm²", "173.2 cm²", "164.0 cm²"], answer: "173.2 cm²" },
        { q: "AC² = AB² + BC² represents:", options: ["Pythagoras theorem", "Lami's theorem", "Bernoulli's theorem", "Thevenin's theorem"], answer: "Pythagoras theorem" },
        { q: "Triangle ABC: ∠A=60°, ∠C=30°, ∠B=?", options: ["30°", "45°", "60°", "90°"], answer: "90°" },
        { q: "Right triangle with two equal sides → other angles:", options: ["45°, 60°", "30°, 60°", "60°, 60°", "45°, 45°"], answer: "45°, 45°" }
    ]
};

// ... (Keep your Student Database and Question Bank objects as they are) ...

// --- STUDENT DATABASE & QUESTION BANK (Keep your objects here) ---
// [Insert your students array and questionBank object here]

let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = []; 
let timeLeft = 1800; 
let timerInterval;
let violationCount = 0;

// Helper to shuffle
function shuffle(a) { return a.sort(() => Math.random() - 0.5); }

// ===============================
// 🔥 TOPIC-WISE ROTATION SYSTEM
// ===============================
function generateQuestionsByLogin(bank, count) {
    const topics = Object.keys(bank);
    let finalQuestions = [];
    
    // Pull 8 questions from each topic to ensure variety
    topics.forEach(topic => {
        const questions = bank[topic];
        const take = 9; // Increased slightly to ensure we have enough for 25 total
        let startIndex = (count * take) % questions.length;
        for (let i = 0; i < take; i++) {
            let index = (startIndex + i) % questions.length;
            finalQuestions.push({ ...questions[index], topic: topic });
        }
    });

    // Shuffle questions and their internal options
    finalQuestions = shuffle(finalQuestions).map(q => {
        return { ...q, options: shuffle([...q.options]) };
    });

    return finalQuestions.slice(0, 25); // Strictly taking 25 questions
}

function showInstructions() {
    const enteredNameRaw = document.getElementById('studentName').value.trim();
    const enteredPass = document.getElementById('studentPass').value.trim();
    const errorMsg = document.getElementById('login-error');

    // Admin Reset Command
    if (enteredNameRaw.toLowerCase() === "siemens" && enteredPass === "1234") {
        localStorage.clear();
        alert("✅ Admin: Access has been RESET.");
        location.reload(); 
        return;
    }

    if (localStorage.getItem("examStatus") === "done") {
        errorMsg.innerText = "❌ Already submitted. Contact admin.";
        errorMsg.style.display = 'block';
        return;
    }

    const student = students.find(s => {
        const dbName = s.name.split(' ')[0].toLowerCase();
        const inputName = enteredNameRaw.split(' ')[0].toLowerCase();
        return dbName === inputName && s.pass === enteredPass;
    });

    if (student) {
        document.getElementById('login-section').style.display = 'none'; 
        document.getElementById('instruction-section').style.display = 'block';
        
        // Load the 25 questions based on a rotating count
        let loginCount = parseInt(localStorage.getItem("loginCount") || "0");
        currentQuestions = generateQuestionsByLogin(questionBank, loginCount);
        userAnswers = new Array(currentQuestions.length).fill(null);
        
        localStorage.setItem("loginCount", loginCount + 1);
        localStorage.setItem("currentStudent", student.name);
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
        document.getElementById('timer-display').innerText = `Time: ${min}:${sec < 10 ? '0'+sec : sec}`;
        if (timeLeft <= 0) calculateFinalScore();
    }, 1000);
    
    loadQuestion();
}

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
        
        // Save answer on click
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
        if(confirm("Submit Exam?")) calculateFinalScore();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// ===============================
// 🔥 UPDATED CALCULATION & SYNC
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

    const studentName = localStorage.getItem("currentStudent") || "Unknown Student";
    const finalPercent = Math.round((score / currentQuestions.length) * 100);

    // SEND TO FIREBASE (Singapore Server)
    database.ref('exam_results').push({
        name: studentName,
        score: score,
        totalQuestions: currentQuestions.length,
        percentage: finalPercent,
        details: reportDetails,
        submittedAt: new Date().toLocaleString(),
        violations: violationCount
    }).then(() => {
        console.log("✅ Results successfully synced to Admin Dashboard.");
    }).catch((error) => {
        console.error("❌ Sync failed:", error);
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
document.addEventListener("visibilitychange", function() {
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
