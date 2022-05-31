var minimizedMaximum = function(n, quantities) {
    quantities = quantities.sort((a,b) => b - a);
    let l = 1;
    let r = quantities[0];
    //二分锁定
    while (l < r) {
        let mid = (l + r) >> 1;
        if (checker(mid)) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    //全取最大值是否满足，可以少的组
    function checker(num) {
        let tmp = 0;
        for (let i = 0; i < quantities.length; i++) {
            tmp += Math.ceil(quantities[i] / num)
        }
        return tmp <= n;
    }
    return l;
};