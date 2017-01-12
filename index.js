'use strict'

//state modification functions

var stringHelper = {
    getText: function(state) {
        state.text = $('#user-text').val()
    },
    getWords: function(state) {
        state.words = state.text.match(/[^_\W]+/g)
    },
    getSentences: function(state) {
        state.sentences = state.text.match( /[^\.!\?]+[\.!\?]+/g )
        if (state.sentences == null) {
           state.sentences = [state.text]
        }
    },
    getUniqueWords: function(state) {
        for (var i = 0; i < state.words.length; i++) {
            if (state.uniqueWords.indexOf(state.words[i]) < 0) {
                state.uniqueWords.push(state.words[i])
            }
        }
    }
}

var countHelper = {
    getWordCount: function(state) {
        state.wordCount = state.words.length
    },
    getUniqueWordCount: function(state) {
        state.uniqueWordCount = state.uniqueWords.length
    }
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
    state.averageWordLength = (sum/state.wordLengths.length).toFixed(2)
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
   state.averageSentenceLength = (sum/state.sentenceLengths.length).toFixed(2)
}

// render functions

var renderWordCount = require('./Render.js')

var renderUniqueWordCount = function(state, element) {
    return element.text(state.uniqueWordCount)
}

var renderAverageWordLength = function(state, element) {
    return element.text(state.averageWordLength)
}

var renderAverageSentenceLength = function(state, element) {
    return element.text(state.averageSentenceLength + " characters")
}

// event listener functions

$(function() {
    var state = {
        text: "",
        words: [],
        uniqueWords: [],
        sentences: [],
        wordLengths: [],
        sentenceLengths: [],
        wordCount: 0,
        uniqueWordCount: 0,
        averageWordLength: 0,
        averageSentenceLength: 0
    }
    $('#user-text').on("input", function(event) {
        event.preventDefault()
        for (var key in stringManipulation) {
            stringManipulation[key](state)
        }
        getUniqueWords(state)
        getWordCount(state)
        getUniqueWordCount(state)
        getWordLengths(state)
        getAverageWordLength(state)
        getSentenceLengths(state)
        getAverageSentenceLength(state)
        renderWordCount(state, $('.wordCount'))
        renderUniqueWordCount(state, $('.uniqueWordCount'))
        renderAverageWordLength(state, $('.averageWordLength'))
        renderAverageSentenceLength(state, $('.averageSentenceLength'))
        $("dl").removeClass('hidden')
    })
})
