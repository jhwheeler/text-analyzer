function getText() {
    var text = $('#user-text').val()
    var wordArr = getWordArr(text)
    return wordArr
}

function getWordArr(text) {
    var words = text.match(/[^_\W]+/g)
    console.log(words)
    var uniqueArr = getUniqueArr(words)
    return uniqueArr
}

function getUniqueArr(words) {
    var uniqueWords = {}
    for (var i = 0; i < words.length; i++) {
        if (uniqueWords.hasOwnProperty(words.i)) {
            console.log(uniqueWords)
        } else {
           uniqueWords[i] = words[i] 
    }
}
console.log(uniqueWords)
}

//need to call this somewhere - maybe in getUniqueArr? doesn't seem like the right place, but where?
function getWordCount(words) {
    var wordCount = words.length
    return wordCount
}

function clickHandler() {
    $('button').click(function() {
        getText()
    })
}

$(function() {
    clickHandler()
})



//loop through array of words
//use object to track - object more efficient > array
//check if property exists
//assign property for each
//object.keys()
//use length





//(done) transform strings into an array of words
//(done) count the words (as they're items in the array)
// to check unique word count, compare with for loop and tracking var
// for average word length, add lengths of words in array and divide by number of words in array
// for average sentence length: 
// print each result of analysis in `.text-report` div while removing `.hidden`
