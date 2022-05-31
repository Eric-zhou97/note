/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  this.map=new Array(matrix.length);
  let sum=0;
  //二维数组要单独创立，否则会都指向一个一维数组（用fill的话）
  this.map[0]=[];
  for(let i=0;i<matrix[0].length;i++){
      sum=sum+matrix[0][i];
      this.map[0][i]=sum;
  }
  for(let i=1;i<matrix.length;i++){
      sum=0;
      this.map[i]=[];
      for(let j=0;j<matrix[0].length;j++){
          sum=sum+matrix[i][j];
          this.map[i][j]=sum+this.map[i-1][j];
      }
  }
};

/** 
* @param {number} row1 
* @param {number} col1 
* @param {number} row2 
* @param {number} col2
* @return {number}
*/
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  if(row1==0&&col1!=0){
      return  this.map[row2][col2]-this.map[row2][col1-1];
  }
  if(row1!=0&&col1==0){
      return  this.map[row2][col2]-this.map[row1-1][col2];
  }
  if(row1==0&&col1==0){
      return  this.map[row2][col2];
  }
  return this.map[row2][col2]-this.map[row1-1][col2]-this.map[row2][col1-1]+this.map[row1-1][col1-1];
};

/**
* Your NumMatrix object will be instantiated and called as such:
* var obj = new NumMatrix(matrix)
* var param_1 = obj.sumRegion(row1,col1,row2,col2)
*/