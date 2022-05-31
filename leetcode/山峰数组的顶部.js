var peakIndexInMountainArray = function(arr) {
  let l=1,r=arr.length-2;
  let ans=0;
  while(l<=r){
      let mid=Math.floor((l+r)/2);
      if(arr[mid]>arr[mid+1]){
          ans=mid;
          r=mid-1;
      }else{
          l=mid+1;
      }
  }
  return ans;
};