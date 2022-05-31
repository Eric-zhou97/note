var spiralOrder = function(matrix) {
  if(matrix.length==0) return [];
  let res=[];
  let left=0,top=0,down=matrix.length-1,right=matrix[0].length-1;
  while(left<right&&top<down){
      for(let i=left;i<right;i++){
          res.push(matrix[top][i]);
      }
      for(let i=top;i<down;i++){
          res.push(matrix[i][right]);
      }
      for(let i=right;i>left;i--){
          res.push(matrix[down][i]);
      }
      for(let i=down;i>top;i--){
          res.push(matrix[i][left]);
      }
      left++;
      right--;
      top++;
      down--;
  }
  if(top==down){
      for(let i=left;i<=right;i++){
          res.push(matrix[top][i]);
      }
  }else if(left==right){
      for(let i=top;i<=down;i++){
          res.push(matrix[i][right]);
      }
  }
  return res;
};