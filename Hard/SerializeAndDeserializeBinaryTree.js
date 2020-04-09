// Take a binary tree
// Write a function to convert it into a string 
// Write a function to convert it back into a binary tree 

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var serialize = function(root) {
    if (root == null || root.val == null) {
        return "null"
    }
    let serializedTree = ""
    serializedTree+=root.val
    serializedTree+=","+serialize(root.left)
    serializedTree+=","+serialize(root.right)
    return serializedTree
};

function deserializeHelper(data, index) {
    //console.log("index: " + index)
    let commaIndex = data.indexOf(",", index)
    if (commaIndex == -1) {
        console.log("end of string")
        return [null, -1]
    }
    let val = data.slice(index, commaIndex)
    //console.log("Index: " + index + " val: " + val)
    //console.log(val)
    if (val == "null") {
        return [null, commaIndex+1]
    }
    let root = new TreeNode(parseInt(val))
    let leftData = deserializeHelper(data, commaIndex+1)
    if (leftData[1] == -1) {
        root.left = leftData[0]
        root.right = null
        return [root, -1]
    }
    let rightData = deserializeHelper(data, leftData[1])
    if (rightData[1] == -1) {
        root.left = leftData[0]
        root.right = rightData[0]
        return [root, -1]
    }
    root.left = leftData[0]
    root.right = rightData[0]
    return [root, rightData[1]]
};

var deserialize = function(data) {
    result = deserializeHelper(data, 0)
    return result[0]
};

let TreeNode_1 = new TreeNode(9)
let TreeNode_2 = new TreeNode(6)
let TreeNode_3 = new TreeNode(20)
let TreeNode_4 = new TreeNode(15)
let TreeNode_5 = new TreeNode(30)
let TreeNode_6 = new TreeNode(2)
let TreeNode_7 = new TreeNode(7)
TreeNode_1.right = TreeNode_2
TreeNode_1.left = TreeNode_3
TreeNode_2.left = TreeNode_4
TreeNode_2.right = TreeNode_5
TreeNode_3.left = TreeNode_6
TreeNode_3.right = TreeNode_7
// TreeNode_1.val = null
console.log(TreeNode_1)
let serialized = serialize(TreeNode_1)
console.log(serialized)

console.log(deserialize(serialized))

//9,20,2,null,null,7,null,null,6,15,null,null,30,null,null