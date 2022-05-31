//迭代法思路：当序列长度为 1 时，一定会留下唯一的那个元素，它的编号为 0，因此lastRemaining(1, m)=0。
//由 lastRemaining(n, m) = (m + lastRemaining(n-1, m)) % n 可得迭代解法
var lastRemaining = function(n, m) {
  let result = 0;
  for(let i = 2; i <= n; i++) {
      result = (m + result) % i;
  }
  return result
};