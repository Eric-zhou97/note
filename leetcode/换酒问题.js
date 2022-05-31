var numWaterBottles = function(numBottles, numExchange) {
  let count=0;
  while(numBottles>=numExchange){
      count=count+Math.floor(numBottles/numExchange)*numExchange;
      numBottles=numBottles-Math.floor(numBottles/numExchange)*numExchange+Math.floor(numBottles/numExchange);
  }
  count=count+numBottles;
  return count;
};