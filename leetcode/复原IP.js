//未完成
//https://leetcode-cn.com/problems/0on3uN/
var restoreIpAddresses = function(s) {
  let len = s.length
  if( len > 12 || len < 4 || !/^\d+$/.test(s)){
      return []
  }
  let res = []
  function slice(s,str,n){
      if(s.length < n) return
      if(n === 1){
          if(check(s)){
              res.push(str + s)
          }
          return;
      }
      n--
      if(check(s.slice(0,1))){
          slice(s.slice(1),str + s.slice(0,1)+'.',n)
      }
      if(check(s.slice(0,2))){
          slice(s.slice(2),str + s.slice(0,2)+'.',n)
      }
      if(check(s.slice(0,3))){
          slice(s.slice(3),str + s.slice(0,3)+'.',n)
      }
  }

  function  check(s) {
      return !((+s[0] === 0 && s.length > 1) || +s > 255);
  }
  slice(s,'',4)
  return res
};
