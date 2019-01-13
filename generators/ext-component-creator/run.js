async function main() {
  var path = require('path')
  var framework = 'angular'
  var environment = 'dev'
  var components = ['container','button']
  var toolkit  = 'modern'
  var generatedFolders          = './GeneratedFolders/';                        log(`generatedFolders`,`${generatedFolders}`)
  var templateBaseFolder        = './filetemplates/';                           log(`templateBaseFolder`,`${templateBaseFolder}`)
  var templateToolkitFolder     = path.resolve(templateBaseFolder + framework); log(`templateToolkitFolder`,`${templateToolkitFolder}`)
  var dataFolder                = './AllClassesFiles/';                         log(`dataFolder`,`${dataFolder}`)
  var forPackageFolder          = './forPackage'
  var extAngularModernFolder    = 'ext-' + framework + '-' + toolkit;  log(`extAngularModernFolder`,`${extAngularModernFolder}`)
  var generatedToolkitFolder    = generatedFolders + extAngularModernFolder;                                 log(`generatedToolkitFolder`,`${generatedToolkitFolder}`)
  var generatedToolkitSrcFolder = generatedToolkitFolder + '/src/';                                 log(`generatedToolkitSrcFolder`,`${generatedToolkitSrcFolder}`)
  var libFolder                 = generatedToolkitSrcFolder + 'lib/';                                      log(`libFolder`,`${libFolder}`)

  await run(`node ./all.js ${framework} ${toolkit} ${environment} ${components}`)
  await run(`cp -R ${forPackageFolder}/${toolkit}/. ../${extAngularModernFolder}/`)
  await run(`cp -R ${generatedToolkitSrcFolder}/. ../${extAngularModernFolder}/src/${extAngularModernFolder}`)
  await run(`npm install`, `../${extAngularModernFolder}/`)
  await run(`npm run build`, `../${extAngularModernFolder}/`)
  await run(`cp -R ${forPackageFolder}/${toolkit}bin/. ../${extAngularModernFolder}/dist/${extAngularModernFolder}`)
  await run(`cp -R ${generatedToolkitSrcFolder}/. ../${extAngularModernFolder}/dist/${extAngularModernFolder}/src`)
  await run (`rm -R ../../packages/${extAngularModernFolder}/.`)
  await run(`cp -R ../${extAngularModernFolder}/dist/${extAngularModernFolder}/. ../../packages/${extAngularModernFolder}/.`)
  //copy src file (todo)
  //await run (`ls -l`, `../../packages/${extAngularModernFolder}/lib`)
}

function log(a,b) {console.log(a + ' ' + b)}
//**********
let run = require('./util').run
main()