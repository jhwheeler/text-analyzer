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

    getCharCount: function(state) {
        state.charCount = state.text.length
    },

    getUniqueWordCount: function(state) {
        state.uniqueWordCount = state.uniqueWords.length
    }
}

var lengthHelper = {
    getWordLengths: function(state) {
        for (var i = 0; i < state.words.length; i++) {
           state.wordLengths.push(state.words[i].length)
        }
    },
    getAverageWordLength: function(state) { 
        var sum = state.wordLengths.reduce(function(a, b) {
            return a + b
        }, 0)
        state.averageWordLength = (sum/state.wordLengths.length).toFixed(2)
    },

    getSentenceLengths: function(state) {
            for (var i = 0; i < state.sentences.length; i++) {
                state.sentenceLengths.push(state.sentences[i].length)
            }
    },

    getAverageSentenceLength: function(state) {
        var sum = state.sentenceLengths.reduce(function(a,b) {
           return a + b
        }, 0)
       state.averageSentenceLength = (sum/state.sentenceLengths.length).toFixed(2)
    }
}
        
var renderHelper = {
    renderWordCount: function(state, element) {
        return element.text(state.wordCount)
    },

    renderCharCount: function(state, element) {
        return element.text(state.charCount)
    },

    renderUniqueWordCount: function(state, element) {
        return element.text(state.uniqueWordCount)
    },

    renderAverageWordLength: function(state, element) {
        return element.text(state.averageWordLength)
    },

    renderAverageSentenceLength: function(state, element) {
        return element.text(state.averageSentenceLength + " characters")
    }
}

$(function() {
    var state = {
        text: "",
        words: [],
        uniqueWords: [],
        sentences: [],
        wordLengths: [],
        sentenceLengths: [],
        wordCount: 0,
        charCount: 0,
        uniqueWordCount: 0,
        averageWordLength: 0,
        averageSentenceLength: 0
    }
    $('#user-text').on("input", function(event) {
        event.preventDefault()
        for (var key in stringHelper) {
            stringHelper[key](state)
        }
        for (var key in countHelper) {
            countHelper[key](state)
        }
        for (var key in lengthHelper) {
           lengthHelper[key](state)
        } 
        renderHelper.renderWordCount(state, $('.wordCount'))
        renderHelper.renderCharCount(state, $('.charCount'))
        //renderHelper.renderUniqueWordCount(state, $('.uniqueWordCount'))
        renderHelper.renderAverageWordLength(state, $('.averageWordLength'))
        renderHelper.renderAverageSentenceLength(state, $('.averageSentenceLength'))
        $("dl").removeClass('hidden')
    })
})
