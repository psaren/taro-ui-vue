const copyfiles = require('copyfiles')
const path = require('path')
copyfiles(path.resolve('../src/style/**/*.scss'), path.resolve('../bundle'), () => {
  console.log('copy files successfully!')
})
