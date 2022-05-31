//位运算
var findRepeatedDnaSequences = function(s) {
    const L = 10;
    const bin = new Map();
    bin.set('A', 0);
    bin.set('C', 1);
    bin.set('G', 2);
    bin.set('T', 3);
    
    const ans = [];
    const n = s.length;
    if (n <= L) {
        return ans;
    }
    let x = 0;
    for (let i = 0; i < L - 1; ++i) {
        x = (x << 2) | bin.get(s[i]);
    }
    const cnt = new Map();
    for (let i = 0; i <= n - L; ++i) {
        //只要低阶20位
        x = ((x << 2) | bin.get(s[i + L - 1])) & ((1 << (L * 2)) - 1);
        cnt.set(x, (cnt.get(x) || 0) + 1);
        if (cnt.get(x) === 2) {
            ans.push(s.slice(i, i + L));
        }
    }
    return ans;
};
