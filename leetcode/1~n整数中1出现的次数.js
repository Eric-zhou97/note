var countDigitOne = function(n) {
  // mulk 表示 10^k
  // 在下面的代码中，可以发现 k 并没有被直接使用到（都是使用 10^k）
  // 但为了让代码看起来更加直观，这里保留了 k
  let mulk = 1;
  let ans = 0;
  for (let k = 0; n >= mulk; ++k) {
      ans += (Math.floor(n / (mulk * 10))) * mulk + Math.min(Math.max(n % (mulk * 10) - mulk + 1, 0), mulk);
      mulk *= 10;
  }
  return ans;
};

var countDigitOne = function(n) {
  if(n <= 0) return 0;
  let digit = 1;
  let left = Math.floor(n / 10);
  let curr = n % 10;
  let right = 0;
  let res = 0;
  while(curr !== 0 || left !== 0){
      if(curr === 1) res += left * digit + right + 1;
      else if(curr > 1) res += (left + 1) * digit;
      else res += left * digit;
      right += curr * digit; 
      curr = left % 10;
      left = Math.floor(left / 10);
      digit *= 10;
  }
  return res;
};