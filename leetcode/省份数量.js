//未完成
//https://leetcode-cn.com/problems/bLyHh0/
let father = [];
// 查询
function findFather(i){
    if(i !== father[i]){
        father[i] = findFather(father[i]); // 路径压缩
    }
    return father[i];
}

// 合并
function union(i, j){
    const fi = findFather(i);
    const fj = findFather(j);
    if(fi !== fj){
        father[fj] = fi;
    }
}

function findCircleNum(isConnected) {
    const n = isConnected.length;
    father = new Array(n);
    for(let i = 0; i < n; i++){
        father[i] = i;
    }
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if(isConnected[i][j] === 1){
                union(i, j);
            }
        }
    }
    let cnt = 0;
    for(let i = 0; i < n; i++){
        if(father[i] === i){
            cnt++;
        }
    }
    return cnt;
}
