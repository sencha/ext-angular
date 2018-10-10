async function main() {
  var path = require('path')
  var framework = 'angular'
  var toolkit  = 'modern'
  var rootFolder            = './GeneratedFolders/';                        log(`rootFolder`,`${rootFolder}`)
  var templateBaseFolder    = './filetemplates/';                           log(`templateBaseFolder`,`${templateBaseFolder}`)
  var templateToolkitFolder = path.resolve(templateBaseFolder + framework); log(`templateToolkitFolder`,`${templateToolkitFolder}`)
  var dataFolder            = './AllClassesFiles/';                         log(`dataFolder`,`${dataFolder}`)
  var folderName = 'ext-' + framework + '-' + toolkit; log(`folderName`,`${folderName}`)
  var toolkitFolder = rootFolder + folderName;         log(`toolkitFolder`,`${toolkitFolder}`)
  var srcFolder = toolkitFolder + '/src/';             log(`srcFolder`,`${srcFolder}`)
  var libFolder = srcFolder + 'lib/';                  log(`libFolder`,`${libFolder}`)

  await run(`node all.js ${framework} ${toolkit}`)
  await run(`cp -R ${srcFolder} ../${folderName}/src`)
  await run(`npm run build`, `../${folderName}/`)
  await run (`rm -R ../../packages/${folderName}`)
  await run(`cp -R ../ext-angular-modern/dist/${folderName} ../../packages/${folderName}`)
  await run (`ls -l`, `../../packages/${folderName}/lib`)
}

function log(a,b) {console.log(a + ' ' + b)}
//**********
let run = require('./util').run
main()