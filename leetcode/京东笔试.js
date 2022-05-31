// let n=3,m=3;
// let arr=[[1,2,3],[1,3,4],[2,3,5]];
let n=readInt(),m=readInt();
let arr=[];
for(let i=0;i<m;i++){
  let a1=readInt();
  let a2=readInt();
  let a3=readInt();
  arr.push([a1,a2,a3]);
}
let weight=new Array(10000).fill(0).map(() => new Array());
let max=0;
for(let i=0;i<m;i++){
  weight[arr[i][2]].push([arr[i][0],arr[i][1]]);
  if(arr[i][2]>max){
    max=arr[i][2];
  }
}
if(n==1){
  //输出
  console.log(max); 
}
//并查集
var p = new Array(n).fill(0).map((element, index) => index);
var find = (x) => {
    if (p[x] === x) {
        return x;
    }
    const newf = find(p[x]);
    p[x] = newf;
    return newf;
}
var merge = (x, y) => {
    const fx = find(x);
    const fy = find(y);
    //归于0
    if(fx<fy){
      p[fy]=fx;
    }else{
      p[fx] = fy;
    }
}

for(let i=0;i<n;i++){
  //如果没有成为一个连通图，则使用下一个重量
  while(find(i)!=find(0)){
    while(!weight[max]){
      max--;
    }
    for(let route of weight[max]){
      merge(route[0]-1,route[1]-1);
    }
    max--;
  }
}
//输出
console.log(max+1);




