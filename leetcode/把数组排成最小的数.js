var minNumber = function(nums) {
  // 如果a+b>b+a  说明a>b
  nums.sort((a, b) => {
      //1为交换，-1为不交换 
      return (a + "" + b > b + "" + a) ? 1 : -1
  })
  let str = ""
  nums.forEach(element => {
      str += element
  });
  return str
};