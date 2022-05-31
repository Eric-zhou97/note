var numberOfSteps = function(num) {
  let step = 0
  for(let i = num; i > 0; (i%2? i--: i = i/2)){
      step ++
  }
  return step
};