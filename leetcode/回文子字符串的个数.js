var countSubstrings = function(s) {
  let res = 0
  let len = s.length
  for(let i = 0;i <len;i++){
      res++
      //奇数回文
      let left = i-1
      let right = i+1
      while(left >=0 && right <len){
          if(s[left] !== s[right]) break
          res++
          left--
          right++
      }
      //偶数回文
      left = i-1
      right = i
      while(left >=0 && right <len){
          if(s[left] !== s[right]) break
          res++
          left--
          right++
      }
  }
  return res
}