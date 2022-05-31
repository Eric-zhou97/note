//状态压缩dp
let n=3,m=4;
let arr=[[1,2],[2,3],[3,4]];
let count=new Array(m+1);//创建数组并赋值为0
let max=2**n;//2的n次方
let ans=0;
for(let i=0;i<max;i++){
  count.fill(0);
  let temp=0;
  for(let j=0;j<n;j++){
    if((i&(1<<j))){    //结果不为0
      if(count[arr[j][0]]>0||count[arr[j][1]]>0){
        break;
      }else{
        count[arr[j][0]]++;
        count[arr[j][1]]++;
        temp++;
      }
    }
  }
  ans=Math.max(temp,ans);
}
console.log(ans);
