var simplifiedFractions = function(n) {
  //辗转相除法，求最大公约数
  var gcd = function(a, b) {
      if(b>0){
          return gcd(b,a%b);
      }
      //b为余数，为0则a为最大公约数
      return a;
  }
  ans = new Array()
  for(let i = 2; i <= n; i++) 
      for(let j = 1; j < i; j++)
          //最大公约数为1即为最简
          if(gcd(i, j) == 1)
              ans.push(j + "/" + i) 
  return ans
};