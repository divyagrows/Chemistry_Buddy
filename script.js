//lets create all the functions with appropriate id names used in index.html

function openSection(id) {
    document.getElementById("menu").hidden = true;
    document.getElementById(id).hidden = false;
}

var openReacnBtn = document.getElementById("open-reactions");
var openQuizBtn =  document.getElementById("open-quiz");
var reactionslist = document.getElementById("reactions-list")
var quizsec = document.getElementById("quiz-sections")
var quizbox = document.getElementById("quiz-box")
var scoreText = document.getElementById("score-text")

var quiz_questions = [

    {que: "Which gas is evolved in formation of NaOH?",
    options: ["O2", "Cl2", "H2", "N2"],
    answer: 1},

    {que: "When baking soda is heated, which gas is evovled that makes baked goods rise?",
    options: ["CO", "O2", "CO2", "H2"],
    answer: 2},

    {que: "How many water-molecules are present in one unit of Washing Soda[REACTION 4] ",
    options: ["5", "2", "8", "10"],
    answer: 3},

    {que: "In our story,Sodium & Hydrogen escape a fire using a Carbon ladder & 3 Oxygen balloons.What is thir superhero formula?",
    options: ["NaHCO3", "Na2CO3", "H2O", "CO2"],
    answer: 0},

    {que: "In our story,a dry construction worker named Slaky-Lime absorbs Chlorine & forms which compound?",
    options: ["NaCl", "CaCl2", "CaOCl2", "AlCl3"],
    answer: 2},

]
 //show reacn only hide quiz section
function showReactions() {
    reactions.List.hidden = false;
    quizSection.hidden = true;
}

//show quiz section only hide reacn
function showQuiz() {
    quizSection.hidden = false;
    reactionslist.hidden = true;
}

//very imp line below,used to clear the ,mess the user typed
function cleanText() {
    return text.replace(/\s/g, "").toLowerCase();   
}

//for clicking a button 
function checkReaction(button) {
    var card = button.parentElement;
    var boxes = card.querySelectorAll("input");
    var result = card.querySelector(".result");
    var allCorrect = true;
     
    for (var i = 0; i < boxes.length; i++) {
        var typed = cleanText(boxes[i].value);
        var goodAnswers = boxes[i].dataset.answer.split(",");  // here a\|b refers to [""a,"b"]    
        
        if (goodAnswers.includes(typed)) {
            boxes[i].className = "right";
        }
         else{
            boxes[i].className = "wrong";
        }
    }

    if(allCorrect) {
        result.textContent="Perfecto! You got all answers right!";
    } else{
        result.textContent = "Oops! Try Again until you becoe a #Perfecto!"
    }
    
//for the Quiz Part 

function buildQuiz() {
    var html ="";

    for (var q = 0; q <questions.length; q++)
        html += '<div class="quiz-question">';
        html += "<h3>" + questions[q].que + "</h3>";
        for (var i = 0; i < questions[q].options.length; i++) {
            html += '<label><input type="radio" name="question' + q + '" value="' + i + '"> ' + questions[q].options[i] + '</label><br>';
        }
    }
    quizbox.innerHTML = html;
    scoreText.textContent = "";
}

//for counting  the number of Correct answers

function submitQuiz(){
    var score = 0;

    for(var q = 0; q <questions.length; q++){
        var picked = document.querySelector('input[name="question' + q + '"]:checked');

        if(picked !== null && Number(picked.value) === questions[q].answer) {
            score++;
        }
    }
    scoreText.textContent = "You scored " + score + " out of " + questions.length + "!";

}

//make the Buttons work or function
openReactnBtn.addEventListener("click", showReactions);
openQuizBtn.addEventListener("click", showQuiz);
document.getElementById("submit-quiz").addEventListener("click", submitQuiz);
document.getElementById("retry-quiz").addEventListener("click", buildQuiz);

//general function for every Check btn
var checkBtns = document.querySelectorAll(".check-btn");

for (var i = 0; i < checkBtns.length; i++) {
    checkBtns[i].addEventListener("click", function() {
        checkReaction(this);
    });
}




