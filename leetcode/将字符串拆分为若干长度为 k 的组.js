var divideString = function(s, k, fill) {
  let ans=[];
  let len=s.length;
  s=s+fill.repeat(k);
  for(let i=0;i<len;i=i+k){
      ans.push(s.substring(i,i+k));
  }
  return ans;
};