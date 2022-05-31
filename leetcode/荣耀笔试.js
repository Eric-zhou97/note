//输入
let arr=[[1,2,3,4,5],[11,12,13,14,16],[21,22,23,24,25],[31,32,33,34,35],[41,42,43,44,45]];
let q=[1,2,11,14,25,15];
//外面套一下循环，有多次查询
let set=new Set(q);
let count=0;
let direction=[[1,0],[0,1],[-1,0],[0,-1]];
let flag=new Array(5).fill(0).map(()=>{
  return new Array(5).fill(false);
})

label:for(let i=0;i<5;i++){
  for(let j=0;j<5;j++){
    if(set.has(arr[i][j])){
      dfs(i,j);
      break label;
    }
  }
}
if(count==6){
  console.log(1);
}else{
  console.log(0);
}

function dfs(a,b){
  if((!set.has(arr[a][b]))||flag[a][b]!=false){
    return;
  }
  count++;
  flag[a][b]=true;
  for(let i=0;i<4;i++){
    let x=a+direction[i][0];
    let y=b+direction[i][1];
    if(x>=0&&x<5&&y>=0&&y<5){
      dfs(x,y);
    }
  }
}


//乒乓球
//单次输入
let n=3
let temp=[2,1,3,6,7,8,9,10,11,5,7,1,3,2];
let max=0,value=0;
//自己写循环包住
let arr=[temp[0]]
for(let k=1;k<temp.length;k++){
  let key=temp[k];
  let left=0,right=k-1;
  while(left<=right){       //在已排序的元素中二分查找第一个比它大的值
    let mid= Math.floor((left+right)/2); 
    if(key<arr[mid]){    
      right = mid-1;
    }else{
      left=mid+1;//当前值比中间值大   在右边的子数组继续寻找
    }
  }
  value=value+left-(k-left);
  let index=left-1;
  //这里可能可以用map剪枝，防止全都一样的数
  while(index>=0&&arr[index]==key){
    //这里加一行
    index--;
    value--;
  }
  max=Math.max(max,value);
  for(let j=k-1;j>=left;j--){
    arr[j+1]=arr[j];
  }
  arr[left]=key;
}
console.log(arr)
console.log([max,value])


