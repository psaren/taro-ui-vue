const fs = require('fs')
const path = require('path')
const glob = require('glob')
const shell = require('shelljs')

const resolve = (p) => path.resolve(__dirname, p)

// 转换 小写 tag
const formatTag = (file) => {
  const reg = /import[\s\S]+@tarojs\/components'\r\n/g
  let content = fs.readFileSync(file, { encoding: 'utf8' })

  const matched = content.match(reg)
  if (matched) {
    const matchedTag = matched[0].match(/[A-Z][a-z]+/g)
    matchedTag.forEach((item) => {
      const tag = item.replace(/[A-Z]/, (p) => p.toLowerCase())
      content = content
        .replace(new RegExp(`<${item}`, 'gi'), `<${tag}`)
        .replace(new RegExp(`</${item}`, 'gi'), `</${tag}`)
    })

    content = content.replace(reg, '')
    shell.mkdir('-p', file.replace('src', 'tests').replace(/[a-z|-]+.(j|t)sx/, ''))
    fs.writeFileSync(file.replace('src', 'tests'), content, { encoding: 'utf8' })
  }
}
function main() {
  // 匹配 所有组件
  console.log('transform components ... ')
  console.time('Time')
  shell.cp('-Rf', resolve('../src/components/*.ts'), resolve('./components/'))
  shell.mkdir('-p', resolve('./utils/'))
  shell.cp('-Rf', resolve('../src/utils/*.ts'), resolve('./utils/'))
  glob(resolve('../src/components/**/*.[jt]sx'), {}, function (er, files) {
    files.forEach(formatTag)
    console.timeEnd('Time')
  })
}
main()
