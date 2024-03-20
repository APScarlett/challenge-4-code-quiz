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
var index=0

function startQuiz(){
    // <section id ="intro" class="hide"> the code below represents the same thign as this line 
    introEl.classList.add("hide")
    questionSectionEl.classList.remove("hide")

    setIntervalId=setInterval(startTimer, 1000)
}
function renderQuestion(){
    questionTitleEl.textContent=questionData[index].title
    choiceListEl.textContent=""
    //    <li><button>Choice 1</button></li>
    for(var i=0; i<questionData[index].choices.length; i++){
        // <li> </li>
        var li=document.createElement("li")
        // <button> </button>
        var button=document.createElement("button")
        // <button> question 1</button>
        button.textContent=questionData[index].choices[i]
        //    <li><button>Choice 1</button></li>
        li.appendChild(button)
        choiceListEl.appendChild(li)
        }
}
function startTimer(){
    timerEl.textContent=timeRemaining--
}
function nextQuestion(event){
 index++
 if(index < questionData.length){
 renderQuestion()
}else{
    endQuiz()
}
}

function endQuiz(){
    clearInterval(setIntervalId)
}
startQuizEl.addEventListener("click", startQuiz) //callback for click
choiceListEl.addEventListener("click", nextQuestion) //callback function for going to next question