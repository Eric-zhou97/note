var MyCalendar = function() {
  this.events=[];
};
//二分搜索来剪枝
MyCalendar.prototype.findInsertIndex=function(start){
  let l=0;
  let r=this.events.length-1;
  //此处需要等于号，因为不是查某个数，而是给要插入的数找位置
  while(l<=r){
      let mid=Math.floor((l+r)/2);
      if(this.events[mid][0]==start){
          return mid;
      }else if(this.events[mid][0]<start){
          l=mid+1;
      }else{
          r=mid-1;
      }
  }
  return l;
}
/** 
* @param {number} start 
* @param {number} end
* @return {boolean}
*/
MyCalendar.prototype.book = function(start, end) {
  let index=this.findInsertIndex(start);
  if((this.events[index-1]&&this.events[index-1][1]>start)||(this.events[index]&&this.events[index][0]<end)){
      return false;
  }
  //splice函数，数组插入、删除、替换
  this.events.splice(index,0,[start,end]);
  return true;
};