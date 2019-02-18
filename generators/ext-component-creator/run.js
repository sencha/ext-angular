async function main() {
  var path = require('path')
  //var framework = 'angular'
  var framework = 'components'
  var environment = 'dev'
  var components = ['container','button']
  var toolkit  = 'modern'
  var generatedFolders          = './GeneratedFolders/';                        log(`generatedFolders`,`${generatedFolders}`)
  var templateBaseFolder        = './filetemplates/';                           log(`templateBaseFolder`,`${templateBaseFolder}`)
  var templateToolkitFolder     = path.resolve(templateBaseFolder + framework); log(`templateToolkitFolder`,`${templateToolkitFolder}`)
  var dataFolder                = './AllClassesFiles/';                         log(`dataFolder`,`${dataFolder}`)
  var forPackageFolder          = './forPackage'
  //var baseFolder    = 'ext-' + framework + '-' + toolkit;  log(`baseFolder`,`${baseFolder}`)
  var baseFolder    = 'ext-' + framework;  log(`baseFolder`,`${baseFolder}`)
  var generatedToolkitFolder    = generatedFolders + baseFolder;                                 log(`generatedToolkitFolder`,`${generatedToolkitFolder}`)
  var generatedToolkitSrcFolder = generatedToolkitFolder + '/src/';                                 log(`generatedToolkitSrcFolder`,`${generatedToolkitSrcFolder}`)
  var libFolder                 = generatedToolkitSrcFolder + 'lib/';                                      log(`libFolder`,`${libFolder}`)

  await run(`node ./all.js ${framework} ${toolkit} ${environment} ${components}`)
return
  await run(`cp -R ${forPackageFolder}/${toolkit}/. ../${baseFolder}/`)
  await run(`cp -R ${generatedToolkitSrcFolder}/. ../${baseFolder}/src/${baseFolder}`)
  await run(`npm install`, `../${baseFolder}/`)
  await run(`npm run build`, `../${baseFolder}/`)
  await run(`cp -R ${forPackageFolder}/${toolkit}bin/. ../${baseFolder}/dist/${baseFolder}`)
  await run(`cp -R ${generatedToolkitSrcFolder}/. ../${baseFolder}/dist/${baseFolder}/src`)
  await run (`rm -R ../../packages/${baseFolder}/.`)
  await run(`cp -R ../${baseFolder}/dist/${baseFolder}/. ../../packages/${baseFolder}/.`)
  //copy src file (todo)
  //await run (`ls -l`, `../../packages/${baseFolder}/lib`)
}

function log(a,b) {console.log(a + ' ' + b)}
//**********
let run = require('./util').run
main()