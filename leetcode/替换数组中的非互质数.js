//每个新加入的直接往左走，但其实时间复杂度大概率更高
//函数抽象比较方便
var replaceNonCoprimes = function(nums) {
  let stack = [];
  for (let num of nums) {
      push(num)
  }
  return stack
  function push(num) {
      while (stack.length && gcd(num, top()) !== 1) {
          num = lcm(num, stack.pop())
      }
      stack.push(num)
  }
  function top() {
      return stack[stack.length - 1]
  }
  function lcm(a, b) {
      return Number(BigInt(a) * BigInt(b) / BigInt(gcd(a, b)))
  }
  function gcd(a, b) {
      if (b === 0) return a
      if (a < b) return gcd(b, a)
      // a >= b
      return gcd(b, a % b)
  }
};
//另解
var replaceNonCoprimes = function(nums) {
  var gcd = function(a, b) {
    if(b>0){
        return gcd(b,a%b);
    }
    //b为余数，为0则a为最大公约数
    return a;
  }
  let ans=[1];
  let point=0;
  while(point<nums.length){
      let g=gcd(ans[ans.length-1],nums[point]);
      if(g>1){
          ans[ans.length-1]=ans[ans.length-1]*nums[point]/g;
      }else{
          while(ans.length>=2){
              let c=gcd(ans[ans.length-1],ans[ans.length-2]);
              if(c>1){
                  ans[ans.length-2]=ans[ans.length-2]*ans[ans.length-1]/c;
                  ans.pop();
              }else{
                  break;
              }
          }
          ans.push(nums[point]);
      }
      point++;
  }
  while(ans.length>=2){
      let c=gcd(ans[ans.length-1],ans[ans.length-2]);
          if(c>1){
                  ans[ans.length-2]=ans[ans.length-2]*ans[ans.length-1]/c;
                  ans.pop();
              }else{
                  break;
              }
          }
  ans.shift();
  return ans;
};