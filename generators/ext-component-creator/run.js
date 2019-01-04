async function main() {
  var path = require('path')
  var framework = 'angular'
  var environment = 'dev'
  var components = ['grid','button']
  //var toolkit  = 'classic'
  var toolkit  = 'modern'
  var rootFolder            = './GeneratedFolders/';                        log(`rootFolder`,`${rootFolder}`)
  var templateBaseFolder    = './filetemplates/';                           log(`templateBaseFolder`,`${templateBaseFolder}`)
  var templateToolkitFolder = path.resolve(templateBaseFolder + framework); log(`templateToolkitFolder`,`${templateToolkitFolder}`)
  var dataFolder            = './AllClassesFiles/';                         log(`dataFolder`,`${dataFolder}`)
  var packageFolder         = './forPackage'
  //var folderName            = 'ext-' + framework + '-' + toolkit;                    log(`folderName`,`${folderName}`)
  var folderName            = 'ext-' + framework + '-' + toolkit;  log(`folderName`,`${folderName}`)
  var toolkitFolder         = rootFolder + folderName;                                 log(`toolkitFolder`,`${toolkitFolder}`)
  var srcFolder             = toolkitFolder + '/src/';                                 log(`srcFolder`,`${srcFolder}`)
  var libFolder             = srcFolder + 'lib/';                                      log(`libFolder`,`${libFolder}`)

  await run(`node all.js ${framework} ${toolkit} ${environment} ${components}`)
  await run(`cp -R ${packageFolder}/${toolkit}/. ../${folderName}/`)
  await run(`cp -R ${srcFolder}/. ../${folderName}/src/`)
  await run(`npm install`, `../${folderName}/`)
  await run(`npm run build`, `../${folderName}/`)
  await run (`rm -R ../../packages/${folderName}/.`)
  await run(`cp -R ../${folderName}/dist/${folderName}/. ../../packages/${folderName}/.`)
  //copy src file (todo)
  //await run (`ls -l`, `../../packages/${folderName}/lib`)
}

function log(a,b) {console.log(a + ' ' + b)}
//**********
let run = require('./util').run
main()