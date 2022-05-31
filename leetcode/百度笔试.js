// 第三题放弃
let N=4,A=[3,4,1,2],B=[3,2,4,1];
let target=0;//目标差异值
for(let i=1;i<=N;i++){
  target=target+Math.abs(N-i+1-i);
}
let count=0,sum=0,pre=0;
while(true){
  sum=0;
  for(let i=0;i<N-1;i++){
    if(Math.abs(A[i+1]-B[i])+Math.abs(A[i]-B[i+1])>Math.abs(A[i]-B[i])+Math.abs(A[i]-B[i])){
      let temp=A[i];
      A[i]=A[i+1];
      A[i+1]=temp;
      count++;
    }
    sum=sum+Math.abs(A[i]-B[i]);
  }
  sum=sum+Math.abs(A[N]-B[N]);
  if(pre==count||sum==target){
    console.log(count);
    break;
  }
  pre=count;
}


// 第三题试试能有几分吧
if(N<=2){
  console.log(1);
}else if(N<=3){
  console.log(2);
}else if(N<=6){
  console.log(3);
}else if(N<=10){
  console.log(4);
}else{
  console.log(Math.floor(N/2));//向下
}

let N=3,K=3;
let arr=[3,1,3,1,3];
let max=0;
let count=new Array(arr.length).fill(0);
function dfs(index,depth){
  if((index-1<1||arr[index-2]-count[index-2]<=0)&&(index+1>arr.length||arr[index]-count[index]<=0)&&(arr[index-1]-count[index-1]<=0)){
    if(index==K){
      max=Math.max(depth,max);
    }
    return;
  }
  if((index>K&&arr[index-2]-count[index-2]<=0)||(index<K&&arr[index]-count[index]<=0)){
    return;
  }
  if(arr[index-1]-count[index-1]>0){
    count[index-1]++;
    dfs(index,depth+1);
    count[index-1]--;
  }
  if(index-1>=1&&arr[index-2]-count[index-2]>0){
    count[index-2]++;
    dfs(index-1,depth+1);
    count[index-2]--;
  }
  if(index+1<=arr.length&&arr[index]-count[index]>0){
    count[index]++;
    dfs(index+1,depth+1);
    count[index]--;
  }
}
dfs(K,0);
console.log(max)


//并查集不能用于有向图
let n=4,m=4;
let arr=[[1,2,2],[1,3,4],[2,4,1],[2,3,6]];
//并查集
var p = new Array(n).fill(0).map((element, index) => index);
var value = new Array(n).fill(0);
var find = (x) => {
    if (p[x] === x) {
        return [x,0];
    }
    const [newf,v] = find(p[x]);
    p[x] = newf;
    value[x]=v+value[x];
    return [newf,value[x]];
}
var merge = (x, y, v) => {
    const [fx,vx] = find(x);
    const [fy,vy] = find(y);
    //单向的
    if(fx!=fy){
      p[x]=fy;
      value[fx]=value[fy]+v;  
    }else{
      value[x]=Math.min(value[fy]+v,value[x]);    
    }
}
arr.sort((a,b)=>{
  if(a[0]==b[0]){
    return b[1]-a[1];

  }else{
    return b[0]-a[0];
  }
})
for(let i=0;i<m;i++){
  merge(arr[i][0]-1,arr[i][1]-1,arr[i][2]);
}
let ans=Infinity;
if(find(0)[0]==n-1){
  ans=Math.min(value[0],ans);
}
let tempp=[...p],tempv=[...value];
for(let i=0;i<m;i++){
  p=[...tempp];
  value=[...tempv];
  merge(arr[i][1]-1,arr[i][0]-1,arr[i][2]);
  if(find(0)[0]==n-1){
    ans=Math.min(value[0],ans);
  }
}
if(ans==Infinity){
  console.log(-1);
}else{
  console.log(ans);
}



