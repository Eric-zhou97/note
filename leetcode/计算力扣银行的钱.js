var totalMoney = function(n) {
  let ans=0;
  for(let i=1;i<=n;i++){
      let temp;
      if(i%7==0){
          temp=i/7+6
      }else{
          temp=Math.floor(i/7)+i%7;
      }
      ans=ans+temp;
  }    
  return ans;
};

//数学公式推算
var totalMoney = function(n) {
  // 所有完整的周存的钱
  const weekNumber = Math.floor(n / 7);
  const firstWeekMoney = Math.floor((1 + 7) * 7 / 2);
  const lastWeekMoney = firstWeekMoney + 7 * (weekNumber - 1);
  const weekMoney = Math.floor((firstWeekMoney + lastWeekMoney) * weekNumber / 2);
  // 剩下的不能构成一个完整的周的天数里存的钱
  const dayNumber = n % 7;
  const firstDayMoney = 1 + weekNumber;
  const lastDayMoney = firstDayMoney + dayNumber - 1;
  const dayMoney = Math.floor((firstDayMoney + lastDayMoney) * dayNumber / 2);
  return weekMoney + dayMoney;
};