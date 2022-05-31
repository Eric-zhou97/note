var relativeSortArray = function(arr1, arr2) {
  let index={};
  for(let i=0;i<arr2.length;i++){
      index[arr2[i]]=i+1;
  }
  arr1.sort((a, b) => {
      if(!index[a]&&!index[b]){
          return a-b;
      }
      if(!index[a]){
          return 1;
      }
      if(!index[b]){
          return -1;
      }
      return index[a]-index[b];
  })
  return arr1;
};

//另解
var relativeSortArray = function(arr1, arr2) {
  let hashmap = {};
  for (let i = 0; i < arr1.length; i++) {
      if (hashmap[arr1[i]] === undefined) {
          hashmap[arr1[i]] = 1;
      } else {
          hashmap[arr1[i]]++;
      }
  }
  let result = [];
  for (let i = 0; i < arr2.length; i++) {
      let counts = hashmap[arr2[i]]
      if (counts !== undefined) {
          for (let j = 0; j < counts; j++) {
              result.push(arr2[i]);
          }
      }
  }
  for (let key in hashmap) {
      key  = parseInt(key)
      if (result.indexOf(key) === -1) {
          let counts = hashmap[key];
          for (let j = 0; j < counts; j++) {
              result.push(key);
          }
      } 
  }
  return result;
};