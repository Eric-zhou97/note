//状态DP
var numberOfGoodSubsets = function(nums) {
  const mod=1000000007;
  const p=[2,3,5,7,11,13,17,19,23,29];
  let count=new Array(31).fill(0);
  let n=nums.length;
  for(let n of nums){
      count[n]++;
  }
  let mask=1<<10;
  let f=new Array(mask).fill(0);
  //初始值，不纳入最后的统计；
  f[0]=1;
  //1在最后考虑
  for(let i=2;i<=30;i++){
      //考虑每一个在nums的数
      if(count[i]==0) continue;
      let cur=0,x=i;
      let flag=true;
      //看每一个素数,生成状态表
      for(let j=0;j<10;j++){
          let t=p[j],c=0;
          while(x%t==0){
              cur=cur|(1<<j);
              x=x/t;
              c++;
          }
          //每个素数只能出现一次
          if(c>1){
              flag=false;
              break;
          }
      }
      if(!flag) continue;
      //遍历每一个状态
      for(let pre=mask-1;pre>=0;pre--){
          //加入i这个数后，每个素数依然只能出现一次
          if((pre&cur)!=0) continue;
          //在pre状态中，再加入i这个数
          f[pre|cur]=(f[pre|cur]+f[pre]*count[i])%mod;

      }
  }
  let ans=0;
  //0不算
  for(let i=1;i<mask;i++){
      ans=(ans+f[i])%mod;
  }
  //考虑1的影响，加入1不影响
  for(let i=0;i<count[1];i++){
      ans=(ans*2) %mod;
  }
  return ans;
};