#! /usr/bin/env node
const semver = require("semver")
const util = require('./util.js')
const path = require('path')
const fs = require('fs-extra')
const { kebabCase, pick } = require('lodash')
const commandLineArgs = require('command-line-args')
const List = require('prompt-list')
const Input = require('prompt-input')
const Confirm = require('prompt-confirm')
const glob = require('glob')

function boldGreen (s) {
  var boldgreencolor = `\x1b[32m\x1b[1m`
  var endMarker = `\x1b[0m`
  return (`${boldgreencolor}${s}${endMarker}`)
}
function boldRed (s) {
  var boldredcolor = `\x1b[31m\x1b[1m`
  var endMarker = `\x1b[0m`
  return (`${boldredcolor}${s}${endMarker}`)
}
function getPrefix () {
  var prefix
  if (require('os').platform() == 'darwin') {
    prefix = `ℹ ｢ext｣:`
  }
  else {
    prefix = `i [ext]:`
  }
  return prefix
}

var app =(`${boldGreen(getPrefix())} ext-angular-gen:`)

var answers = {
  'seeDefaults': null,
  'useDefaults': null,
  'appName': null,
  'packageName': null,
  'version': null,
  'description': null,
  'repositoryURL': null,
  'keywords': null,
  'authorName': null,
  'license': null,
  'bugsURL': null,
  'homepageURL': null,
  'createNow': null,
}

const optionDefinitions = [
  { name: 'command', defaultOption: true },
  { name: 'verbose', alias: 'v', type: Boolean },
  { name: 'interactive', alias: 'i', type: Boolean },
  { name: 'help', alias: 'h', type: Boolean },
  { name: 'defaults', alias: 'd', type: Boolean },
  { name: 'auto', alias: 'a', type: Boolean },
  { name: 'name', alias: 'n', type: String }
]

var version = ''
var config = {}
var cmdLine = {}

stepStart()

function stepStart() {
  var nodeDir = path.resolve(__dirname)
  var pkg = (fs.existsSync(nodeDir + '/package.json') && JSON.parse(fs.readFileSync(nodeDir + '/package.json', 'utf-8')) || {});
  version = pkg.version
  var dataConfig = fs.readFileSync(nodeDir + '/config.json')
  config = JSON.parse(dataConfig)

  console.log(boldGreen(`\ext-angular-gen - Sencha ExtAngular Code Generator v${version}`))
  console.log('')
  
  let mainDefinitions = [{ name: 'command', defaultOption: true }]
  const mainCommandArgs = commandLineArgs(mainDefinitions, { stopAtFirstUnknown: true })
//  console.log('');console.log(`mainCommandArgs: ${JSON.stringify(mainCommandArgs)}`)
  var mainCommand = mainCommandArgs.command
  //console.log(`mainCommand: ${JSON.stringify(mainCommand)}`)
  switch(mainCommand) {
    case undefined:
      let argv = mainCommandArgs._unknown || []
      if (argv.length == 0 ){
//        console.log(`cmdLine: ${JSON.stringify(cmdLine)}`);console.log(`\n\nShortHelp`)
        stepShortHelp()
        break;
      }
      if (argv.length > 1) {
        console.log(`${app} ${boldRed('[ERR]')} too many switches: ${argv.toString()}`)
      }
      else {
        cmdLine = commandLineArgs(optionDefinitions, { argv: argv, stopAtFirstUnknown: true })
//        console.log(`cmdLine: ${JSON.stringify(cmdLine)}`);console.log(`\n\nstepCheckCmdLine`)
        stepCheckCmdLine()
      }
      break;
    case 'app':
      cmdLine.command = mainCommand
      let appArgs = mainCommandArgs._unknown || []
//      console.log(`appArgs: ${JSON.stringify(appArgs)}`)
      let appDefinitions = [{ name: 'appName', defaultOption: true }]
      const appCommandArgs = commandLineArgs(appDefinitions, { argv: appArgs, stopAtFirstUnknown: true })
//      console.log(`appCommandArgs: ${JSON.stringify(appCommandArgs)}`)
      var appName = appCommandArgs.appName
//      console.log(`appName: ${JSON.stringify(appName)}`)
      if (appName != undefined) {
        cmdLine.name = appName
      }
      let appSubArgs = appCommandArgs._unknown || []
//      console.log(`appSubArgs: ${JSON.stringify(appSubArgs)}`)
      if (appSubArgs.length == 0) {
//        console.log(`cmdLine: ${JSON.stringify(cmdLine)}`);console.log(`\n\nstepCheckCmdLine`)
        stepCheckCmdLine()
      }
      else {
        var command = cmdLine.command
        var name = ''
        if (cmdLine.name != undefined) {
          name = cmdLine.name
        }
        try{
          cmdLine = commandLineArgs(optionDefinitions, { argv: appSubArgs, stopAtFirstUnknown: false })
        }
        catch (e) {
          console.log(`${app} ${boldRed('[ERR]')} ${JSON.stringify(e)}`)
          return
        }
        cmdLine.command = command
        if (name != '') {
          cmdLine.name = name
        }
//        console.log(`cmdLine: ${JSON.stringify(cmdLine)}`);console.log(`\n\nstepCheckCmdLine`)
        stepCheckCmdLine()
      }
      break;
    default:
      console.log(`${app} ${boldRed('[ERR]')} command not available: '${mainCommand}'`)
  }
}

function stepCheckCmdLine() {
  //console.log('stepCheckCmdLine');console.log(`cmdLine: ${JSON.stringify(cmdLine)}, length: ${Object.keys(cmdLine).length}, process.argv.length: ${process.argv.length}`)
  setDefaults()
  if (cmdLine.verbose == true) {
    process.env.EXTANGULARGEN_VERBOSE = 'true'
  }
  else {
    process.env.EXTANGULARGEN_VERBOSE = 'false'
  }
  if (cmdLine.help == true) {
    stepHelpGeneral() 
  }
  else if (cmdLine.command == undefined) {
    console.log(`${app} ${boldRed('[ERR]')} no command specified (app, view)`)
  }
  else if (cmdLine.command == 'app' && Object.keys(cmdLine).length == 1) {
    console.log(`${app} ${boldRed('[ERR]')} at least 1 parameter is needed`)
    return
  }
  else if (cmdLine.defaults == true) {
    displayDefaults()
  }
  else if (cmdLine.command != 'app') {
    console.log(`${app} ${boldRed('[ERR]')} unknown command '${cmdLine.command}'`)
  }
  else if (cmdLine.interactive == true && cmdLine.command == 'app') {
    stepSeeDefaults()
  }
  else if (process.argv.length == 2) {
    stepShortHelp()
  }
  else if (cmdLine.auto == true) {
    stepGo()
  }
  else if (cmdLine.name != undefined) {
    cmdLine.auto = true
    stepGo()
  }
  else {
    stepHelpGeneral()
  }
}

function stepSeeDefaults() {
  new Confirm({
    message: 
    `would you like to see the defaults for package.json?`,
    default: config.seeDefaults
  }).run().then(answer => {
    answers['seeDefaults'] = answer
    if(answers['seeDefaults'] == true) {
      displayDefaults()
      stepCreateWithDefaults()
    }
    else {
      stepCreateWithDefaults()
    }
  })
}

function stepCreateWithDefaults() {
  new Confirm({
    message: 'Would you like to create a package.json file with defaults?',
    default: config.useDefaults
  }).run().then(answer => {
    answers['useDefaults'] = answer
    if(answers['useDefaults'] == true) {
      setDefaults()
      stepNameYourApp()
    }
    else {
      stepNameYourApp()
    }
  })
}

function stepNameYourApp() {
  new Input({
    message: 'What would you like to name your ExtAngular app?',
    default:  config.appName
  }).run().then(answer => {
    answers['appName'] = answer
    answers['packageName'] = kebabCase(answers['appName'])
    stepPackageName()
  })
}

function stepPackageName() {
  new Input({
    message: 'What would you like to name the npm Package?',
    default:  kebabCase(answers['appName'])
  }).run().then(answer => { 
    answers['packageName'] = answer
    stepVersion()
  })
}

function stepVersion() {
  new Input({
    message: 'What version is your ExtAngular application?',
    default: config.version
  }).run().then(answer => { 
    if (semver.valid(answer) == null) {
      console.log('version is not a valid format, must be 0.0.0')
      stepVersion()
    }
    else {
      answers['version'] = answer
      stepDescription()
    }
  })
}

function stepDescription() {
  new Input({
    message: 'What is the description?',
    default: config.description
  }).run().then(answer => { 
    answers['description'] = answer
    stepRepositoryURL()
  })
}

function stepRepositoryURL() {
  new Input({
    message: 'What is the GIT repository URL?',
    default: config.repositoryURL
  }).run().then(answer => { 
    answers['repositoryURL'] = answer
    stepKeywords()
  })
}

function stepKeywords() {
  new Input({
    message: 'What are the npm keywords?',
    default: config.keywords
  }).run().then(answer => { 
    answers['keywords'] = answer
    stepAuthorName()
  })
}

function stepAuthorName() {
  new Input({
    message: `What is the Author's Name?`,
    default: config.authorName
  }).run().then(answer => { 
    answers['authorName'] = answer
    stepLicense()
  })
}

function stepLicense() {
  new Input({
    message: 'What type of License does this project need?',
    default: config.license
  }).run().then(answer => { 
    answers['license'] = answer
    stepBugsURL()
  })
}

function stepBugsURL() {
  new Input({
    message: 'What is the URL to submit bugs?',
    default: config.bugsURL
  }).run().then(answer => { 
    answers['bugsURL'] = answer
    stepHomepageURL()
  })
}

function stepHomepageURL() {
  new Input({
    message: 'What is the Home Page URL?',
    default: config.homepageURL
  }).run().then(answer => { 
    answers['homepageURL'] = answer
    stepGo()
  })
}

function stepGo() {

  displayDefaults()

  if (cmdLine.auto == true) {
    stepCreate()
    return
  }

  var message
  if (cmdLine.defaults == true) {
    message = 'Generate the ExtAngular npm project?'
  }
  else {
    message = 'Would you like to generate the ExtAngular npm project with above config now?'
  }

  new Confirm({
    message: message,
    default: config.createNow
  }).run().then(answer => {
    answers['createNow'] = answer
    if (answers['createNow'] == true) {
      stepCreate()
      return
    }
    else {
      console.log(`\n${boldRed('Create has been cancelled')}\n`)
      return
    }
  })
}

async function stepCreate() {
  var nodeDir = path.resolve(__dirname)
  var currDir = process.cwd()
  var destDir = currDir + '/' + answers['packageName']
  var templatesDir = nodeDir + '/templates/'

  if (fs.existsSync(destDir)){
    console.log(`${boldRed('Error: folder ' + destDir + ' exists')}`)
    //fs.removeSync(destDir) //danger!  if you want to enable this, warn the user
    return
  }
  fs.mkdirSync(destDir)
  process.chdir(destDir)
  console.log(`${app} ${destDir} created`)

  var boilerplate = ''
  boilerplate = nodeDir + '/node_modules/@sencha/ext-angular-boilerplate'

  //copy in files from boilerplate
  glob.sync('**/*', { cwd: boilerplate, ignore: ['build/**', 'node_modules/**', 'index.js'], dot: true })
    .forEach(file => new Promise((resolve, reject) => {
      fs.copySync(path.join(boilerplate, file), file)
    }))

  const packageInfo = {};
  Object.assign(packageInfo, {name: answers['packageName']})
  if (answers['version']) packageInfo.version = answers['version']
  if (answers['description']) packageInfo.description = answers['description']
  if (answers['gitRepository']) {
    packageInfo.repository = {
      type: 'git',
      url: answers['gitRepository']
    }
  }
  if (answers['keywords']) packageInfo.keywords = answers['keywords']
  if (answers['author']) packageInfo.author = answers['author']
  if (answers['license']) packageInfo.license = answers['license']

  try {
    const substrings = ['[ERR]', '[WRN]', '[INF] Processing', "[INF] Server", "[INF] Writing content", "[INF] Loading Build", "[INF] Waiting", "[LOG] Fashion waiting"];
    var command = `npm${/^win/.test(require('os').platform()) ? ".cmd" : ""}`
    var args = []
    if (process.env.EXTANGULARGEN_VERBOSE == 'true') {
      args = ['install']
    }
    else {
      if (require('os').platform() == 'win32') {
        //args = ['install','-s','>','NUL']
        args = ['install','-s']
      }
      else {
        //args = ['install','-s','>','/dev/null']
        args = ['install','-s']
      }
    }
    let options = {stdio: 'inherit', encoding: 'utf-8'}
    console.log(`${app} npm ${args.toString().replace(/,/g, " ")} started for ${answers['packageName']}`)
    await util.spawnPromise(command, args, options, substrings);
    console.log(`${app} npm ${args.toString().replace(/,/g, " ")} completed for ${answers['packageName']}`)
  } catch(err) {
    console.log(boldRed('Error in npm install: ' + err));
  }
  console.log(`${app} Your ExtAngular project is ready`)
  console.log(boldGreen(`\ntype "cd ${answers['packageName']}" then "npm start" to run the development build and open your new application in a web browser\n`))
 }

 function setDefaults() {
  if (cmdLine.name != undefined) {
    answers['appName'] = cmdLine.name
    answers['packageName'] = kebabCase(answers['appName'])
    answers['description'] = `${answers['packageName']} description for ExtAngular app ${answers['appName']}`
  }
  else {
    answers['appName'] = config.appName
    answers['packageName'] = config.packageName
    answers['description'] = config.description
  }
  answers['version'] = config.version
  answers['repositoryURL'] = config.repositoryURL
  answers['keywords'] = config.keywords
  answers['authorName'] = config.authorName
  answers['license'] = config.license
  answers['bugsURL'] = config.bugsURL
  answers['homepageURL'] = config.homepageURL
}

function displayDefaults() {
  console.log(boldGreen(`Defaults for ExtAngular app:`))
  console.log(`appName:\t${answers['appName']}`)
  console.log('')
  console.log(boldGreen(`Defaults for package.json:`))
  console.log(`packageName:\t${answers['packageName']}`)
  console.log(`version:\t${answers['version']}`)
  console.log(`description:\t${answers['description']}`)
  console.log(`repositoryURL:\t${answers['repositoryURL']}`)
  console.log(`keywords:\t${answers['keywords']}`)
  console.log(`authorName:\t${answers['authorName']}`)
  console.log(`license:\t${answers['license']}`)
  console.log(`bugsURL:\t${answers['bugsURL']}`)
  console.log(`homepageURL:\t${answers['homepageURL']}`)
  console.log('')
}

function stepHelpGeneral() {
  stepHelpApp()
}

function stepHelpApp() {

  var message = `${boldGreen('Quick Start:')} ext-angular-gen -a

ext-angular-gen app (-h) (-d) (-i) (-n 'name')

-h --help          show help (no parameters also shows help)
-d --defaults      show defaults for package.json
-i --interactive   run in interactive mode (question prompts will display)
-n --name          name for Ext JS generated app
-v --verbose       verbose npm messages (for problems only)

${boldGreen('Examples:')} 
ext-angular-gen app  --name CoolExtAngularApp
ext-angular-gen app --interactive
ext-angular-gen app -a -n CoolExtAngularApp

`
  console.log(message)
}

function stepShortHelp() {
  var message = `${boldGreen('Quick Start:')} 
ext-angular-gen app CoolExtAngularApp
ext-angular-gen app -i
 
${boldGreen('Examples:')} 
ext-angular-gen app --name CoolExtAngularApp

Run ${boldGreen('ext-angular-gen --help')} to see all options
`
  console.log(message)
}
