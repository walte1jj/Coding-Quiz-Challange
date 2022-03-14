// Intro page heading
var quizChallenge = document.createElement("h2");
var quizChallengeHeading = document.createTextNode("Coding Quiz Challenge");
quizChallenge.appendChild(quizChallengeHeading);
var quizChallengeEl = document.getElementById("multiple-choice");
quizChallengeEl.appendChild(quizChallenge);
quizChallenge.className = "quizChallenge";
quizChallenge.setAttribute("id", "opening");

//timer document.getElementById("first-question-first-answer").addEventListener("click", firstWrong);
var timeleft = 75;
//document.addEventListener("click", function(downloadTimer) {});
var downloadTimer = setInterval(function() {  
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Time's Up!";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  };
  timeleft -= 1;
}, 1000)

// opening paragraph
var opening = document.createElement("p");
var openingParagraph = document.createTextNode("Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!");
opening.appendChild(openingParagraph);

var openingEl = document.getElementById("multiple-choice");
openingEl.appendChild(opening);
opening.className = "opening";
opening.setAttribute("id", "open");

// start button
var startButtonEl = document.createElement("button");
startButtonEl.innerHTML = "Start Quiz";
startButtonEl.name = "startButton";
startButtonEl.className = "startButton";
document.body.appendChild(startButtonEl);
startButtonEl.setAttribute("id", "next");

// click event tranisition to next page
document.getElementById("next").addEventListener("click", nextPage);
function nextPage() {
    document.getElementById("open").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById("opening").style.display = "none";
    document.getElementById("first-question").style.display = "block";
    document.getElementById("first-question-first-answer").style.display = "block";
    document.getElementById("first-question-second-answer").style.display = "block";
    document.getElementById("first-question-third-answer").style.display = "block";
    document.getElementById("first-question-fourth-answer").style.display = "block";
}

// first question
var firstQuestion = document.createElement("h2");
var firstQuestionText = document.createTextNode("Commonly used data types DO Not Include:");

firstQuestion.appendChild(firstQuestionText);
var firstQuestionEl = document.getElementById("multiple-choice");
firstQuestionEl.appendChild(firstQuestion); 
firstQuestion.className = "firstQuestion";
firstQuestion.setAttribute("id", "first-question");

// first question answer buttons
var firstQuestionAnswerOneEl = document.createElement("button");
firstQuestionAnswerOneEl.innerHTML = "1. strings";
firstQuestionAnswerOneEl.name = "firstQuestionAnswerOne";
firstQuestionAnswerOneEl.className = "firstQuestion";
document.body.appendChild(firstQuestionAnswerOneEl);
firstQuestionAnswerOneEl.setAttribute("id", "first-question-first-answer");

// first question second answer
var firstQuestionAnswerTwoEl = document.createElement("button");
firstQuestionAnswerTwoEl.innerHTML = "2. booleans";
firstQuestionAnswerTwoEl.name = "firstQuestionAnswerOne";
firstQuestionAnswerTwoEl.className = "firstQuestion";
document.body.appendChild(firstQuestionAnswerTwoEl);
firstQuestionAnswerTwoEl.setAttribute("id", "first-question-second-answer");

// first question third answer
var firstQuestionAnswerThreeEl = document.createElement("button");
firstQuestionAnswerThreeEl.innerHTML = "3. alerts";
firstQuestionAnswerThreeEl.name = "firstQuestionAnswerOne";
firstQuestionAnswerThreeEl.className = "firstQuestion";
document.body.appendChild(firstQuestionAnswerThreeEl);
firstQuestionAnswerThreeEl.setAttribute("id", "first-question-third-answer");

// first question fourth answer
var firstQuestionAnswerFourEl = document.createElement("button");
firstQuestionAnswerFourEl.innerHTML = "4. numbers";
firstQuestionAnswerFourEl.name = "firstQuestionAnswerOne";
firstQuestionAnswerFourEl.className = "firstQuestion";
document.body.appendChild(firstQuestionAnswerFourEl);
firstQuestionAnswerFourEl.setAttribute("id", "first-question-fourth-answer");

// Right or wrong answer first
document.getElementById("first-question-third-answer").addEventListener("click", firstCorrect);
function firstCorrect() {
    document.getElementById("first-question-third-answer").style.display = "none";
    document.getElementById("first-question-first-answer").style.display = "none";
    document.getElementById("first-question-second-answer").style.display = "none";
    document.getElementById("first-question-fourth-answer").style.display = "none";
    document.getElementById("first-question").style.display = "none";
    document.getElementById("second-question").style.display = "block";
    document.getElementById("second-question-first-answer").style.display = "block";
    document.getElementById("second-question-second-answer").style.display = "block";
    document.getElementById("second-question-third-answer").style.display = "block";
    document.getElementById("second-question-fourth-answer").style.display = "block";
};

document.getElementById("first-question-first-answer").addEventListener("click", firstWrong);
document.getElementById("first-question-second-answer").addEventListener("click", firstWrong);
document.getElementById("first-question-fourth-answer").addEventListener("click", firstWrong);

function firstWrong() {
    if (firstWrong = "click") {
        (timeleft = timeleft - 10);
    }
    document.getElementById("first-question-third-answer").style.display = "none";
    document.getElementById("first-question-first-answer").style.display = "none";
    document.getElementById("first-question-second-answer").style.display = "none";
    document.getElementById("first-question-fourth-answer").style.display = "none";
    document.getElementById("first-question").style.display = "none"
    document.getElementById("second-question").style.display = "block";
    document.getElementById("second-question-first-answer").style.display = "block";
    document.getElementById("second-question-second-answer").style.display = "block";
    document.getElementById("second-question-third-answer").style.display = "block";
    document.getElementById("second-question-fourth-answer").style.display = "block";
};

// second question
var secondQuestion = document.createElement("h2");
var secondQuestionText = document.createTextNode("The condition in an if/else statement is enclosed with________.");

secondQuestion.appendChild(secondQuestionText);
var secondQuestionEl = document.getElementById("multiple-choice");
secondQuestionEl.appendChild(secondQuestion); 
secondQuestion.className = "secondQuestion";
secondQuestion.setAttribute("id", "second-question");

// second question answer buttons
var secondQuestionAnswerOneEl = document.createElement("button");
secondQuestionAnswerOneEl.innerHTML = "1. quotes";
secondQuestionAnswerOneEl.name = "secondQuestionAnswerOne";
secondQuestionAnswerOneEl.className = "secondQuestion";
document.body.appendChild(secondQuestionAnswerOneEl);
secondQuestionAnswerOneEl.setAttribute("id", "second-question-first-answer");

// second question second answer
var secondQuestionAnswerTwoEl = document.createElement("button");
secondQuestionAnswerTwoEl.innerHTML = "2. curly brackets";
secondQuestionAnswerTwoEl.name = "secondQuestionAnswerOne";
secondQuestionAnswerTwoEl.className = "secondQuestion";
document.body.appendChild(secondQuestionAnswerTwoEl);
secondQuestionAnswerTwoEl.setAttribute("id", "second-question-second-answer");

// second question third answer
var secondQuestionAnswerThreeEl = document.createElement("button");
secondQuestionAnswerThreeEl.innerHTML = "3. parenthesis";
secondQuestionAnswerThreeEl.name = "secondQuestionAnswerOne";
secondQuestionAnswerThreeEl.className = "secondQuestion";
document.body.appendChild(secondQuestionAnswerThreeEl);
secondQuestionAnswerThreeEl.setAttribute("id", "second-question-third-answer");

// second question fourth answer
var secondQuestionAnswerFourEl = document.createElement("button");
secondQuestionAnswerFourEl.innerHTML = "4. square brackets";
secondQuestionAnswerFourEl.name = "secondQuestionAnswerOne";
secondQuestionAnswerFourEl.className = "secondQuestion";
document.body.appendChild(secondQuestionAnswerFourEl);
secondQuestionAnswerFourEl.setAttribute("id", "second-question-fourth-answer");

// Right or wrong answer second
document.getElementById("second-question-third-answer").addEventListener("click", secondCorrect);
function secondCorrect() {
    document.getElementById("second-question-third-answer").style.display = "none";
    document.getElementById("second-question-first-answer").style.display = "none";
    document.getElementById("second-question-second-answer").style.display = "none";
    document.getElementById("second-question-fourth-answer").style.display = "none";
    document.getElementById("second-question").style.display = "none"
    document.getElementById("third-question").style.display = "block";
    document.getElementById("third-question-first-answer").style.display = "block";
    document.getElementById("third-question-second-answer").style.display = "block";
    document.getElementById("third-question-third-answer").style.display = "block";
    document.getElementById("third-question-fourth-answer").style.display = "block";
};

document.getElementById("second-question-first-answer").addEventListener("click", secondWrong);
document.getElementById("second-question-second-answer").addEventListener("click", secondWrong);
document.getElementById("second-question-fourth-answer").addEventListener("click", secondWrong);

function secondWrong() {
    if (secondWrong = "click") {
        (timeleft = timeleft - 10);
    }
    document.getElementById("second-question-third-answer").style.display = "none";
    document.getElementById("second-question-first-answer").style.display = "none";
    document.getElementById("second-question-second-answer").style.display = "none";
    document.getElementById("second-question-fourth-answer").style.display = "none";
    document.getElementById("second-question").style.display = "none"
    document.getElementById("third-question").style.display = "block";
    document.getElementById("third-question-first-answer").style.display = "block";
    document.getElementById("third-question-second-answer").style.display = "block";
    document.getElementById("third-question-third-answer").style.display = "block";
    document.getElementById("third-question-fourth-answer").style.display = "block";
};

// third question
var thirdQuestion = document.createElement("h2");
var thirdQuestionText = document.createTextNode("Arrays in Javascript can be used to store________.");

thirdQuestion.appendChild(thirdQuestionText);
var thirdQuestionEl = document.getElementById("multiple-choice");
thirdQuestionEl.appendChild(thirdQuestion); 
thirdQuestion.className = "thirdQuestion";
thirdQuestion.setAttribute("id", "third-question");

// third question answer buttons
var thirdQuestionAnswerOneEl = document.createElement("button");
thirdQuestionAnswerOneEl.innerHTML = "1. numbers and strings";
thirdQuestionAnswerOneEl.name = "thirdQuestionAnswerOne";
thirdQuestionAnswerOneEl.className = "thirdQuestion";
document.body.appendChild(thirdQuestionAnswerOneEl);
thirdQuestionAnswerOneEl.setAttribute("id", "third-question-first-answer");

// third question second answer
var thirdQuestionAnswerTwoEl = document.createElement("button");
thirdQuestionAnswerTwoEl.innerHTML = "2. other arrays";
thirdQuestionAnswerTwoEl.name = "thirdQuestionAnswerOne";
thirdQuestionAnswerTwoEl.className = "thirdQuestion";
document.body.appendChild(thirdQuestionAnswerTwoEl);
thirdQuestionAnswerTwoEl.setAttribute("id", "third-question-second-answer");

// third question third answer
var thirdQuestionAnswerThreeEl = document.createElement("button");
thirdQuestionAnswerThreeEl.innerHTML = "3. booleans";
thirdQuestionAnswerThreeEl.name = "thirdQuestionAnswerOne";
thirdQuestionAnswerThreeEl.className = "thirdQuestion";
document.body.appendChild(thirdQuestionAnswerThreeEl);
thirdQuestionAnswerThreeEl.setAttribute("id", "third-question-third-answer");

// third question fourth answer
var thirdQuestionAnswerFourEl = document.createElement("button");
thirdQuestionAnswerFourEl.innerHTML = "4. all of the above";
thirdQuestionAnswerFourEl.name = "thirdQuestionAnswerOne";
thirdQuestionAnswerFourEl.className = "thirdQuestion";
document.body.appendChild(thirdQuestionAnswerFourEl);
thirdQuestionAnswerFourEl.setAttribute("id", "third-question-fourth-answer");

// Right or wrong answer third
document.getElementById("third-question-fourth-answer").addEventListener("click", thirdCorrect);
function thirdCorrect() {
    document.getElementById("third-question-third-answer").style.display = "none";
    document.getElementById("third-question-first-answer").style.display = "none";
    document.getElementById("third-question-second-answer").style.display = "none";
    document.getElementById("third-question-fourth-answer").style.display = "none";
    document.getElementById("third-question").style.display = "none"
    //document.getElementById("first-question").style.display = "block";
};

document.getElementById("third-question-first-answer").addEventListener("click", thirdWrong);
document.getElementById("third-question-second-answer").addEventListener("click", thirdWrong);
document.getElementById("third-question-third-answer").addEventListener("click", thirdWrong);

function thirdWrong() {
    if (thirdWrong = "click") {
        (timeleft = timeleft - 10);
    }
    document.getElementById("second-question-third-answer").style.display = "none";
    document.getElementById("second-question-first-answer").style.display = "none";
    document.getElementById("second-question-second-answer").style.display = "none";
    document.getElementById("second-question-fourth-answer").style.display = "none";
    document.getElementById("second-question").style.display = "none"
    //document.getElementById("first-question").style.display = "block";
};

// All done page
var allDone = document.createElement("h2");
var allDoneText = document.createTextNode("All done!");

allDone.appendChild(allDoneText);
var allDoneEl = document.getElementById("multiple-choice");
allDoneEl.appendChild(allDone); 
allDone.className = "allDone";
allDone.setAttribute("id", "all-done");

