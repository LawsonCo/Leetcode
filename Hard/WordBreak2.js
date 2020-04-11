// Word Break 2 
// Given an array of words - ["cat", "cats", "and", "sand", "dog"], and a target phrase - "catsanddog"
// Find all possible word combos to make target phrase


 // Solve with bottom-up dynamic programming:
var wordBreak = function(s, wordDict) {
   let solutions = {"": 0}
   for (let i = s.length-1; i >= 0; i--) {
       let curr_word = s.slice(i)
       let curr_solutions = []
       for (let k = 0; k < wordDict.length; k++) {
           if (curr_word.startsWith(wordDict[k])) {
               if (wordDict[k].length == curr_word.length) {
                   curr_solutions.push(curr_word)
                   continue
               }
               let sentences = solutions[curr_word.slice(wordDict[k].length)]
               if (sentences.length == 0) {
                    continue
               }
               for (let j = 0; j < sentences.length; j++) {
                   curr_solutions.push(wordDict[k] + " " + sentences[j])
               }
           }
       }
       solutions[curr_word] = curr_solutions
   }
   return solutions[s]
}

let words = ["apple", "pen", "applepen", "pine", "pineapple"]
let target = "pineapplepenapple"
console.log(wordBreak(target, words))

console.log("apple".slice("apple".length))