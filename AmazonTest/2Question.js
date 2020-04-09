/**
 * Amazon Exam Q2
 * 
 * 
 */

function criticalRouters(numRouters, numLinks, links)
{
    // Construct Adjacency Map. Since the graph is bidirectional 
    // Also count the number of incoming nodes each node has 
    let adj = {}
    let numIncoming = {}
    for (let i = 0; i < links.length; i++) {
        if (!adj[links[i][0]]) {
            adj[links[i][0]] = [links[i][1]]
            numIncoming[links[i][0]] = 1
        } else {
            adj[links[i][0]].push(links[i][1])
            numIncoming[links[i][0]] = numIncoming[links[i][0]]+1
        }
        if (!adj[links[i][1]]) {
            adj[links[i][1]] = [links[i][0]]
            numIncoming[links[i][1]] = 1 
        } else {
            adj[links[i][1]].push(links[i][0])
            numIncoming[links[i][1]] = numIncoming[links[i][1]]+1
        }
    }
    console.log(adj)
    console.log(numIncoming)
    let critical = []
    let keys = Object.keys(numIncoming)
    for (let i = 0; i < keys.length; i++) {
        if (numIncoming[keys[i]] == 1) {
            critical.push(adj[keys[i]][0])
        }
    }
    return critical 
    console.log(critical)
}

// console.log(criticalRouters(5, 6, [[1,2], [2, 3], [3, 4], [4, 5], [6, 3]]))
console.log(criticalRouters(10, 13, [[1,2], [1,3], [2, 3], [3, 4], [4, 5], [4, 6], [5, 6], [5,7], [6,7], [7,8], [8,9], [8,10], [9,10]]))