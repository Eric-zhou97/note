/**
 * @param {number[]} balance
 */
var Bank = function(balance) {
  this.balance=balance;
  this.len=balance.length;
};

/** 
* @param {number} account1 
* @param {number} account2 
* @param {number} money
* @return {boolean}
*/
Bank.prototype.transfer = function(account1, account2, money) {
  //注意该用户是否存在
  if(account1<1||account2<1||account1>this.len||account2>this.len){
      return false;
  }
  if(this.balance[account1-1]>=money){
      this.balance[account1-1]-=money;
      this.balance[account2-1]+=money;
      return true;
  }
  return false;
};

/** 
* @param {number} account 
* @param {number} money
* @return {boolean}
*/
Bank.prototype.deposit = function(account, money) {
  if(account<1||account>this.len){
      return false;
  }
  this.balance[account-1]+=money;
  return true;
};

/** 
* @param {number} account 
* @param {number} money
* @return {boolean}
*/
Bank.prototype.withdraw = function(account, money) {
  if(account<1||account>this.len){
      return false;
  }
  if(this.balance[account-1]>=money){
      this.balance[account-1]-=money;
      return true;
  }
  return false;
};
