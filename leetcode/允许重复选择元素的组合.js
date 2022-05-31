var combinationSum = function(candidates, target) {
  const result = [], visited = [];
  callback(0, 0);
  return result;
  function callback(sum, cur) {
      if (target === sum) result.push(visited.slice());
      if (target <= sum) return ;
      for (let i = cur; i < candidates.length; i++) {
          visited.push(candidates[i]);
          callback(sum + candidates[i], i);
          visited.pop();
      }
  }
};