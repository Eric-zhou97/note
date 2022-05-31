var isPalindrome = function(s) {
  //去除大写字母
  let str = s.toLowerCase()
  let len = str.length
  let arr = []
  //收集数字和字母
  for(let i = 0;i < len;i++){
      if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) arr.push(str[i])
      if(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) arr.push(str[i])
  }
  if(arr === []) return true
  //是否是回文串
  str = arr.join('')
  str2 = arr.reverse().join('')
  if(str === str2) return true
  return false
};