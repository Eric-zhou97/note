var longestNiceSubstring = function(s) {
  if(s.length < 2) return '';
  const findOppositeCase = function(string) {
    return string === string.toLowerCase() ? string.toUpperCase() : string.toLowerCase();
  }
  for(let i = 0; i < s.length; i++) {
    if(s.indexOf(findOppositeCase(s[i])) == -1) {
      let s1 = longestNiceSubstring(s.substring(0, i))
      let s2 = longestNiceSubstring(s.substring(i + 1));
      if(s1.length >= s2.length)
        return s1;
       return s2;
    }
  }
  return s;
};