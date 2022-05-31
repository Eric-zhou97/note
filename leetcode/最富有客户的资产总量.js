var maximumWealth = function(accounts) {
  let max=0;
  for(let i=0;i<accounts.length;i++){
      let temp=0;
      for(let j=0;j<accounts[0].length;j++){
          temp=temp+accounts[i][j];
      }
      max=Math.max(max,temp);
  }
  return max;
};