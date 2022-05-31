//写一个traverse函数，输出页面所有高度和宽度大于50PX的节点

let traverse = function traverse(node) {
  let res = []
  node = node || document.body
  document.querySelectorAll('.xxx')
  if (node) {
    let children = node.childNodes
    (children || []).forEach((c) => {
      let height = c.style.heigh // '50px'
      height = parseFloat(height.slice(0, heigh.length - 2))
      let width = c.style.width
      width = parseFloat(height.slice(0, width.length - 2))
      if (height > 50 && width > 50) {
        res.push(c)
      }
      traverse(c)
    })
  }
}

/***
 * 从这里开始
 */
traverse()
function traverse() {}

traverse()
let traverse = function () {}

/**
 * 剪头函数
 */
const traverse = () => {
  this
}

typescript

React

Vue

// 函数vue 双向绑定，监听数组数据变化

Promise

/**
 * --- 问题一 ---
 *
 * 给出一组异步任务方法，和允许同时执行的个数，实现一个方法，用于并发执行异步任务
 * 举例：任务是下载20张图片，同最多只能并发5个，每完成一个会给队列补充1个，直到所有的都完成
 * -- 说明 --
 *
 * - 当有任务执行完毕后，自动补充任务，始终保持正在执行的任务有 `concurrency` 个
 * - 返回 { resolved: [], rejected: [] }
 *
 */

function loadImg(src) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img')
    img.onload = () => {
      resolve(img)
    }
    img.onerror = () => {
      const err = new Error('Loaing failed')
      reject(err)
    }
    img.src = src
  })
}

function download(tasks, concurrency = 5) {
  const queue = []
  const res = []
  for (const src of task) {
    if (queue.length < concurrency) {
      queue.push(loadImg(tasks[i]))
    } else {
      res.concat(await Promise.allSettled(queue))
      queue = [] // 没有体现出队列
      queue.push(loadImg(tasks[i]))
    }
  }
  return res
}
