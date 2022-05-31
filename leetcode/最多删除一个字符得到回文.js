var validPalindrome = function(s) {
  if(!s.length){
      return false;
  }
  let l=0,r=s.length-1;
  let flag=0;
  while(l<r){
      if(s[l]!=s[r]){
          let templ=l,tempr=r;
          l=l+1
          while(l<r){
              if(s[l]!=s[r]){
                  flag=1;
                  break;
              }
              l++;
              r--;
          } 
          if(flag==0){
              return true;
          }else{
              flag=0;
          }
          l=templ,r=tempr;
          r=r-1
          while(l<r){
              if(s[l]!=s[r]){
                  flag=1;
                  break;
              }
              l++;
              r--;
          } 
          if(flag==0){
              return true;
          }else{
              return false;
          }
      }
      l++;
      r--;
  }
  return true;
};


var validPalindrome = function(s) {
  let len = s.length
  let left = 0
  let right = len-1
  while(left<right&&s[left]===s[right]){
          left++
          right--
  }
  if(left === right){
      return true
  }
  if(test(left+1,right)){
      return true
  }
  if(test(left,right-1)){
      return true
  }
  function test(st,sd){
      while(st<sd){
          if(s[st]!==s[sd]) return false
          st++
          sd--
      }
      return true
  }
  return false
};