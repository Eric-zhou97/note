var findOcurrences = function(text, first, second) {
  let arr = text.split(' ')
    let arr2 = []
    for (let i = 0; i < arr.length - 2; i++) {
      if (arr[i] === first && arr[i+1] === second) {
          arr2.push(arr[i+2])
      }
    }
    return arr2
};