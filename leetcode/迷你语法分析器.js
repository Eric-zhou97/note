var deserialize = function (s) {
  let js = JSON.parse(s)
  let parse = function (value) {
      let res = new NestedInteger()
      if (Array.isArray(value)) {
          value.forEach(v => {
              res.add(parse(v))
          })
      } else {
          res.setInteger(value)
      }
      return res
  }
  return parse(js)
};