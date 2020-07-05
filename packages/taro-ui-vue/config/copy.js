const copydir = require('copy-dir')
const path = require('path')
copydir(path.resolve(__dirname, '../src/style'), path.resolve(__dirname, '../dist/style'), {
  cover: true,
})
