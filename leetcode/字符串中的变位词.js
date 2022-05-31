//滑动窗口+map
var checkInclusion = function(s1, s2) {
  let len=s1.length;
  let map=new Map();
  for(let i=0;i<len;i++){
      if(map.has(s1[i])){
          map.set(s1[i],map.get(s1[i])+1);
      }else{
          map.set(s1[i],1);            
      }
  }
  let count=0;
  let l=0;
  for(let i=0;i<s2.length;i++){
      if(!map.has(s2[i])){
          while(l<i&&count!=0){
              map.set(s2[l],map.get(s2[l])+1);
              l++;
              count--;
          }
          count=0;
      }else if(map.get(s2[i])>0){
          if(count==0){
              l=i;
          }
          count++;
          map.set(s2[i],map.get(s2[i])-1);
      }else{
          while(map.get(s2[i])==0){
              map.set(s2[l],map.get(s2[l])+1);
              l++;
              count--;
          }
          count++;
          map.set(s2[i],map.get(s2[i])-1);
      }
      if(count==len){
          return true;
      }
  }
  return false;
};



//字符串中仅有小写字母时
var checkInclusion = function(s1, s2) {
  const n = s1.length, m = s2.length;
  if (n > m) return false;
  const ct = new Array(26).fill(0);
  const ca = 'a'.charCodeAt();
  // 统计第一个窗口缺失的字符数，使用非正数保存，此时 sum(ct) = -n
  for (const ch of s1) {
    ct[ch.charCodeAt() - ca]--;
  }
  // 双指针找出长度为 n 的区间，此时 sum(ct) = 0，由于 ct 的元素均非正，则此时它们必定全为 0
  // r 指针的每一个有效字符都贡献 1，n 个字符刚好贡献 n，使得 sum(ct) = 0
  for (let l = 0, r = 0; r < m; r++) {
    const x = s2[r].charCodeAt() - ca;
    ct[x]++;
    // 保证 ct 的元素都非正
    while (ct[x] > 0) {
      ct[s2[l].charCodeAt() - ca]--; // 会一直移动 l 指针到 x 的位置
      l++;
    }
    if (r - l + 1 === n) return true;
  }
  return false;
}