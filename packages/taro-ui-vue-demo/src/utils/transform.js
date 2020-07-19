// 格式化 JSX
// 使用时修改 relativePath
const fs = require('fs')
const { resolve } = require('path')

const relativePath = '../pages/view/noticebar/index.vue'

const encoding = 'utf8'
let content = fs.readFileSync(
  resolve(__dirname, relativePath), 
  { encoding }
)

content = content
  .replace(/{\/\*/g, '<!--')
  .replace(/\*\/}/g, '-->')
  .replace(/className=/g, 'class=')
  .replace(/View/g, 'view')

fs.writeFileSync(resolve(__dirname, relativePath), content, { encoding })

