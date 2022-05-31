var isAnagram = function(s, t) {
  if (s.length!==t.length)return false
  //另一种map，哈希表
  hashmap={}
  for (let i of s){
      hashmap[i]=hashmap[i]+1||1
  }
  for (let j of t){
      if (hashmap[j] && hashmap[j]>0){
          hashmap[j]-=1
      }
      else return false
  }
  return s===t?false:true
};

