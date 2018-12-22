const MarkovGen = require('markov-generator');

let markov;

let createNewMarkovChain = (input) => {
  markov = new MarkovGen({
    input,
    minLength: 10
  });
}

let generateNewLyric = () => {
  return markov.makeChain()
}

module.exports.createNewMarkovChain = createNewMarkovChain
module.exports.generateNewLyric = generateNewLyric