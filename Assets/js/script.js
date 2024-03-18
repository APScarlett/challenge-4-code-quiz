var introEl= document.getElementById("intro")
var questionSectionEl=document.getElementById("question-section")
var initialInputEl= document.getElementById("intial-input")
var highscoreEl= document.getElementById("highscore")
var startQuizEl= document.getElementById("start-quiz")
var questionTitleEl= document.getElementById("question-title")
var choiceListEl= document.getElementById("choice-list")
var timerEl= document.getElementById("timer")
var setIntervalId
var timeRemaining=questionData.length * 15

function startQuiz(){
    // <section id ="intro" class="hide"> the code below represents the same thign as this line 
    introEl.classList.add("hide")
    questionSectionEl.classList.remove("hide")

    setIntervalId=setInterval(startTimer, 1000)
}
function startTimer(){
    timerEl.textContent=timeRemaining--
}
startQuizEl.addEventListener("click", startQuiz) //callback for click