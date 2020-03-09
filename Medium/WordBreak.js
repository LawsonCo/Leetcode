
var wordBreakWithCache = function(s, wordDict, wordsSeen) {
    //console.log(" Searching " + s)
    //console.log(wordsSeen)
    if (wordsSeen[s]) {
        return false
    }
    if (s.length == 0) { 
        return true
    }
    for (let i = 0; i < wordDict.length; i++) {
        let word = wordDict[i]
        if (s.startsWith(word)) {
            let substr = s.slice(word.length, s.length)
            //console.log(s + " contains " + word)
            if (wordBreakWithCache(s.slice(word.length, s.length), wordDict, wordsSeen)) {
                return true
            } else {
                wordsSeen[s.slice(word.length, s.length)] = true
            }
        }
    }
    wordsSeen[s] = true
    return false
};

function wordBreak(s, wordDict) {
    return wordBreakWithCache(s, wordDict, {})
}

let s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"
let wordDict = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
console.log(wordBreak(s, wordDict))