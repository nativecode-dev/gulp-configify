const fs = require('fs')
const merge = require('merge')
const path = require('path')

const readfile = (filename, config) => {
  try {
    const fileinfo = path.parse(filename)
    const name = fileinfo.name
    const json = JSON.parse(fs.readFileSync(filename))

    if (config && fs.existsSync(filename)) {
      if (config[name]) {
        config[name] = merge.recursive(true, config[name], json)
      } else {
        config[name] = json
      }
      return config
    }

    return json
  } catch (e) {
    return {}
  }
}

const configly = (basedir, ...args) => {
  const gulpfile = path.join(basedir, 'gulpfile.json')

  let config = readfile(gulpfile) || {}

  args.forEach(arg => {
    const filename = path.join(basedir, arg)
    readfile(filename, config)
  })

  return config
}

module.exports = configly
