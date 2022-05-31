let arr=[5,4,3,2,1]
let colors=[1,1,1]
//相同颜色的必须是有序的
let count=new Array(10001).fill(0).map(()=>new Array());
let flag=true;
for(let i=0;i<arr.length;i++){
  if(count[colors[i]].length!=0&&count[colors[i]][count[colors[i]].length-1]>arr[i]){
    flag=false;
    break;
  }
  count[colors[i]].push(arr[i]);
}
console.log(flag);
