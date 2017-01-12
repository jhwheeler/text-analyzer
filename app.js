// 1. on click, start function call chain
// 2. get the text value
// 3. transform text value string into three arrays:
//      * array of all words
//      * array of unique words
//      * array of sentences
// 4. get count for word array
// 5. get count for unique word array
// 6. calculate average word length (with array of all words)
// 7. calculate average sentence length (with array of sentences)
// 8. render the results to the end user


function getText() {
    var text = $('#user-text').val()
    console.log(typeof text)
    var wordArr = getWordArr(text)
    return wordArr
}

function getWordArr(text) {
    var words = text.match(/[^_\W]+/g)
    var uniqueArr = getUniqueWords(words)
    var uniqueCount = uniqueArr.length
    return uniqueCount
}

function getUniqueWords(words) {
    var uniqueWords = []
    for (var i = 0; i < words.length; i++) {
        if (uniqueWords.indexOf(words[i]) >= 0) {
            ;
        } else {
           uniqueWords.push(words[i]) 
          }
    }
return uniqueWords
}

//need to call this somewhere - maybe in getUniqueWords (but that doesn't seem right...)?
function getWordCount(words) {
    var wordCount = words.length
    return wordCount
}

function getSentences(text) {
    var sentenceArr = text.match( /[^\.!\?]+[\.!\?]+/g )
    return sentenceArr
}

function getWordLength(words) {
   //get lengths of all the words
    //divide by wordCount
     
}

function getSentenceLength(sentenceArr) {

}

function clickHandler() {
    $('button').click(function() {
        getText()
    })
}

$(function() {
    clickHandler()
})



//(done) transform strings into an array of words
//(done) count the words (as they're items in the array)
//(done) to check unique word count, compare with for loop and tracking var
// for average word length, add lengths of words in array and divide by number of words in array
// for average sentence length: 
// print each result of analysis in `.text-report` div while removing `.hidden`
