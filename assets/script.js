// Intro page heading
var quizChallenge = document.createElement("h2");
var quizChallengeHeading = document.createTextNode("Coding Quiz Challenge");
quizChallenge.appendChild(quizChallengeHeading);
var quizChallengeEl = document.getElementById("multiple-choice");
quizChallengeEl.appendChild(quizChallenge);
quizChallenge.className = "quizChallenge";
quizChallenge.setAttribute("id", "opening");

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
