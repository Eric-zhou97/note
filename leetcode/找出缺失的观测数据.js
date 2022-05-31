var missingRolls = function(rolls, mean, n) {
  let m=rolls.length
  let Sum = rolls.reduce((a,b) => a+b)
  let Sum1=mean*(m+n)-Sum
  let arr =new Array(n)
  //范围是1到6
  if(Sum1/n <1 || Sum1/n >6){
      return []
  }else if(Sum1%n == 0){
      return arr.fill(Sum1/n)
  }else if(Sum1%n != 0){
      let a =Math.floor(Sum1/n)
      let avg=Sum1-a*n
      arr=arr.fill(a)
      //每个数最多只加一次
      for(let i=0;i<avg;i++){
            arr[i]++
      }
      return arr
  }
  };