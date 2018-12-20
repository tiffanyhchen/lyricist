
const nlp = require('compromise')
const sample = require('./sample')
var tokens = [];

function createTokens() {
    var nlp_text = nlp(sample.lyrics)

    var terms = nlp_text.out('terms');
    for (var i = 0; i < terms.length; i++) {  
      tokens.push(terms[i].text);
    }
}

function chooseStartingToken() {
    var index = Math.floor(Math.random() * tokens.length);
    return tokens[index];
}

function findNextWord(currentWord) {

    var nextWords = [];
    for (var w = 0; w < tokens.length-1; w++) {
        if (tokens[w] == currentWord) {
        nextWords.push(tokens[w+1]);
        }
    }

    var word = nextWords[Math.floor(Math.random() * nextWords.length)]; // choose a random next word
    return word;

}

function start(n) {

    createTokens();

    var currentWord = chooseStartingToken();
    var sentence = currentWord + " ";
    let i = 0
    // while (currentWord.indexOf(".") < 0) { // while we haven't found a period
    while(i < n) {
        currentWord = findNextWord(currentWord);
        sentence += currentWord + " ";
        i++
    }

    console.log(sentence)

}

start(15)