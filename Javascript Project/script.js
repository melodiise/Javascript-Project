let startButton = document.querySelector(".startButton");
let questionCount = 0;
let score = 0;
let opQuestion = document.querySelector(".questions"); 
let button = document.querySelector(".next");
let result = document.querySelector(".result");

let questions = [
  {
    questionNumber: 1,
    options: [{text: "Hot drink", minValue: 0, maxValue: 15},{ text: "Cold drink", minValue: 14, maxValue: 20}, {text: "Iced drink", minValue: 18, maxValue: 20}] 
  },
  {
    questionNumber: 2,
    options: [{text: "Tapioca Pearls", minValue: 18, maxValue: 20}, {text: "Popping Boba", minValue: 8, maxValue: 20}, {text: "Coffee Jelly", minValue: 10, maxValue: 20}]
  },
  {
    questionNumber: 3,
    options: [{text: "Black tea", minValue: 18, maxValue: 20}, {text: "Oolong tea", minValue: 6, maxValue: 18}, {text: "Matcha tea", minValue: 14, maxValue: 20}]
  },
  {
    questionNumber: 4,
    options: [{text: "Oat Milk", minValue: 7, maxValue: 18}, {text: "Regular Milk", minValue: 18, maxValue: 20}, {text: "Soy Milk", minValue: 10, maxValue: 20}]
  },
  {
    questionNumber: 5,
    options: [{text: "Caramel", minValue: 5, maxValue: 15}, {text: "Blacksugar", minValue: 10, maxValue: 20}, {text: "None", minValue: 15, maxValue: 20}]
  }

]

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function start() {
  startButton.classList.add("hide") 
  showQuestions(0);
  button.classList.remove("hide")
  }

function showQuestions(index) {
  let options = '<div class="option" > <div class="first"> <input name="1" type="radio" value="0" /> ' + questions[index].options[0].text + "</div>" + '<div class="option">  <div class="second"> <input name="1" type="radio" value="1"/> ' + questions[index].options[1].text + "</div>" + '<div class="option">  <div class="third"> <input name="1" type="radio" value="2"/> ' + questions[index].options[2].text + "</div>" + "</div>" 
  opQuestion.innerHTML = options; 
}

function selected(answer) { 
  let userPoints = getRndInteger(questions[questionCount].options[answer].minValue, questions[questionCount].options[answer].maxValue) 
  score += userPoints;
  }

function nextQuestion() {
  let opt = document.querySelector("input:checked")
  
  selected(opt.value)

  console.log(questions.length - 1);

  if (questionCount < questions.length - 1) {
    questionCount++;
    showQuestions(questionCount)
  }

  else {
    showResult()
    button.classList.add("hide")
    document.querySelector(".restart").classList.remove("hide")
  }
}

function restart() {
  window.location.reload()
}

function showResult() {
  result.innerHTML = "<p> You scored " + score + " out of 100! </p>"
}