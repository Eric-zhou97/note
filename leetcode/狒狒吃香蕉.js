//二分法的详细应用指导
//https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/solution/er-fen-cha-zhao-suan-fa-xi-jie-xiang-jie-by-labula/
var minEatingSpeed = function(piles, h) {
  let max=0;
  for(let num of piles){
      if(num >max){
          max=num;
      }
  }
  let l=0,r=max;
  while(l<=r){
    //因为返回的是l，因此当l==r使，如果l符合条件，l不会变化，如果l不符合条件，l会变化
      let mid=Math.floor((l+r)/2);
      let temp=0;
      for(let num of piles){
          temp=temp+Math.ceil(num/mid);
      }
      if(temp<=h){
          r=mid-1;
      }else{
          l=mid+1;
      }
  }
  return l;

};