//滑动窗口，两种情况满足任意一种即继续滑动，很巧妙，类似race()的含义
var maxConsecutiveAnswers = function(answerKey, k) {
  const n = answerKey.length
  let sumt = 0,sumf = 0
  let ans = 0, l = 0
  for (let i = 0;i<n;i++){
      if (answerKey[i] === 'T') {sumt++}
      else (sumf++)
      while (sumt > k && sumf > k){
          if (answerKey[l] === 'T'){
              sumt--
          }
          else{
              sumf--
          }
          l++
      }
      ans = Math.max(ans,i-l+1)

  }
  return ans
};



//另解，两种情况讨论
var maxConsecutiveAnswers = function(answerKey, k) {
  return Math.max(maxConsecutiveChar(answerKey, k, 'T'), maxConsecutiveChar(answerKey, k, 'F'));
}
const maxConsecutiveChar = (answerKey, k, ch) => {
  const n = answerKey.length;
  let ans = 0;
  for (let left = 0, right = 0, sum = 0; right < n; right++) {
      sum += answerKey.charAt(right) !== ch ? 1 : 0;
      while (sum > k) {
          sum -= answerKey[left++] !== ch ? 1 : 0;
      }
      ans = Math.max(ans, right - left + 1);
  }
  return ans;
};
