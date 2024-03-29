var introEl= document.getElementById("intro")
var questionSectionEl=document.getElementById("question-section")
var initialInputEl= document.getElementById("intial-input")
var highscoreEl= document.getElementById("highscore")
var startQuizEl= document.getElementById("start-quiz")
var questionTitleEl= document.getElementById("question-title")
var choiceListEl= document.getElementById("choice-list")
var timerEl= document.getElementById("timer")
var messageEL=document.getElementById("message")
var scoreEl=document.getElementById("score")

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
    messageEL.innerHTML=""
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
    var currentChoiceBtn= event.target
    var solution=questionData[index].solution
 index++
 if(index < questionData.length){
     questionData
    if(currentChoiceBtn.textContent ===solution){
        messageEL.innerHTML="<h4>Correct!</h4>"
    }else{
        messageEL.innerHTML="<h4>Incorrect!</h4>"
        timeRemaining=timeRemaining-10
    }
    //half second delay
    setTimeout(renderQuestion, 500)
 renderQuestion()
}else{
    
    endQuiz()
}
}

function endQuiz(){
    clearInterval(setIntervalId)
    questionSectionEl.classList.add("hide")
    initialInputEl.ClassList.remove("hide")
    scoreEl.textContent=timerEl.textContent
}
startQuizEl.addEventListener("click", startQuiz) //callback for click
choiceListEl.addEventListener("click", nextQuestion) //callback function for going to next question