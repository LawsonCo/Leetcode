/**
 * Search Suggestions System
 *
 * Given a dictionary and a 
 */

class Node { 
    constructor(val) {
        this.val = val
        this.children = {}
        this.terminus = false
    }
}

class Trie {
    constructor() {
        this.head = new Node(0)
    }
    insert (word) {
        let letters = word.split('')
        let currNode = this.head
        for (let i = 0; i < letters.length; i++) {
            if (!currNode.children[letters[i]]) {
                currNode.children[letters[i]] = new Node(letters[i])
            }
            currNode = currNode.children[letters[i]]
        }
        currNode.terminus = true
    }

    getSuggestions (word) {
        // Traverse tree up to word end
        let letters = word.split('')
        let currNode = this.head
        for (let i = 0; i < letters.length; i++) {
            if (currNode.children[letters[i]]) {
                currNode = currNode.children[letters[i]]
            } else {
                return []
            }
        }

        let suggestions = []
        // Write a recursive closured helper function 
        let helper = function(curr, chars) {
            //console.log("Looping at: " + curr.val)
            //console.log(suggestions)
            if (curr.terminus) {
                console.log("terminus")
                console.log(chars)
                suggestions.push(chars)
            }
            let childChars = Object.keys(curr.children)
            childChars.sort()
            for (let i = 0; i < childChars.length; i++) {
                if (suggestions.length == 3) {
                    return
                }
                let nextChars = chars + curr.children[childChars[i]].val
                helper(curr.children[childChars[i]], nextChars)
            }
            return
        }
        helper(currNode, word)
        return suggestions
    }
}

var suggestedProducts = function(products, searchWord) {
    let myTrie = new Trie()
    for (let i = 0; i < products.length; i++) {
        myTrie.insert(products[i])
    }
    let letters = searchWord.split("")
    let word = ""
    let suggestions = []
    for (let i = 0; i < letters.length; i++) {
        word += letters[i]
        console.log(word)
        suggestions.push(myTrie.getSuggestions(word))
    }
    return suggestions
};

let myTrie = new Trie()
myTrie.insert("apple")
myTrie.insert("appliance")
myTrie.insert("apperture")
console.log(suggestedProducts(["mobile","mouse","moneypot","monitor","mousepad"], "mouse"))
