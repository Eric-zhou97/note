var merge = function(intervals) {
    const res = [];
    intervals.sort((a,b)=>{
        return a[0]-b[0];
    })

    let left = intervals[0][0];
    let right = intervals[0][1]
    for(let i = 1;i<intervals.length;i++){
        if(intervals[i][0]>right){ //断开重新计算
            res.push([left,right]);
            left = intervals[i][0];
            right = intervals[i][1];
        }else{  //起点在数组里面
            if(intervals[i][1]>right){
                right = intervals[i][1];
            }
        }
    }
    res.push([left,right]);
    return res
};