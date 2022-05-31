var Bitset = function(size) {
  this.data = Array(size).fill(0)
  this.ones = 0
  this.flipped = 0
};

/** 
* @param {number} idx
* @return {void}
*/
Bitset.prototype.fix = function(idx) {
  if (this.get(idx) === 1) return
  this.data[idx] = this.flipped ^ 1
  this.ones++
};

Bitset.prototype.get = function(idx) {
  //异或0即为保持不变
  //异或1为翻转
  return this.flipped ^ this.data[idx]
}

/** 
* @param {number} idx
* @return {void}
*/
Bitset.prototype.unfix = function(idx) {
  if (this.get(idx) === 0) return
  this.data[idx] = this.flipped ^ 0
  this.ones--
};

/**
* @return {void}
*/
Bitset.prototype.flip = function() {
  this.flipped ^= 1
  this.ones = this.data.length - this.ones
};

/**
* @return {boolean}
*/
Bitset.prototype.all = function() {
  return this.ones === this.data.length
};

/**
* @return {boolean}
*/
Bitset.prototype.one = function() {
  return !!this.ones
};

/**
* @return {number}
*/
Bitset.prototype.count = function() {
  return this.ones
};

/**
* @return {string}
*/
Bitset.prototype.toString = function() {
  return this.flipped ? [...this.data].map(x => 1 - x).join('') : this.data.join('')
};