var cellsInRange = function(s) {
  let arr=s.split("");
  let c1=arr[0],c2=arr[3],r1=arr[1]-0,r2=arr[4]-0;
  let ans=[];
  while(c1<=c2){
      for(let i=r1;i<=r2;i++){
          ans.push(c1+i);
      }
      //由编码转为字符
      c1=String.fromCharCode(c1.charCodeAt()+1);
  }
  return ans;
};