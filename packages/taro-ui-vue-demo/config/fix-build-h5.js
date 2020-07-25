// require('@tarojs/components/dist-h5/vue')
// import '@tarojs/components/dist-h5/vue'
const { resolve } = require('path');
const fs = require('fs');
const utilsJsPath = resolve(__dirname, '../node_modules/@tarojs/taro-loader/lib/utils.js')

let content = fs.readFileSync(
  utilsJsPath, 
  { encoding: 'utf8'}
);
content = content.replace(`import '@tarojs/components/dist-h5/vue'`, `require('@tarojs/components/dist-h5/vue')`)

fs.writeFileSync(utilsJsPath, content, { encoding: 'utf8' })
