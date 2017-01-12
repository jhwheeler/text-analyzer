'use strict'

// state variable

var state = {
    text: "",
    words: [],
    uniqueWords: [],
    sentences: []
    wordLengths: [],
    sentenceLengths: []
}


//state modification functions

var getText = function(state) {
    state.text = $('user-text').val()
}

var getWords = function(state) {
    state.words = state.text.match(/[^_\W]+/g)
}

var getSentences = function(state) {
    state.sentences = state.text.match( /[^\.!\?]+[\.!\?]+/g )
}

var getUniqueWords = function(state) {
    for (var i = 0; i < state.words.length; i++) {
        if (state.uniqueWords.indexOf(words[i]) < 0) {
            state.uniqueWords.push(words[i])
        }
    }
}

var getWordCount = function(state) {
    var wordCount = state.words.length
    //should I add `wordCount` to `state`?
    return wordCount
}

var getUniqueWordCount = function(state) {
    var uniqueWordCount = state.uniqueWords.length
    //should I add `uniqueWordCount` to `state`?
    return uniqueWordCount
}

var getWordLengths = function(state) {
    for (var i = 0; i < state.words.length; i++) {
       state.wordLengths.push(state.words[i].length)
    }
}

var getAverageWordLength = function(state) { 
    var sum = state.wordLengths.reduce(function(a, b) {
        return a + b
    }, 0)
    var averageWordLength = sum/wordLengths.length
    return averageWordLength
}

var getSentenceLengths = function(state) {
    for (var i = 0; i < state.sentences.length; i++) {
        state.sentenceLengths.push(state.sentences[i].length)
    }
}

var getAverageSentenceLength = function(state) {
    var sum = state.sentenceLengths.reduce(function(a,b) {
       return a + b
    }, 0)
   var averageSentenceLength = sum/sentenceLengths.length
  return averageSentenceLength
}

// render functions

var renderResults = function(state) {
    $("dl").toggleClass('hidden')
}



// event listener functions

$(function() {
    $('button').click(function() {
        event.preventDefault()
        getText(state)
        getWords(state)
        getSentences(state)
        getUniqueWords(state)
        getWordCount(state)
        getUniqueWordCount(state)

    }
}
