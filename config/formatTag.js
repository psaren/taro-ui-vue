const fs = require('fs')
const { resolve } = require('path')
const glob = require('glob')

// 转换 小写 tag
const formatTag = (file) => {
  let content = fs.readFileSync(file, { encoding: 'utf8' })

  const matched = content.match(/<[a-z]+/g)

  const matchedUniq = Array.from(new Set(matched))

  const comps = matchedUniq.map((item) => {
    const tag = item.replace('<', '').replace(/[a-z]/, (p) => p.toUpperCase())
    content = content
      .replace(new RegExp('<' + tag, 'gi'), `<${tag}`)
      .replace(new RegExp(`</${tag}`, 'gi'), `</${tag}`)
    return tag
  })
  if (comps) {
    const compStr = comps.join(', ')

    const impStr = `import { ${compStr} } from '@tarojs/components'\n`

    fs.writeFileSync(file, impStr + content, { encoding: 'utf8' })
  }
}

// 匹配 所有组件
console.time('Time')
glob(resolve(__dirname, '../src/components/**/*.[jt]sx'), {}, function (er, files) {
  files.forEach(formatTag)
  console.timeEnd('Time')
})
