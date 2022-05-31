var asteroidCollision = function (asteroids) {
  let stack = []
  let cur;
  for (let i = 0; i < asteroids.length; i++) {
      if (asteroids[i] > 0 || stack.length === 0 || stack[stack.length-1]<0) { 
        stack.push(asteroids[i]); 
        continue; 
      }
      //只有先右后左才有可能碰撞
      while(cur=stack.pop()){
          let sum = asteroids[i]+cur
          if(sum>0){
              stack.push(cur);
              break;
          }
          if((sum<0 && stack[stack.length-1]<0)|| (sum<0 && stack.length===0)){
              stack.push(asteroids[i]);
              break;
          }
          if(sum === 0) break;
      }
  }
  return stack
};