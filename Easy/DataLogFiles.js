/**
 * Reorder Data in Log Files
 */

var reorderLogFiles = function(logs) {
    let letterLogs = []
    let wordLogs = []
    for (let i = 0; i < logs.length; i++) {
        if (isNaN(logs[i].split(" ")[1])) {
            letterLogs.push(logs[i])
        } else {
            wordLogs.push(logs[i])
        }
    }  
    console.log(letterLogs)
    letterLogs.sort(function(a,b) {
        let elsA = a.split(" ")
        let elsB = b.split(" ")
        let lexoA = elsA.slice(1).join("")
        let lexoB = elsB.slice(1).join("")
        let res = lexoA.localeCompare(lexoB)
        console.log(res)
        if (res == 0) {
            return elsA[0].localeCompare(elsB[0])
        } else {
            return res
        }
    })
    console.log(letterLogs)
    return letterLogs.concat(wordLogs)
};

console.log(reorderLogFiles(["dig1 8 1 5 1","let1 art can","let0 art can","dig2 3 6","let2 own kit dig","let3 art zero"]))