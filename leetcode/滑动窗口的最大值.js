//与队列的最大值十分相似
//滑动窗口
var maxSlidingWindow = function(nums, k) {
  if(!nums.length){
      return []
  }
  let queue=[]
  for(let i=0;i<k;i++){
      while(queue.length&&queue[queue.length-1]<nums[i]){
          queue.pop();
      }
      queue.push(nums[i]);
  }
  let res=[];
  res.push(queue[0]);
  for(let i=k;i<nums.length;i++){
      //在最大值的index之前的都出队列了
      if(nums[i-k]==queue[0]){
          queue.shift();
      }
      //在我前面比我小的值可以全部去掉，先进先出
      while(queue.length&&queue[queue.length-1]<nums[i]){
          queue.pop();
      }
      queue.push(nums[i]);
      res.push(queue[0])
  }
  return res;
};