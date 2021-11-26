// global variables
let question
let correctAnswer

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
    console.log(correctAnswer)
    return correctAnswer
}

// make btn that fetches---link btn, changing innerText to new Q
let newQuestion = document.querySelector("#new-question");
newQuestion.addEventListener('click', getQuestion);

// Stores answer in 'answer' when submit clicked
// check if answer is correct
function checkAnswerInput () {
    answer = document.getElementById("useranswer").value;
    console.log(answer);
    // if (answer === data.results[0]['correct_answer']){
    //     console.log('Its working!');
    // }
}
let submitButton = document.querySelector("#input-button")
submitButton.addEventListener('click', checkAnswerInput)

// ask their name to use in game?
// check the answer and return r/w
// give them a score at the end
// ask if they'd like to play again
//create an input element to take user answer as string
//check the answer againt the actually answer
//return a true or false 
//keep score 