
// Solve with Topological Sort
// Find a valid course schedule ordering
var canFinish = function(numCourses, prerequisites) {
    let numCoursesTaken = 0
    let courses_taken = {}
    let adjacencyMap = {}
    let dependenciesMap = {}
    // Initialize adjacency map - links all courses to courses that are dependent on them 
    // Initialize dependencies map - keeps track of how many incoming edges each node has
    // Initialize courses taken - keeps track of which courses have been taken
    for (let k = 0; k < prerequisites.length; k++) {
        adjacencyMap[prerequisites[k][0]] = []
        adjacencyMap[prerequisites[k][1]] = []
        dependenciesMap[prerequisites[k][0]] = 0
        dependenciesMap[prerequisites[k][1]] = 0
    }
    let numHiddenCourses = numCourses - Object.keys(adjacencyMap).length
    numCourses = numCourses - numHiddenCourses
    if (numCourses == 0) {
        return true
    }
    // Construct adjacency map and dependencies map
    for (let i = 0; i < prerequisites.length; i++) {
        adjacencyMap[prerequisites[i][0]].push(prerequisites[i][1])
        dependenciesMap[prerequisites[i][1]]++
    }
    let q = []
    // Find all nodes without dependencies to initialize search Q
    for (let j = 0; j < Object.keys(dependenciesMap).length; j++) { 
        if (dependenciesMap[Object.keys(dependenciesMap)[j]] == 0) {
            q.push(Object.keys(dependenciesMap)[j])
        }
    }
    // Search from nodes without dependencies and search all possible dependents - BFS
    // (O(classes + dependencies))
    while (q.length > 0) {
        if (numCoursesTaken >= numCourses) {
            return true
        }
        let curr = q.shift() 
        courses_taken[curr] = true
        numCoursesTaken++
        for (let i = 0; i < adjacencyMap[curr].length; i++) {
            if (!courses_taken[adjacencyMap[curr][i]]) {
                dependenciesMap[adjacencyMap[curr][i]]--
                if (dependenciesMap[adjacencyMap[curr][i]] <= 0) {
                    q.push(adjacencyMap[curr][i])
                }
            }
        }
    }
    if (numCoursesTaken >= numCourses) {
        return true
    }
    return false
};

console.log(canFinish(4, [[3,0],[0,1]]))