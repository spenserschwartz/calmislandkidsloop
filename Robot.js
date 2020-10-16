const {sumOfDigits} = require('./sumOfDigits');
const {graph, graphLength} = require('./makeGraph'); // Import graph that has already been populated
const {maxAreaOfIsland} = require('./maxAreaOfIsland');
const {graphObj} = require('./sliceGraph');   // Import sliced graph object to be used by the maxAreaOfIsland function


// Robot moves on grid with (x,y) coordinates - up, down, left, right, no diagonal
// Robot starts at (0,0) 
// Individual numbers of coordinates must add up to <= 23
// How large is the area the robot can access? 
let sum = 0;




for (let key in graphObj) {
  let slice = maxAreaOfIsland(graphObj[key]);
  console.log(`Key ${key}: `, slice);
  sum += slice;
}

// In an ideal situation, once you make the graph, you can just run maxAreaOfIsland for the answer. 
// However, because of the size of this island (graph), this exceeds the call stack & causes error.
// The best solution after that is to run the function on slices of the graph that can be handled.
// The call stack is able to handle slices of 40 rows at a time
// At slicing of 40 rows, the sum would be 437,013.

console.log('This is sum: ', sum);
