var findBottomLeftValue = function(root) {
    let curVal = 1, curHeight = 0;
    const dfs = (root, height) => {
        if (!root) {
            return;
        }
        height++;
        //高度
        dfs(root.left, height);
        dfs(root.right, height);
        if (height > curHeight) {
            curHeight = height;
            curVal = root.val;
        }
    }
    dfs(root, 0);
    return curVal;
};
