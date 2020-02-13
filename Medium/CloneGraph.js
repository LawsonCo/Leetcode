/**
 * Clone Graph 
 * 
 * Given a node object representation of a graph 
 * Clone the graph by reconstructing each of the nodes
 * 
 * NOTE: 
 * All values will always correspond to that index
 * The root of the graph will always be value 1, index 0
 * 
 * Example (in adjacency list rep): 
 * Input: [[2,4],[1,3],[2,4],[1,3]], Output: [[2,4],[1,3],[2,4],[1,3]] 
 * They should be the same but with diff addresses
 */

function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};

let my_leaf = new Node(5)
let my_leaf_2 = new Node(6)
let my_node = new Node(2, [my_leaf, my_leaf_2])
let my_graph = new Node(1, [my_node])
// Check cycle case - this is important to do
my_leaf_2.neighbors = [my_graph]
//console.log(my_graph)
//console.log(my_graph.neighbors[0])

// Use BFS to visit every node in the graph
// Initialize an adjacency list at the beginning and maintain a pointer to the root of the graph
// Whenever we pop a node off of the stack, look it up in the adjacency matrix or construct it if it doesn't exist
// Add all its children by reference by looking them up or creating them if they're not there.
var cloneGraph = function(node) {
    if (node == null) {
        return null
    }
    let root_node = new Node(node.val)
    let adjacencyList = {}
    adjacencyList[node.val] = root_node
    let seen_nodes = {}
    let q = [node]
    while (q.length > 0) {
        curr = q.shift()
        seen_nodes[curr.val] = true
        // Everytime a node is found, check if it exists in the adjacency list 
        // If it doesn't, create it!
        if (adjacencyList[curr.val] == undefined) {
            adjacencyList[curr.val] = new Node(curr.val)
        }
        let neighbors = []
        for (let i = 0; i < curr.neighbors.length; i++) {
            // We want to construct the array of the current node's children. 
            // We must do this by pointer, so look each of them up, and construct them 
            // if they don't exist.
            if (adjacencyList[curr.neighbors[i].val] == undefined) {
                adjacencyList[curr.neighbors[i].val] = new Node(curr.neighbors[i].val)
            }
            neighbors.push(adjacencyList[curr.neighbors[i].val])
            if (!seen_nodes[curr.neighbors[i].val]) {
                q.push(curr.neighbors[i])
            }
        }
        // Once we've created the list of each node's neighbors, add them to the current node
        adjacencyList[curr.val].neighbors = neighbors
    }
    return root_node
};

let cloned_graph = cloneGraph(my_graph)
console.log(cloned_graph)
console.log(cloned_graph.neighbors[0])
console.log(cloned_graph.neighbors[0].neighbors[1])
