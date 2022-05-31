//双指针
var reverseOnlyLetters = function(s) {
  let left=0,right=s.length-1;
  let arr=s.split("");
  while(left<right){
      if(!((arr[left]>='a'&&arr[left]<='z')||(arr[left]>='A'&&arr[left]<='Z'))){
          left++;
      }else if(!((arr[right]>='a'&&arr[right]<='z')||(arr[right]>='A'&&arr[right]<='Z'))){
          right--;
      }else{
          let temp=arr[left];
          arr[left]=arr[right];
          arr[right]=temp;
          left++;
          right--;
      }
  }
  return arr.join("");
};