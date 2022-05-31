var complexNumberMultiply = function(num1, num2) {
  let arr1=num1.split("+");
  arr1[1]=arr1[1].substring(0,arr1[1].length-1);
  
  let arr2=num2.split("+");
  arr2[1]=arr2[1].substring(0,arr2[1].length-1);
  //const complex2 = [num2.split("+")[0], num2.split("+")[1].split("i")[0]];

  let a=arr1[0]*arr2[0]-arr1[1]*arr2[1];
  let b=arr1[0]*arr2[1]+arr1[1]*arr2[0];

  return a+"+"+b+"i";
}; 