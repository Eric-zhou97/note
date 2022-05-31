let n=3;
let arr=[10,2,5]
let count5=[];
let count2=[];
let ans=0n;//BigInt()
for(let i=0;i<n;i++){
  let temp=arr[i];
  let c5=0,c2=0;
  while(temp>0&& temp%2==0){
    temp=temp/2;
    c2++;
  }
  while(temp>0&& temp%5==0){
    temp=temp/5;
    c5++;
  }
  count2.push(c2);
  count5.push(c5);
}
let sum2=0,sum5=0;
for(let i=0;i<n;i++){
  sum2+=count2[i]*(i+1)*(n-i);
  sum5+=count5[i]*(i+1)*(n-i);
}
console.log(Math.min(sum2,sum5));




let n=3,m=3;
let arr=[5,8,25]
let route=[[1,2],[2,3],[1,3]];
let count5=[];
let count2=[];
for(let i=0;i<n;i++){
  let temp=arr[i];
  let c5=0,c2=0;
  while(temp>0&& temp%2==0){
    temp=temp/2;
    c2++;
  }
  while(temp>0&& temp%5==0){
    temp=temp/5;
    c5++;
  }
  count2.push(c2);
  count5.push(c5);
}
let sum=0;
for(let i=0;i<route.length;i++){
  //第三位存价值
  let temp=Math.min(count2[route[i][0]-1]+count2[route[i][1]-1],count5[route[i][0]-1]+count5[route[i][1]-1])
  route[i].push(temp);
  //统计价值总和
  sum=sum+temp;
}
//第三位存价值，按价值排序
route.sort((a,b)=>{
  return a[2]-b[2];
})
//下标作为值
var p = new Array(n).fill(0).map((element, index) => index);
// int方法
var find = (x) => {
    if (p[x] === x) {
        return x;
    }
    const newf = find(p[x]);
    p[x] = newf;
    return newf;
}
// boolean方法
var merge = (x, y) => {
    const fx = find(x);
    const fy = find(y);
    //归于0
    if(fx<fy){
      p[fy]=fx;
    }else if(fx>fy){
      p[fx] = fy;
    }else{
      return false;
    }
    return true;
}

let ans=0;
for(let r of route){
  if(merge(r[0]-1,r[1]-1)){
    ans=ans+r[2];
  }
}
console.log(sum-ans);


