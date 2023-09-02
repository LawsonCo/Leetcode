var adjacency_list = {
    "A": ["B", "C", "D"],
    "B": ["C", "F"],
    "C": [],
    "D": ["E"],
    "E": ["A", "F"],
    "F": ["A", "C", "D", "E"]
}

var bfs_dfs_big_diff_list = {
    "A": ["B", "D"],
    "B": [],
    "C": ["B"],
    "D": ["C"]
}

class Node {
    constructor(val, tail) {
        this.val = val
        this.tail = tail
    }
    getVal() {
        return this.val
    }
    getTail() {
        return this.tail
    }
    pushTail(val) {
        this.tail.push(val)
    }
}

function bfsSearch (adjacency_list, start_node, end_node) {
    let seen_nodes = {}
    let queue = [new Node(start_node, [])]

    while (queue.length > 0) {
        node = queue.shift()
        if (seen_nodes[node.getVal()]) {
            continue
        }
        console.log("Searching: " + node.getVal())
        if (node.getVal() == end_node) {
            return node.getTail().concat([node.getVal()])
        }

        seen_nodes[node.getVal()] = true


        for (i = 0; i < adjacency_list[node.getVal()].length; i++) {
            if (seen_nodes[adjacency_list[node.getVal()][i]] != true) {
                queue.push(new Node(adjacency_list[node.getVal()][i], node.getTail().concat([node.getVal()])))
            }
        }
    }
    return false
}

console.log(bfsSearch(adjacency_list, "A", "E"))
// [A, D, E]
console.log(bfsSearch(bfs_dfs_big_diff_list, "A", "B"))
// [A, B]