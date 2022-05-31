//未解决
//大数处理
var subStrHash = function(s, power, modulo, k, hashValue) {
  let rh = new RollingHash(k, power, modulo)
  let ans
  for (let i = s.length - 1; i >= 0; i--) {
      let num = s.charCodeAt(i) - 96
      rh.digest(num)
      if (i + k < s.length) {
          rh.degest(s.charCodeAt(i + k) - 96)
      }
      if (i <= s.length - k && rh.getKey() === hashValue) {
          ans = s.substr(i, k)
      }
  }
  return ans
};
class RollingHash {
constructor(L, M, MOD) {
  this.MOD = BigInt(MOD);
  this.key = 0n;
  this.M = BigInt(M);
  this.W = this.power(BigInt(M), L);
}
digest(val) {
  this.key *= this.M;
  this.key += BigInt(val);
  this.key %= this.MOD;
}
degest(val) {
  this.key -= BigInt(val) * this.W;
  this.key %= this.MOD;
  if (this.key < 0n)
    this.key += this.MOD;
}
getKey() {
  return Number(this.key);
}
power(m, p) {
  if (p === 1)
    return m;
  if (p === 0)
    return 1n;
  if (p % 2)
    return m * this.power(m, p - 1) % this.MOD;
  const half = this.power(m, p / 2);
  return half * half % this.MOD;
}
}



//另解
//大数精度问题
var subStrHash = function(s, power, modulo, k, hashValue) {
  const mul = (a, b) => (((a * Math.floor(b / 100000)) % modulo) * 100000 + a * (b % 100000)) % modulo;
  let pk = 1;
  for (let i = 0; i < k; i++) {
      pk = mul(pk, power);
  }
  let cur = 0;
  let result = s.length;
  for (let i = s.length - 1; i >= 0; i--) {
      cur = (mul(cur, power) + s.charCodeAt(i) - 96) % modulo;
      if (s.length - i < k) continue;
      if (s.length - i > k) {
          //因为之前取余了，因此这里要防止出现负数
          cur = (cur + modulo - pk * (s.charCodeAt(i + k) - 96) % modulo) % modulo;
      }
      if (cur === hashValue) result = i;
  }
  return s.substr(result, k);
};

