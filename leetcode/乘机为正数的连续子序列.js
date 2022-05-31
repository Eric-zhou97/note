let nums=[1,1,-1,-1];
let n=4;
let index=nums.length;
let count=[]
for(let i=nums.length-1;i>=0;i--){
  count[i]=index;
  if(nums[i]==-1){
    index=i;
  }
}
let ans=0;
let flag;
for(let i=0;i<n;i++){
  flag=1;
  for(let j=i;j<n;j++){
    flag*=nums[j];
    if(flag>0){
      ans=ans+count[j]-j;//从此处的j到下一个-1的位置前，这里要自己想一下
      j=count[j]-1;
    }else{
      j=count[j]-1;
    }
  }
}