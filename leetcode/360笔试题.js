let n=3,m=3;
let arr=[[1,2,885],[1,3,513],[2,3,817]];

let weight=new Array(1000).fill(0).map(() => new Array());
for(let i=0;i<m;i++){
  weight[arr[i][2]].push([arr[i][0],arr[i][1]]);
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

let index=0;
let count=0;
for(let i=0;i<n;i++){
  while(find(i)!=find(0)){
    while(!weight[index].length){
      index++;
    }
    for(let route of weight[index]){
      if(find(route[0]-1)!=find(route[1]-1)){
        merge(route[0]-1,route[1]-1);
        count=count+index;
      }
    }
    index++;
  }
}
//输出
console.log(count);