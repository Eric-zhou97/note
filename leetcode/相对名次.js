//map记录index，再以map为下标
const SSP = ["Gold Medal","Silver Medal","Bronze Medal"]
var findRelativeRanks = function(score) {
    const map = new Map(), ans = new Array(score.length);
    for(let i=0;i<score.length;i++)
        map.set(score[i], i)
    score = score.sort((a,b)=>b-a)
    for(let i=0;i<score.length;i++)
        ans[map.get(score[i])] = i <= 2 ? SSP[i] : (i + 1) + ""
    return ans
};
