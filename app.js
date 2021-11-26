// ask their name to use in game?
// make a button that activates the fetch

// how does the user interact? clicking buttons?
// check the answer and return r/w
// give them a score at the end
// ask if they'd like to play again

// write a fetch request to bring back a question in a p
async function getQuestion(){
    let response = await fetch('https://api.kanye.rest');
    console.log(response);
    let data = await response.json();
    console.log(data);
    let question = document.querySelector('question')
    question.innerText = data.results['quote']
}

getQuestion();

//write async function
// async function getQuote(){
//     let response = await fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=boolean");
//     console.log(response);
//     let data = await response.json();
//     console.log(data);
//     let kanyeQuote = document.querySelector('#t-question')
//     kanyeQuote.innerText = data['quote'];
//     addToList(data['quote'])
// }
// getQuote()
//new quote button
// let newQuoteButton = document.querySelector("#new-quote-button")
//the event listener attached to button
// newQuoteButton.addEventListener("click", getQuote)