/**
 * Top K frequent words
 * 
 * Given an array of words and a value K
 * Sort the words by frequency and return the top most frequent K words
 */

var topKFrequent = function(words, k) {
    let uniqueWords = []
    let frequencyMap = {}
    for (let i = 0; i < words.length; i++) {
        if (!frequencyMap[words[i]]) {
            uniqueWords.push(words[i])
            frequencyMap[words[i]] = 1
        } else {
            frequencyMap[words[i]] += 1
        }
    }
    uniqueWords.sort(function (a,b) {
        if (frequencyMap[a] == frequencyMap[b]) {
            return a.localeCompare(b)
        } else {
            return frequencyMap[b] - frequencyMap[a]
        }
    })
    console.log(frequencyMap)
    console.log(uniqueWords)
    return uniqueWords.slice(0,k)
};

let testWords = ["i", "love", "leetcode", "i", "love", "coding"]
console.log(topKFrequent(testWords, 4))