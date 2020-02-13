/**
 * Course Schedule
 * 
 * Given a number n, and an array of course prerequisite pairs 
 * Pairs are in the form [x, y] - where x is a prereq for y
 * 
 * Input looks like => 2, [1, 0]
 * Return True in above case (take 1, then 0)
 * 
 * Ex 2. [[1,0], [0,1]], 2 
 * Return False - Can't take anything due to dependency loop
 * 
 * UNDERSTOOD THE QUESTION WRONG. IT WAS: IS IS POSSIBLE TO FINISH ALL COURSES GIVEN A NUMBER OF COURSES. 
 * THAT MEANS THERE MAY BE SOME UNSEEN COURSES
 * 
 * Another problem: classes can have multiple dependencies. Fuck
 */

class Class {
    constructor(name) {
        this.name = name
        this.dependents = []
    }
}

// Problem with this solution: Does not consider multiple dependency cases
// FAILED TO SOLVE. Look up the answer sometime 0 watch a youtube video 
var canFinish = function(numCourses, prerequisites) {
    let courses_taken = {}
    let adjacencyMap = {}
    let set_of_course_without_dependencies = {}
    // Initialize a set of courses without dependencies (all as true for now)
    // Initialize our adjacency map (no dependents yet)
    // O(n)
    for (let k = 0; k < prerequisites.length; k++) {
        set_of_course_without_dependencies[prerequisites[k][0]] = true
        set_of_course_without_dependencies[prerequisites[k][1]] = true
        adjacencyMap[prerequisites[k][0]] = new Class(prerequisites[k][0])
        adjacencyMap[prerequisites[k][1]] = new Class(prerequisites[k][0])
    }
    let numHiddenCourses = numCourses - Object.keys(adjacencyMap).length
    numCourses = numCourses - numHiddenCourses
    if (numCourses == 0) {
        return true
    }
    console.log(adjacencyMap)
    console.log(numCourses)
    // Add dependents to our adjacency map
    // O(n)
    for (let i = 0; i < prerequisites.length; i++) {
        set_of_course_without_dependencies[prerequisites[i][1]] = false
        adjacencyMap[prerequisites[i][0]].dependents.push(prerequisites[i][1])
    }
    let q = []
    // Find all nodes without dependencies to initialize search
    // O(n)
    for (let j = 0; j < Object.keys(set_of_course_without_dependencies).length; j++) { 
        if (set_of_course_without_dependencies[Object.keys(set_of_course_without_dependencies)[j]]) {
            q.push(Object.keys(set_of_course_without_dependencies)[j])
        }
    }
    // Search from nodes without dependencies and search all possible dependents
    // (O(classes + dependencies))
    while (q.length > 0) {
        if (Object.keys(courses_taken).length >= numCourses) {
            return true
        }
        let curr = q.shift() 
        courses_taken[curr] = true
        for (let i = 0; i < adjacencyMap[curr].dependents.length; i++) {
            if (courses_taken[adjacencyMap[curr].dependents[i]]) {
                console.log("Cycle detected!")
                console.log(adjacencyMap[curr].dependents[i])
                return false // This is a cycle
            }
            q.push(adjacencyMap[curr].dependents[i])
        }
    }
    if (Object.keys(courses_taken).length >= numCourses) {
        return true
    }
    return false
};
