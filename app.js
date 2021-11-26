// ask their name to use in game?
// check the answer and return r/w
// give them a score at the end
// ask if they'd like to play again

// write a fetch request to bring back a question in a p

getQuestion();

async function getQuestion(){
    let response = await fetch("https://opentdb.com/api.php?amount=10");
    console.log(response);
    let data = await response.json();
    console.log(data)
    let question = document.querySelector('#question')
    question.innerText = data.results[0]['question']
}

getQuestion();

// make a button that activates the fetch
//link button from html to js, changing innerText to new question

let newQuestion = document.querySelector("#new-question")
newQuestion.addEventListener('click', getQuestion)

// how does the user interact? clicking buttons/input?
//create an input element to take user answer as string
//check the answer againt the actually answer
//return a true or false 
//keep score 

function getAnswerInput () {
    let answer = document.getElementById("useranswer").value
    return answer
    
}
console.log(answer)


let submitButton = document.querySelector("#input-button")
submitButton.addEventListener('click', getAnswerInput)
