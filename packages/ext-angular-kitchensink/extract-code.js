const fs = require('fs')
const path = require('path')
const examples = path.join(__dirname, 'src', 'examples')
const mkdirp = require('mkdirp').sync
let result = {}

function extractAll(dir) {
//  console.log(dir)
  const files = fs.readdirSync(dir)
  const parts = dir.split(path.sep)

  const example = parts[parts.length - 1]

  for (let file of files) {
    const fullPath = path.join(dir, file)

    if (fs.lstatSync(fullPath).isDirectory()) {
      extractAll(fullPath);
    } else if (file === `${example}.ts`) {
      try {
//        console.log(example)
        extractFrom(example, file, fullPath)
      } catch (e) {
        console.log(`Error extracting code from ${file}`, e)
      }
    }
    else if (file === `${example}Data.js`) {
        try {
  //        console.log(example)
          extractFrom(example, file, fullPath)
        } catch (e) {
          console.log(`Error extracting code from ${file}`, e)
        }
      }


  }
}

function extractFrom(example, file, fullPath) {
  if (!fs.existsSync(fullPath)) return
  const content = fs.readFileSync(path.join(fullPath), 'utf8')

  const importRegex = /import[^'"]+['"]([^'"]+)['"];/gi
  const htmlRegex = /[ ]+templateUrl[^'"]+['"]([^'"]+)['"],/gi
  const styleRegex =   /[ ]+styleUrls[^'"]+['"]([^'"]+)['"]],/gi

  let match
  (result[example] = result[example] || {})[file] = content
  while (match = importRegex.exec(content)) {
    file = `${match[1]}.ts`
    if (file.startsWith('.')) {
      extractFrom(example, path.basename(file), path.join(path.dirname(fullPath), file))
    }
  }
   while (match = htmlRegex.exec(content)) {
    file = `${match[1]}`
    if (file.startsWith('.')) {
      extractFrom(example, path.basename(file), path.join(path.dirname(fullPath), file))
    }
  }
  while (match = styleRegex.exec(content)) {
    file = `${match[1]}`
    if (file.startsWith('.')) {
      extractFrom(example, path.basename(file), path.join(path.dirname(fullPath), file))
    }
  }
}

function run() {
  var outputDir = path.join(__dirname, 'src', 'assets', 'resources')
  //var outputDir = path.join(__dirname, 'resources')
  extractAll(examples)
  mkdirp(outputDir)
  //fs.writeFileSync(path.join(outputDir, 'code.js'), ` function getIt() { window._code = ${JSON.stringify(result, null, '\t')} }`, 'utf8')
  var r = `${JSON.stringify(result, null, '\t')}`
  var r2 = r.replace(/\/\//g, '\\/\\/');
  //console.log(r)
  //fs.writeFileSync(path.join(outputDir, 'code.js'), `window._code = ${JSON.stringify(result, null, '\t')}`, 'utf8')
  fs.writeFileSync(path.join(outputDir, 'code.js'), `window._code = ${r2}`, 'utf8')

  var chalk = require('chalk')
  var prefix = ``
  const platform = require('os').platform()
  if (platform == 'darwin') { prefix = `ℹ ｢ext｣:` }
  else { prefix = `i [ext]:` }
  var val = `${chalk.green(prefix)} `
  outputDir = outputDir.replace(process.cwd(), '').trim()
  console.log(val + 'Writing code.js to ' + outputDir)
}

run()