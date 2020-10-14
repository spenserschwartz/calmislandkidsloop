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

console.log('This is sum: ', sum);





// Slice the graph every 100 rows so we don't exceed the max call stack

