//字符串排序 
var groupAnagrams = function(strs) {
  let map=new Map();
  for(let s of strs){
      let arr=Array.from(s);
      arr.sort();
      let sorteds=arr.join("");
      //将排序后的字符串作为map的key
      if(map.has(sorteds)){
          map.get(sorteds).push(s);
      }else{
          map.set(sorteds,[s]);
      }
  }
  let ans=[];
  for(let a of map.values()){
      ans.push(a);
  }
  return ans;
};