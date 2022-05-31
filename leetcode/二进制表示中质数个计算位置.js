var countPrimeSetBits = function(left, right) {
  let arr=[2,3,5,7,11,13,17,19,23,29];
  let set=new Set(arr);
  let count=0;
  for(let i=left;i<=right;i++){
      let temp=i;
      let num=0;
      while(temp>0){
          if(temp%2==1){
              num++;
          }
          temp=Math.floor(temp/2);
      }
      // 每次解决一个1
      // while(n) {
      //   count++;
      //   n = n & (n-1);
      // }
      if(set.has(num)){
          count++;
      }
  }
  return count;
};

// 判断是否为质数
// let judge = (x) => {
//     if(x < 2) return false;
//     for(let i = 2; i*i <= x; i++) {
//         if(x % i === 0) return false;
//     }
//     return true;
// }