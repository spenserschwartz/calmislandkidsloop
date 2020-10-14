const {sumOfDigits} = require('./sumOfDigits'); // Function to sum the digits of a number


// The furthest away from (0,0) that we can go is 698 >>> 6 + 9 + 8 = 23
// 699 >>> 6 + 9 + 9 = 24 is too large 


const graph = [];

// Function to make a graph. The num argument is how far away we can get from the center (698) and noLargerThan is the sum that the digits can be (23)
const makeGraph = (num, noLargerThan) => {
  for (let i = -num; i <= num; i += 1) {
    let row = [];
    for (let j = -num; j <= num; j += 1) {
       if (sumOfDigits(i) + sumOfDigits(j) > noLargerThan) row.push(0);
       else row.push(1);
    }
    graph.push(row);
  }
}

makeGraph(698, 23);

const graphLength = graph.length; // Graph length is 1397 (698 on each side (x2) + 1 for the 0 scale line)
console.log('This is graphLength: ', graphLength);

let count = 0;
for (let i = 0; i < graphLength; i += 1) {
  for (let j = 0; j < graphLength; j += 1) {
    if (graph[i][j] === 1) count += 1;
  }
}

console.log('This is count: ', count);

module.exports = {graph, graphLength};