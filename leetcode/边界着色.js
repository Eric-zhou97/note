//回溯
const DIRS = [[-1, 0], [0, 1], [0, -1], [1, 0]]
var colorBorder = function(grid, row, col, color) {
    const m = grid.length, n = grid[0].length, explored = new Set()
    dfs = function(r, c) {
        if(r < 0 || c < 0 || r == m || c == n)
            return true
        const p = r * n + c
        if(explored.has(p))
            return false
        if(grid[r][c] != grid[row][col])
            return true
        explored.add(p)
        let cur = false
        for(const dir of DIRS)
            if(dfs(r+dir[0],c+dir[1]))
                cur = true
        if(cur)
            grid[r][c] = color
        return false
    }

    dfs(row, col)
    return grid
};