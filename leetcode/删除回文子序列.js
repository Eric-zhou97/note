//只有'a'与'b'两类
//意味着最多两次就可以删除完成，全a一次，全b一次
var removePalindromeSub = function(s) {
  if(s.length==0){
      return 0;
  }
  if(s.split("").reverse().join("")==s){
      return 1;
  }
  return 2;
};