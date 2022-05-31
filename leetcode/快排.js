//快排
var quickSort = function(nums) { 
  if(nums.length<=1){
    return nums;
  }
  let point=Math.floor(nums.length/2);
  //需要将原数据从数组中删除，splice删除并截取
  let pivot=nums.splice(point,1)[0];
  let left=[],right=[];
  for(let i=0;i<nums.length;i++){
    if(nums[i]<pivot){
        left.push(nums[i]);
    }else{
        right.push(nums[i]);
    }
  }
  return quickSort(left).concat([pivot],quickSort(right)); 
}

//原地快排
var sortArray = function(nums) {
  function qucik_sort(arr,left=0,right=arr.length-1){
      if(left>=right) return;
      let i=left-1,j=right+1;
      let x=arr[(left+right)>>1];
      while(i<j){
          do {
              i++;
          }
          while(arr[i]<x)
          do{
              j--;
          }
          while(arr[j]>x)
          if(i<j){
              [arr[i],arr[j]]=[arr[j],arr[i]];
          }
      }
      qucik_sort(arr,left,j);
      qucik_sort(arr,j+1,right);
  }
  qucik_sort(nums,0,nums.left);
  return nums;
};