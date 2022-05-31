//set
//定时炸弹，移动指针
let ans=0;
let set=new Set();
for(let i=0;i<nums.length;i++){
  set.add(nums[i]);
  if(set.size==nums.length){
    ans++;
    set=new Set([nums[i]]);
  }
}
return ans;