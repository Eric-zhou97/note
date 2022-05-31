// 第二题
// 减5个20加25次，剩下的暴力(整除20，找规律)
let n=3
let arr=[[5,4,3,2,1],[1,1,1,10000,1],[5,5,5,5,5]];
let ans=[];
for(let a of arr){
  let count=0;
  let min=Math.min(...a);
  let flag=true;
  while(true){
    for(let i=0;i<5;i++){
      if(a[i]==min){
        min=-1;
      }else if(a[i]==0){
        flag=false;
        break;
      }else{
        a[i]--;
      }
    }
    if(!flag){
      break;
    }
    count++;
    min=Math.min(...a);
  }
  ans.push(count);
}
console.log(ans);

// 第三题
let n=3;
arr=[[1,-1,0],[1,-1,1],[1,1,0]];
let countA=0,countB=0;
let set=new Set();
for(let a of arr){
  let temp=a[0]/a[1];
  if(set.has(temp)){
    countA++;
  }else{
    countB++;
    set.add(temp);
  }
}
let ans=0;
for(let i=countB-1;i>=1;i--){
  ans=ans+i;
}
for(let i=0;i<countA;i++){
  ans=ans*2;
}
console.log(ans);