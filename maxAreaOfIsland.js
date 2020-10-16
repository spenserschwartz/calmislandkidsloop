// Function to determine the max island size of the grid passed as an argument

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


module.exports = { maxAreaOfIsland };