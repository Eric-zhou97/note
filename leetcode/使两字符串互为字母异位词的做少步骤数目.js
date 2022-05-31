var minSteps = function(s, t) {
  let counts=new Array(26).fill(0);
  let countt=new Array(26).fill(0);
  let as=s.split("");
  let at=t.split("");
  //s.charCodeAt(i)
  for(let c of as){
      counts[c.charCodeAt()-97]++;
  }
  for(let c of at){
      countt[c.charCodeAt()-97]++;
  }
  let ans=0;
  for(let i=0;i<26;i++){
      ans=ans+Math.abs(counts[i]-countt[i]);
  }
  return ans;
};