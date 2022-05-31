//二进制加法
//字符串
var addBinary = function(a, b) {
  let res='';
  let l1=a.length-1;
  let l2=b.length-1;
  let carry=0;
  while(l1>=0||l2>=0){
      let x=l1>=0?a[l1]-'0':0;
      let y=l2>=0?b[l2]-'0':0;
      let sum=x+y+carry;
      res+=(sum%2);
      carry=Math.floor(sum/2);
      l1--;
      l2--;
  }
  if(carry) res+=carry;
  return res.split('').reverse().join('');
};