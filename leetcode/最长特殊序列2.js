//最长特殊序列2，脑经急转弯
var findLUSlength = function(strs) {
    const n = strs.length;
    let ans = -1;
    for (let i = 0; i < n; ++i) {
        let check = true;
        for (let j = 0; j < n; ++j) {
            if (i !== j && isSubseq(strs[i], strs[j])) {
                check = false;
                break;
            }
        }
        if (check) {
            ans = Math.max(ans, strs[i].length);
        }
    }
    return ans;
};
//对于给定的某个字符串 str[i]，如果它的一个子序列 sub 是「特殊序列」，那么 str[i] 本身也是一个「特殊序列」。
//即只要判断 str[i] 是否为其它字符串的子序列
const isSubseq = (s, t) => {
    let ptS = 0, ptT = 0;
    while (ptS < s.length && ptT < t.length) {
        if (s[ptS] === t[ptT]) {
            ++ptS;
        }
        ++ptT;
    }
    return ptS === s.length;
}
