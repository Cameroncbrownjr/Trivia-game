//trivia game with different states
var mainMenudiv = $("#mainMenu");
var playBtn = $("#play");
var gameDiv = $("#game");
var answerH4 = $("#answer");
var questionH3 = $("#question");
var answerOptionsDiv = $("#answerOptions");
var currentQuestionIndex;
var numCorrect;
var qList = [
    {
        question: "What's the capital of the United States?",
        answer: "Washington, DC",
        options: ["Washington, DC", "Philadelphia", "Washington State", "Orange monkey island"]
    }
    {
        question: "Are ponies just small horses?",
        answer: "Definitely not",
        options: ["For sure", "Definitely not", "small evil horses", "Unsure"]
    }
    {
        question: "If given the chance, will a cat sit in a box?",
        answer: "fits=sits",
        options: ["no", "what is cat?", "fits=sits", "How big/important is the box?"]
    }
    {
        question: "What is the closest planet to the sun?",
        answer: "Mercury",
        options: ["Venus", "Pluto", "Uranus", "Mercury"]
    }
    {
        question: "What is the best hockey team?",
        answer: "Flyers",
        options: ["Devils", "Flyers", "Penguins", "Buffalo Bills"]
    }
    {
        question: "What does 2+2 equal?",
        answer: "4",
        options: ["2.5", "Fish", "4", "I didn't pass kindergarten"]
    
        question: "The earth is _____?",
        answer: "round, dumbass",
        options: ["flat", "on fiyaaah", "square", "round, dumbass"]
    }
    {
        question: "What color is the sky?",
        answer: "blue",
        options: ["blue", "red", "green", "purple"]
    }
    {
        question: "How many fingers should 3 people have all together?",
        answer: "30",
        options: ["35", "40", "30", "29"]
    }
    {
        question: "If given the chance to rate this quiz's quality, you'd say it's a ____? ",
        answer: "10/10s only",
        options: ["0/10", "0.5/10", "5/10", "10/10s only"]
    }
];

playBtn.on("click", function (e) {
    mainMenudiv.hide();
    gameDiv.show();
    startGame();
})
function startGame() {
    questionH3.text("");
    answerH4.text("");
    answerOptionsDiv.empty();
    currentQuestionIndex = 0;
    numCorrect = 0;
    qList.sort(() => 0.5 - Math.random());
    showQuestion();
}

function showQuestion() {
    answerOptionsDiv.empty();
    answerH4.text("");
    var currentQuestion = qList[currentQuestionIndex]
    questionH3.text(currentQuestion.question);
    // loop anwser through options to make buttons
    for (var i = 0; i < currentQuestion.options.length; i++) {
        var newBtn = $("button");
        newBtn.text(currentQuestion.options[i]);
        //attach click listner to button
        newBtn.on("click", function (e) {
            console.log(e.target.textContent)
            //handle correct/inc guess
            if (e.target.textContent === currentQuestion.answer) {
                numCorrect++;
                answerH4.text("You are so " + currentQuestion.answerOptionsDiv);
            }
            else {
                answerH4.text("wrong");
            }
            //create next question button
            answerOptionsDiv.empty()
            var nextBtn = $(#button);
            nextBtn.text("next Queston");
            nextBtn.on("click", showNextQuestion);
            answerOptionsDiv.append(nextBtn);
        })
        answerOptionsDiv.append(newBtn)
    }
}
//if next question is outside of length then end game
function showNextQuestion() {
    if (currentQuestionIndex + 1 !== qList.length) {
        currentQuestionIndex++;
        showQuestion();
    }
    else {
        gameOver();
    }
}

function gameOver() {
    gameDiv.hide();
    $("#mainMenu").text("you Scored " + Math.round(numCorrect / qList.length) + "%");
    $("#mainMenu").text("");
    playBtn.text("Play again");
    mainMenudiv.show();
}