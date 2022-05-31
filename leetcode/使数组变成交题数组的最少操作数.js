var minimumOperations = function(nums) {
  let map1=new Map();
  let map2=new Map();
  let max1=0,max2=0,num1,num2,next1=0,next2=0;
  for(let i=0;i<nums.length;i++){
      if(i%2!=0){
          let temp;
          if(!map1.has(nums[i])){
              map1.set(nums[i],1);
              temp=1;
          }else{
              temp=map1.get(nums[i])+1;
              map1.set(nums[i],temp);
          }
          if(max1<temp){
              if(num1!=nums[i]){
                  next1=max1;
              }
              max1=temp;
              num1=nums[i];
          }else if(next1<temp){
              next1=temp;
          }
      }else{
          let temp;
          if(!map2.has(nums[i])){
              map2.set(nums[i],1);
              temp=1;
          }else{
              temp=map2.get(nums[i])+1;
              map2.set(nums[i],temp);
          }
          if(max2<temp){
              if(num2!=nums[i]){
                  next2=max2;
              }
              max2=temp;
              num2=nums[i];
          }else if(next2<temp){
              next2=temp;
          }
      }
  }
  //获取了次大的数量（没有则为0）
  if(num2==num1){
      return nums.length-Math.max(max1+next2,max2+next1); 
  }
  return nums.length-max1-max2;
};
//另解
var minimumOperations = function(nums) {
  let counts1 = getCounts(nums.filter((x, i) => i % 2 === 1))
  let counts0 = getCounts(nums.filter((x, i) => i % 2 === 0))
  // console.log(counts0)
  // console.log(counts1)
  
  let N = nums.length
  if (N === 1) return 0
  if (counts1[0][0] !== counts0[0][0]) {
      return N - counts1[0][1] - counts0[0][1]
  }
  let ans = N
  //只有一种数的情况
  if (counts1.length >= 2) {
      ans = Math.min(ans, N - counts1[1][1] - counts0[0][1])
  }else{
      ans=Math.min(ans,N-counts0[0][1])
  }
  if (counts0.length >= 2) {
      ans = Math.min(ans, N - counts0[1][1] - counts1[0][1])
  }else{
      ans=Math.min(ans, N - counts1[0][1])
  }
  return ans
};
function getCounts(nums) {
  let ans = new Map()
  for (let num of nums) {
      let count = ans.get(num) || 0
      ans.set(num, count + 1)
  }
  //map转数组
  return [...ans].sort((l, r) => r[1] - l[1])
}
