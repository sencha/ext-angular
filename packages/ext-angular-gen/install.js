const path = require('path');
const fs = require('fs')

function boldGreen (s) {
  var boldgreencolor = `\x1b[32m\x1b[1m`
  var endMarker = `\x1b[0m`
  return (`${boldgreencolor}${s}${endMarker}`)
}

var nodeDir = path.resolve(__dirname)
var pkg = (fs.existsSync(nodeDir + '/package.json') && JSON.parse(fs.readFileSync(nodeDir + '/package.json', 'utf-8')) || {});
version = pkg.version

console.log (`Welcome to ${boldGreen('Sencha ExtAngularGen')} v${version} - The ExtAngular code generator

${boldGreen('Quick Start:')} 
ext-angular-gen app CoolExtAngularApp
ext-angular-gen app -i
 
${boldGreen('Examples:')} 
ext-angular-gen app --name CoolExtAngularApp

Run ${boldGreen('ext-angular-gen --help')} to see all options
`)