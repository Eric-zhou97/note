var findAnagrams = function(s, p) {
  const n = p.length, m = s.length;
  if (n > m) return [];
  const ct = new Array(26).fill(0);
  const ca = 'a'.charCodeAt();
  // 统计第一个窗口缺失的字符数，使用非正数保存，此时 sum(ct) = -n
  for (const ch of p) {
    ct[ch.charCodeAt() - ca]--;
  }
  let ans=[];
  // 双指针找出长度为 n 的区间，此时 sum(ct) = 0，由于 ct 的元素均非正，则此时它们必定全为 0
  // r 指针的每一个有效字符都贡献 1，n 个字符刚好贡献 n，使得 sum(ct) = 0
  for (let l = 0, r = 0; r < m; r++) {
    const x = s[r].charCodeAt() - ca;
    ct[x]++;
    // 保证 ct 的元素都非正
    while (ct[x] > 0) {
      ct[s[l].charCodeAt() - ca]--; // 会一直移动 l 指针到 x 的位置
      l++;
    }
    if (r - l + 1 === n){
         ans.push(l);
    }
  }
  return ans;
}