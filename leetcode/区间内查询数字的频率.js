var RangeFreqQuery = function(arr) {
  this.map=new Map();
  for(let i=0;i<arr.length;i++){
      if(!this.map.has(arr[i])){
          this.map.set(arr[i],[]);
      }
      this.map.get(arr[i]).push(i)
  }
};

/** 
* @param {number} left 
* @param {number} right 
* @param {number} value
* @return {number}
*/
//二分法，先找到在[left,right]中的start(>=left,在判断是否<right)位置，无重合为0，有重合再在[start,len-1]中找right
RangeFreqQuery.prototype.query = function(left, right, value) {
  if(!this.map.has(value)){
      return 0;
  }
  let arr=this.map.get(value);
  let l=0,r=arr.length-1;
  while(l<r){
      let mid=Math.floor((l+r)/2);
      if(arr[mid]==left){
          r=mid;
      }else if(arr[mid]<left){
          l=mid+1;
      }else if(arr[mid]>left){
          r=mid;
      }
  }
  if(arr[l]<left||arr[l]>right){
      return 0;
  }
  let li=l;
  r=arr.length-1;
  while(l<r){
      let mid=Math.floor((l+r)/2);
      if(arr[mid]==right){
          r=mid;
      }else if(arr[mid]<right){
          l=mid+1;
      }else if(arr[mid]>right){
          r=mid;
      }
  }
  if(arr[l]>right){
      l--;
  }
  return l-li+1;
};