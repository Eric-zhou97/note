//最长的斐波那契子序列的长度
//以值作为key
var lenLongestFibSubseq = function(arr) {
  let n = arr.length, ans = 0;
  let cnt = new Map(), dp = new Map();
  for (let i = 0; i < n; i++) cnt.set(arr[i], i);
  for (let i = 2; i < n; i++) {
      for (let j = 1; j < i; j++) {
          let x = arr[i] - arr[j];
          if (x < arr[j] && cnt.has(x)) {
              if (dp.has(cnt.get(x) * n + j))
                  //由两个数确定了第三个数，a*n+b表示倒数第二个数是a,倒数第一个数是b的
                  dp.set(j * n + i, dp.get(cnt.get(x) * n + j) + 1); 
              else dp.set(j * n + i, 1);
              ans = Math.max(ans, dp.get(j * n + i));
          }
      }
  }
  return ans >= 1 ? ans + 2 : 0;
};