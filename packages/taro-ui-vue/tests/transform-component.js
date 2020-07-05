/**
 * 将 src/components 组件转换后放到 tests/components
 * 因为 src/components 组件引入了 @tarojs/components Taro 内置组件，无法进行测试
 * 转换主要是将
 * <View></View> => <view></view>,
 * <Text></Text> => <text></text>,
 * ...
 * 并去掉 @tarojs/components 的引用
 * 拷贝 utils 等依赖文件
 */
const fs = require('fs')
const path = require('path')
const glob = require('glob')
const shell = require('shelljs')

const resolve = (p) => path.resolve(__dirname, p)

// 转换 小写 tag
const formatTag = (file) => {
  const reg = /import[\s\S]+@tarojs\/components'(\r\n|\n)/g
  let content = fs.readFileSync(file, { encoding: 'utf8' })

  const matched = content.match(reg)
  if (matched) {
    const matchedTag = matched[0].match(/[A-Z][a-z]+/g)
    matchedTag.forEach((item) => {
      const tag = item.replace(/[A-Z]/, (p) => p.toLowerCase())
      content = content
        .replace(new RegExp(`<${item}`, 'gi'), `<${tag}`)
        .replace(new RegExp(`<inputEventDetail`, 'gi'), `<InputEventDetail`)
        .replace(new RegExp(`</${item}>`, 'gi'), `</${tag}>`)
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
  glob(resolve('../src/{components,utils}/**/*.ts'), {}, function (er, files) {
    const fileList = files.concat([resolve('../src/index.ts')])
    fileList.forEach((file) => {
      const dest = file.replace('src', 'tests').replace(/[(a-z)|-]+.ts$/, '')
      shell.mkdir('-p', dest)
      shell.cp('-Rfu', file, dest)
    })
  })
  glob(resolve('../src/components/**/*.[jt]sx'), {}, function (er, files) {
    files.forEach(formatTag)
    console.timeEnd('Time')
  })
}
main()
