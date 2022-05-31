var isAdditiveNumber = function(num) {
  dfs=function(i,j){
    let last = 0, first = i, second = j;
    while(second < num.length){
      //字符串相加，直接减0
      if((num.charAt(last) == '0' && first > last + 1) || (num.charAt(first) == '0' && second > first + 1))
        return false
      const s = (num.substring(last, first)-0)+(num.substring(first, second)-0)+'';
      if(second + s.length > num.length || !(s === num.substring(second, second + s.length)))
        return false
      last = first
      first = second
      second += s.length
    }
    return true
  }
  //第一个数必然从0开始，然后通过i,j确定初始的两个元素，之后的就全部确定了，看是否否符合即可
  for(let i=1;i<num.length-1;i++){
    for(let j=i+1;j<num.length;j++){
      if(dfs(i,j)){
        return true;
      }
    }
  }
  return false;
};