// Once the graph is made, slice it every 100 rows so that we don't exceed the call stack
// Put the slices into the graphObj object
const {graph, graphLength} = require('./makeGraph');

const graphObj = {};

// graph is the grid, num is the number of rows to slice by for each section in the graphObj
const graphSlice = (graph, num) => {
  let i = 0;
  while (i + num < graphLength) {
    graphObj[i] = graph.slice(i, i + num);
    i += num
  };
  // Do the last slice
  graphObj[i] = graph.slice(i);
};

// Run the function to slice the graph into graphObj
graphSlice(graph, 40);

module.exports = { graphObj };