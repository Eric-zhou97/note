//前缀和，可以双向，记录最左侧左右侧蜡烛的位置，累加蜡烛的数量
var platesBetweenCandles = function(s, queries) {
  let count=0;
  let sum=new Array(s.length+1).fill(0);
  let l=new Array(s.length),r=new Array(s.length);
  let arrS=s.split("");
  for(let i=0,j=s.length-1,p=-1,q=-1;i<s.length;i++,j--){
      if(arrS[i]=='|') p=i;
      if(arrS[j]=='|') q=j;
      l[i]=p;
      r[j]=q;
      sum[i+1]=sum[i]+(arrS[i]=='*'?1:0);
  }
  let ans=[];
  for(let q of queries){
      let [left,right]=q;
      let a=r[left],b=l[right];
      if(a!=-1&&a<=b){
          ans.push(sum[b+1]-sum[a+1]);
      }else{
          ans.push(0);
      }
  }
  return ans;
};
//二分
var platesBetweenCandles = function(s, queries) {
  let count=0;
  let arr=new Array(s.length).fill(0);
  let arrS=s.split("");
  arrS.map((item,index)=>{
      count=count+(item=='|'?1:0);
      arr[index]=count;
  })
  let ans=[];
  for(let q of queries){
      let [l,r]=q;
      if(arr[l]==arr[r]||((l==0&&arr[l]==0&&arr[l]+1==arr[r])||(l>0&&arr[l]==arr[l-1]&&arr[l]+1==arr[r]))){
          ans.push(0);
          continue;
      }
      let left=0,right=0;
      let target=arr[l]+1;
      if((l==0&&arr[l]==1)||(l>0&&arr[l]>arr[l-1])){
          left=l;
      }else{
          while(l<=r){
              let mid=Math.floor((l+r)/2);
              if(arr[mid]>=target){
                  r=mid-1;
              }else{
                  l=mid+1;
              }
          }
          left=l;
      }
      [l,r]=q;
      target=arr[r];
      while(l<=r){
          let mid=Math.floor((l+r)/2);
          if(arr[mid]>=target){
              r=mid-1;
          }else{
              l=mid+1;
          }
      }
      right=l;
      sum=arr[right]-arr[left]+1;
      console.log(left,right);
      ans.push(right-left+1-sum);
  }
  return ans;
};