function red(s) {
  var boldredcolor = `\x1b[31m\x1b[1m`
  var endMarker = `\x1b[0m`
  return (`${boldredcolor}${s}${endMarker}`)
}

exports.run = (parm, cwd) => {
  var all = parm.split(' ')
  var command = all[0]
  var args = all.slice(1)
  if (cwd == undefined) {cwd = process.cwd()}
  return promise = new Promise((resolve, reject) => {
    let options = {cwd: cwd, stdio: 'inherit', encoding: 'utf-8'}
    console.log(red(command + ' ' + args.toString().replace(',', ' ')) + ' in ' + cwd)
    let child = require('child_process').spawn(command, args, options)
    child.on('close', (code, signal) => {resolve({code, signal})})
    child.on('error', (error) => {reject(error)})
  })
}
