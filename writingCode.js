// O(n^2)
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0 && i !== j) {
                return true
            }
        }
    }
    return false 
}

// O(n)
function uniqueChars(word) {
    splitWord = word.split(``)
    let newSet = new Set(splitWord)
    if (splitWord.length > newSet.size) {
        return false
    }
    return true
}

// O(n)
function pangramSentence(sentence) {
    sentence = sentence.toLowerCase()
    let alphabet = `abcedfghijklmnopqrstuvwxyz`.split(``)

    for (let i = 0; i < alphabet.length; i++) {
        if(sentence.indexOf(alphabet[i]) < 0){
          return false;
        }
      }
      return true;
}

// O(n)
function longWord(arr) {
    let longestWord
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord || longestWord === undefined) {
            longestWord = arr[i].length
        }
    }
    return longestWord
}


// console.log(sumZero([1, 2 ,3]))
// console.log(longWord([`balling`, `baller`, `the industrial revolution`]))
// console.log(uniqueChars(`bals`))
// console.log(pangramSentence(`The quick brown fox jumps over the lazy dog!`))