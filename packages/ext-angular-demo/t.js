// console.log('hi')

// process.argv.forEach(function (val, index, array) {
//   console.log(index + ': ' + val);
// })

//var arg = process.argv.shift()
//console.log(arg)

while (arg = process.argv.shift()) {
//  console.log(arg)

  if (arg === "--help" || arg === "-h" || arg === "-?") {
    console.log('help')
  } else if (arg === "--quiet" || arg === "-q") {
    console.log('quiet')
  }



}