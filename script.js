// Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

// QUOTES DATA
const quotes = [
  {
    quote: `"The best way to find yourslef is to lose yourself in the service of others."`,
    person: ` Mahatma Gandhi`,
  },
  {
    quote: `"The purpose of our lives is to be happy."`,
    person: ` Dalai Lama`,
  },
  {
    quote: `"Life is what happens when you're busy making other plans." `,
    person: ` John Lennon`,
  },
  {
    quote: `"Get busy living or get busy dying."`,
    person: ` Stephen King`,
  },
  {
    quote: `"You only live once, but if you do it right, once is enough."`,
    person: ` Mae West`,
  },
  {
    quote: `"Many of life's failures are people who did not realize how close they were to success when they gave up."`,
    person: ` Thomas A. Edison`,
  },
  {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person: ` Albert Einstein`,
  },
  {
    quote: ` "Never let the fear of striking out keep you from playing the game."`,
    person: ` Babe Ruth`,
  },
  {
    quote: `"Money and success don't change people; they merely amplify what is already there."`,
    person: `Will Smith`,
  },
  {
    quote: `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."`,
    person: `Steve Jobs`,
  },
];

// METHOD 1

// btn.addEventListener('click', function ()){
//      let random = Math.floor(Math.random() * quotes.length);

//      quote.innerText = quotes[random].quote;
//      person.innerText = person[random].person;
// }

// METHOD 2 USING FOR..In Loop
function randomQuote() {
  for (let q in quotes) {
    let q = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[q].quote;
    person.innerText = quotes[q].person;
  }
}

btn.addEventListener("click", randomQuote);
