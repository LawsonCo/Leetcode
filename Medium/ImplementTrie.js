/**
 * Implement a trie than can ingest strings
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
    startsWith (sub) {
        let letters = sub.split('')
        let currNode = this.head
        for (let i = 0; i < letters.length; i++) {
            if (currNode.children[letters[i]]) {
                currNode = currNode.children[letters[i]]
            } else {
                return false
            }
        }
        return true
    }
    search (word) {
        let letters = word.split('')
        let currNode = this.head
        for (let i = 0; i < letters.length; i++) {
            if (currNode.children[letters[i]]) {
                currNode = currNode.children[letters[i]]
            } else {
                return false
            }
        }
        console.log(currNode)
        return currNode.terminus
    }
}

let myTrie = new Trie()
//myTrie.insert("app")

//console.log(myTrie.head.children["t"].children["e"])
//myTrie.insert("app")
//console.log(myTrie.head.children["a"])
//console.log(myTrie.head.children["a"].children["p"])
//console.log(myTrie.head.children["a"].children["p"].children)

myTrie.insert("apple")
console.log(myTrie.search("app"))