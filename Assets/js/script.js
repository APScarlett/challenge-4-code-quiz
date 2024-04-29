// Create multiple variables to use through the program
var introEl= document.getElementById("intro")
var questionSectionEl=document.getElementById("question-section")
var initialInputEl= document.getElementById("intial-input")
var initialEl= document.getElementById("intial")
var highscoreEl= document.getElementById("highscore")
var startQuizEl= document.getElementById("start-quiz")
var questionTitleEl= document.getElementById("question-title")
var choiceListEl= document.getElementById("choice-list")
var timerEl= document.getElementById("timer")
var messageEL=document.getElementById("message")
var scoreEl=document.getElementById("score")
var goBackEL = document.getElementById("goback-btn")
var clearScoreEL = document.getElementById("clearHighscore")
var submitEL = document.getElementById("Submit")
var olEl = document.getElementById("highScoreList")
var setIntervalId
var timeRemaining=questionData.length * 15
var index=0
var highscores= []
function startQuiz(){
    // <section id ="intro" class="hide"> the code below represents the same thing as this line 
   //hides the questions before they are ready to be revealed
    introEl.classList.add("hide")
    //removes hide and allows us to see the question
    questionSectionEl.classList.remove("hide")
        //starts the timer
    setIntervalId=setInterval(startTimer, 1000)
   renderQuestion();
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
//function starts the clock timer in the top corner
function startTimer(){
    timerEl.textContent=timeRemaining--
}
// function to move to the next question
function nextQuestion(event) { 
    var currentChoiceBtn = event.target;
    var solution = questionData[index].Solution; 
   
    index++;
    if (index < questionData.length) {
        console.log(currentChoiceBtn.textContent,solution, index, currentChoiceBtn.textContent== solution)
        if (currentChoiceBtn.textContent === solution) {
            messageEL.innerHTML = "<h4>Correct!</h4>";
        } else {
            messageEL.innerHTML = "<h4>Incorrect!</h4>";
            timeRemaining = timeRemaining - 10;
        }
        //half second delay
        setTimeout(renderQuestion, 500);
    } else {
        endQuiz();
    }
   
}

function endQuiz(){
    clearInterval(setIntervalId)
    questionSectionEl.classList.add("hide")
    initialEl.classList.remove("hide")
    highscoreEl.classList.remove("hide")
    scoreEl.textContent=timerEl.textContent
    displayHighscore();
    //var highScore = localStorage.setItem("highscore", JSON.stringify(highScore))

  }
//function to display highscore 
function displayHighscore(){
olEl.textContent=""
    var scoreList =localStorage.getItem("highscores");
    if(scoreList !==null){
        highscores =JSON.parse(scoreList);
    }else{
        highscores = [];
    }
  for(var i =0; i < highscores.length; i++){
    var li=document.createElement("li")
    li.textContent = highscores [i].name + "-" + highscores[i].score
    olEl.appendChild(li)
  }

}

function clearHighscore(event){
    localStorage.clear();
}

startQuizEl.addEventListener("click", startQuiz) //callback for click starts the quiz
choiceListEl.addEventListener("click", nextQuestion) //callback function for going to next question
clearScoreEL.addEventListener("click", clearHighscore) //callback to clear hs
submitEL.addEventListener("click", submitInitials)
function submitInitials(){
var initials = initialInputEl.value;
var highscore = { //object to store name/score
    
    "name":initials,
    "score": timeRemaining
};
highscores.push(highscore)
console.log(highscore)
localStorage.setItem("highscores",JSON.stringify (highscores)) //local storage
displayHighscore();
}




