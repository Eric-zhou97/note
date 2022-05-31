var countGoodRectangles = function(rectangles) {
  let count=0,max=0;
  for(let rec of rectangles){
      let temp=Math.min(rec[0],rec[1]);
      if(temp>max){
          max=temp;
          count=1;
      }else if(temp==max){
          count++;
      }
  }
  return count;
};