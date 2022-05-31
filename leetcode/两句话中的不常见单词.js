var uncommonFromSentences = function(s1, s2) {
  let map=new Map();
  let s=s1+" "+s2;
  let arr=s.split(" ");
  let ans=[];
  for(let str of arr){
      map.set(str,(map.get(str)||0)+1);
  }
  for(let str of arr){
      if(map.get(str)==1){
          ans.push(str);
      }
  }
  return ans;
};