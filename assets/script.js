// Intro page

var quizChallenge = document.createElement("h2");
var quizChallengeHeading = document.createTextNode("Coding Quiz Challenge");
quizChallenge.appendChild(quizChallengeHeading);
var quizChallengeEl = document.getElementById("multiple-choice");
quizChallengeEl.appendChild(quizChallenge);
quizChallenge.className = "quizChallenge";
quizChallenge.setAttribute("id", "opening");


var opening = document.createElement("p");
var openingParagraph = document.createTextNode("Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!");
opening.appendChild(openingParagraph);

var openingEl = document.getElementById("multiple-choice");
openingEl.appendChild(opening);
opening.className = "opening";
opening.setAttribute("id", "open");


var startButtonEl = document.createElement("button");
startButtonEl.innerHTML = "Start Quiz";
startButtonEl.name = "startButton";
startButtonEl.className = "startButton";
document.body.appendChild(startButtonEl);
// onclick = "nextPage()";
// startButtonEl.click("nextPage");
startButtonEl.setAttribute("id", "next");


// click event tranisition to next page

document.getElementById("next").addEventListener("click", nextPage);
function nextPage() {
    //document.querySelectorAll("#next, #opening");
    document.getElementById("open").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById("opening").style.display = "none";
    document.getElementById("first-question").style.display = "block";
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


