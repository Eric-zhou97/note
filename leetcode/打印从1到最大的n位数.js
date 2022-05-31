var printNumbers = function(n) {
  let max=10**n;
  let res=[];
  for(let i=1;i<max;i++){
      res.push(i);
  }
  return res;
};

//数组赋值
//数组通过map赋值
var printNumbers = function(n) {
  let max=''
  while (n--) max += '9'
  return new Array(max - '0').fill(0).map((v, i) => i + 1)
};