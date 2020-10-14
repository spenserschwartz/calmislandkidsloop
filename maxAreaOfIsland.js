// Function to determine the max island size of the grid passed as an argument
const {graphObj} = require('./sliceGraph');

// const maxAreaOfIsland = (grid) => {
//   const res = { count: 0 }
//   for (let r = 0; r < grid.length; r++) {
//       for (let c = 0; c < grid[0].length; c++) {
//           dfs(grid, r, c, res)
//       }
//   }
//   return res.count
// };

// // DFS method helper function for maxAreaOfIsland
// const dfs = (grid, r, c, res, area = { count: 0 }) => {
//   if (!grid[r] || !grid[r][c]) return
//   res.count = Math.max(res.count, area.count += grid[r][c])
//   grid[r][c] = 0
//   dfs(grid, r, c - 1, res, area)
//   dfs(grid, r, c + 1, res, area)
//   dfs(grid, r - 1, c, res, area)
//   dfs(grid, r + 1, c, res, area)
// };


var maxAreaOfIsland = function(grid) {
  let res = 0;
  const m = grid.length;
  if(m === 0) return 0;
  const n = grid[0].length;
  
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(grid[i][j] === 1) {
        const count = { value: 0};
        dfs(i, j, m, n, grid, count);
        res = Math.max(res, count.value);
      }
    }
  }
  
  return res;
};

function dfs(i, j, m, n, grid, count) {
  if(i < 0 || i >=m || j < 0 || j >= n || grid[i][j] === 0) return;
  grid[i][j] = 0;
  count.value++;
  
  dfs(i, j + 1, m, n, grid, count);
  dfs(i, j - 1, m, n, grid, count);
  dfs(i + 1, j, m, n, grid, count);
  dfs(i - 1, j, m, n, grid, count);
}









// var maxAreaOfIsland = function(grid) {
//   var maxArea = 0;
//   for (var i = 0; i < grid.length; i++){
//     for (var j = 0; j < grid[0].length; j++){
//       if (grid[i][j] != 0){
//         maxArea = Math.max(maxArea, area(grid, i, j));
//       }
//     }
//   }
    
//     return maxArea;
// };

// function area(grid, i, j){
//   if (i >= 0 && i < grid.length && j >= 0 && j < grid[0].length && grid[i][j] != 0){
//     grid[i][j] = 0;
//     return 1 + area(grid,i+1,j) + area(grid,i-1,j) + area(grid,i,j+1) + area(grid,i,j-1);
//   }
//   return 0;
// }


module.exports = { maxAreaOfIsland };