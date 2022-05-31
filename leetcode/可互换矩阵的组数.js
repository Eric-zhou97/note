var interchangeableRectangles = function(rectangles) {
  let map=new Map();
  for(let arr of rectangles){
      let temp=arr[0]/arr[1];
      if(map.has(temp)){
          map.set(temp,map.get(temp)+1);
      }else{
          map.set(temp,1);
      }
  }
  let count=0;
  for (let [num, times] of map.entries()) {
    if (times > 1){
        count=count+(times-1)*times/2;
    }
  }
  return count;
};