const fs = require('fs')
const path = require('path')
const pkg = require('../package.json')
const prefix = 'At'

const componentsPath = path.resolve(__dirname, '../src/components/')
const VERSION = patchVersion(pkg.version)

function injectInstall(dir) {
  const name = dir
    .split('-')
    .map((item) => item.replace(/\S/, (s) => s.toUpperCase()))
    .join('')
  writeInstallFile(`${componentsPath}/${dir}/main.ts`, name)
}

function writeInstallFile(path, name) {
  const fullName = `${prefix}${name}`
  const data = `import ${name} from './index'

const ${fullName} = {
  version: '${VERSION}',
  name: ${name}.name,
  install: ${name}
}

export default ${fullName}
`
  fs.writeFile(path, data, { encoding: 'utf8' }, () => {})
}

function patchVersion(v) {
  const vArr = v.split('.')
  vArr[vArr.length - 1] = +vArr[vArr.length - 1] + 1
  return vArr.join('.')
}

function generateMainFile() {
  const AtListItem = {
    path: path.resolve(__dirname, '../src/components/list/item/main.ts'),
    name: 'AtListItem',
  }
  writeInstallFile(AtListItem.path, AtListItem.name)
  fs.readdir(componentsPath, (err, data) => {
    if (err) console.log(err)
    data.forEach(injectInstall)
  })
}
generateMainFile()
// writeInstallFile(path.resolve(__dirname, './main.ts'), 'Test')
// console.log(VERSION)
