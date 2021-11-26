// global variables
let question;
let correctAnswer;
let userAnswer;
let userScore = 0;

// write a fetch request to bring back a question in a p
async function getQuestion(){
    let response = await fetch("https://opentdb.com/api.php?amount=10");
    let data = await response.json();
    console.log(data);
    // retrieve question
    question = document.querySelector('#question');
    question.innerText = data.results[0]['question'];
    //retrieve answer
    correctAnswer = data.results[0]['correct_answer'];
    console.log(correctAnswer);
    return correctAnswer;
}

// make btn that fetches---link btn, changing innerText to new Q
let newQuestion = document.querySelector("#new-question");
newQuestion.addEventListener('click', getQuestion);

console.log(correctAnswer)
// Stores answer in 'answer' when submit clicked -- check if answer is correct
function checkAnswerInput () {
    userAnswer = document.getElementById("userAnswer").value;
    if (userAnswer === correctAnswer){
    userScore ++;
    let scoreCard = document.querySelector('#score-bucket');
    scoreCard.innerText = userScore;
    userAnswer = '';
    return userScore}
    else window.alert("WRONG!")
}

let submitButton = document.querySelector("#input-button");
submitButton.addEventListener('click', checkAnswerInput);

let scoreCard = document.querySelector('#score-bucket');
scoreCard.innerText = userScore;

// ask their name to use in game?
// check the answer and return r/w
// give them a score at the end
// ask if they'd like to play again
//create an input element to take user answer as string
//check the answer against the actually answer
//return a true or false 
//keep score 
//clear previous answer

//get rid funny writing in question 
// both userAnswer and correctAnswer to be in lowerCase for checking.
//alert user to incorrect answer to move on 

