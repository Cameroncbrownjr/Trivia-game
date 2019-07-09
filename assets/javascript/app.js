//trivia game with diffrent states
var mainMenudiv = $("#mainMenu")
var playBtn = $("#play")
var gameDiv = $("#game")
var anwserH4 = $("#anwser")
var questionH3 = $("#question")
var anwserOptionsDiv = $("#anwserOptions")
var currentQuestionIndex
var numCorrect
var qList = [
    {
        question: "",
        anwser: "",
        options: ["", "", "", ""]
    }
    {
        question: "",
        anwser: "",
        options: ["", "", "", ""]
    }
    {
        question: "",
        anwser: "",
        options: ["", "", "", ""]
    }
    {
        question: "",
        anwser: "",
        options: ["", "", "", ""]
    }
    {
        question: "",
        anwser: "",
        options: ["", "", "", ""]
    }
    {
        question: "",
        anwser: "",
        options: ["", "", "", ""]
    }
    {
        question: "",
        anwser: "",
        options: ["", "", "", ""]
    }
    {
        question: "",
        anwser: "",
        options: ["", "", "", ""]
    }
    {
        question: "",
        anwser: "",
        options: ["", "", "", ""]
    }
    {
        question: "",
        anwser: "",
        options: ["", "", "", ""]
    }
]

playBtn.on("click", function (e) {
    mainMenudiv.hide()
    gameDiv.show()
    startGame()
})
function startGame() {
    questionH3.text("")
    anwserH4.text("")
    anwserOptionsDiv.empty()
    currentQuestionIndex = 0
    numCorrect = 0
    qList.sort(() => 0.5 - Math.random())
    showQuestion();
}

function showQuestion() {
    anwserOptionsDiv.empty()
    anwserH4.text("")
    var currentQuestion = qList[currentQuestionIndex]
    questionH3.text(currentQuestion.question)
    // loop anwser throuh options to make buttons
    for (var i = 0; i < currentQuestion.options.length; i++) {
        var newBtn = $("button")
        newBtn.text(currentQuestion.options[i])
        //attach click listner to button
        newBtn.on("click", function (e) {
            console.log(e.target.textContent)
            //handle correct/inc guess
            if (e.target.textContent === currentQuestion.anwser) {
                numCorrect++
                anwserH4.text("You are so " + currentQuestion.anwserOptionsDiv)
            }
            else {
                anwserH4.text("wrong")
            }
            //create next question button
            anwserOptionsDiv.empty()
            var nextBtn = $(#button)
            nextBtn.text("next Queston")
            nextBtn.on("click", showNextQuestion)
            anwserOptionsDiv.append(nextBtn)
        })
        anwserOptionsDiv.append(newBtn)
    }
}
//if next question is outside of length then end game
function showNextQuestion() {
    if (currentQuestionIndex + 1 !== qList.length) {
        currentQuestionIndex++
        showQuestion()
    }
    else {
        gameOver()
    }
}

function gameOver() {
    gameDiv.hide()
    $("#mainMenu").text("you Scored " + Math.round(numCorrect / qList.length) + "%")
    $("#mainMenu").text("")
    playBtn.text("Play again")
    mainMenudiv.show()
}