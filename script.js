const questions = [
{
question:"What is the capital of France?",
options:["London","Berlin","Paris","Madrid"],
answer:2
},
{
question:"Which planet is called the Red Planet?",
options:["Venus","Mars","Jupiter","Saturn"],
answer:1
},
{
question:"Which language runs in the browser?",
options:["Java","C++","JavaScript","Python"],
answer:2
},
{
question:"What does CSS stand for?",
options:[
"Computer Style Sheets",
"Cascading Style Sheets",
"Creative Style Sheets",
"Colorful Style Sheets"
],
answer:1
},
{
question:"Largest ocean on Earth?",
options:[
"Atlantic Ocean",
"Indian Ocean",
"Pacific Ocean",
"Arctic Ocean"
],
answer:2
}
];

let currentQuestion = 0;
let score = 0;

function startQuiz(){

document.getElementById("start-screen").classList.add("hidden");
document.getElementById("quiz-screen").classList.remove("hidden");

showQuestion();

}

function showQuestion(){

let q = questions[currentQuestion];

document.getElementById("question").textContent = q.question;

document.getElementById("question-number").textContent =
`Question ${currentQuestion+1} of ${questions.length}`;

document.getElementById("progress-bar").style.width =
((currentQuestion)/questions.length)*100 + "%";

let optionsDiv = document.getElementById("options");

optionsDiv.innerHTML = "";

q.options.forEach((option,index)=>{

let btn = document.createElement("button");

btn.textContent = option;

btn.classList.add("option");

btn.onclick = ()=>selectAnswer(btn,index);

optionsDiv.appendChild(btn);

});

}

function selectAnswer(button,index){

let correctAnswer = questions[currentQuestion].answer;

let options = document.querySelectorAll(".option");

options.forEach(btn=>btn.disabled=true);

if(index===correctAnswer){

button.classList.add("correct");

score++;

}else{

button.classList.add("wrong");

options[correctAnswer].classList.add("correct");

}

}

function nextQuestion(){

currentQuestion++;

if(currentQuestion<questions.length){

showQuestion();

}else{

showResult();

}

}

function showResult(){

document.getElementById("quiz-screen").classList.add("hidden");

document.getElementById("result-screen").classList.remove("hidden");

document.getElementById("score").textContent =
`Your Score: ${score} / ${questions.length}`;

}
