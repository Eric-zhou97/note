//数学题

var grayCode = function(n) {
  const ret = [];
  for (let i = 0; i < 1 << n; i++) {
      ret.push((i >> 1) ^ i);
  }
  return ret;
};


var grayCode = function(n) {
  let ans=[0];
  let pre=1;

  for(let i=0;i<n;i++){
      //此处是逆序
      for(let j=ans.length-1;j>=0;j--){
          ans.push(pre+ans[j]);
      }

      pre<<=1;
  }

  return ans;
};