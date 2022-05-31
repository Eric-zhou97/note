/**
 * @param {number[][]} mat
 * @param {number} target
 * @return {number}
 */
var minimizeTheDifference = function(mat, target) {
	mat = mat.map(item => {
		item.sort((a,b) => a - b);
        //集合去重
		item = [...new Set(item)];
		return item;
	});
	mat.sort((a,b) => a[0] - b[0]);

    let map = {};
    function dfs(index, total) {
        if (index == -1) return Math.abs(total);
        if (map[index] !== undefined && map[index][total] !== undefined) return map[index][total];

        if (total <= 0) {
        	let ret = dfs(index - 1, total - mat[index][0]);
	        map[index] = map[index] || {};
	        map[index][total] = ret;
	        return ret;
        } else {
	    	let ret = Infinity;
	        for (let i = 0; i < mat[index].length; i++) {
	            // total -= mat[index][i];
	            ret = Math.min(ret, dfs(index - 1, total-mat[index][i]));
	            // total += mat[index][i];
	        }
	        map[index] = map[index] || {};
	        map[index][total] = ret;
	        return ret;
        }

    }
    return dfs(mat.length - 1, target);
};