//node all.js angular modern
//node all.js webcomponents modern

function log(s) {
  console.log(s)
}

var path = require('path')
require('./XTemplate/js/Ext.js')
require('./XTemplate/js/String.js')
require('./XTemplate/js/Format.js')
require('./XTemplate/js/Template.js')
require('./XTemplate/js/XTemplateParser.js')
require('./XTemplate/js/XTemplateCompiler.js')
require('./XTemplate/js/XTemplate.js')
const rimraf = require('rimraf')
const mkdirp = require('mkdirp')
var fs = require('fs-extra')
var newLine = '\n'
var imports = ''
var declarations = ''
var exports = ''
var exportall = ''

log(`\next-component-generator\n`)

exportall = exportall + `export * from './lib/ext-angular.module';${newLine}`
exportall = exportall + `export * from './lib/ext-class.component';${newLine}`

var framework = process.argv[2]
if(framework == undefined) {
  console.log('parm is undefined. should be webcomponents or angular')
  return
}
if ((framework != 'webcomponents') && (framework != 'angular')) {
  console.log('parm is incorrect.  should be webcomponents or angular')
  return
}

var toolkit = process.argv[3]
if(toolkit == undefined) {
  console.log('parm is undefined. should be modern or classic')
  console.log('node all.js modern angular')
  return
}
if ((toolkit != 'modern') && (toolkit != 'classic')) {
  console.log('parm is incorrect.  should be modern or classic')
  return
}
log(`framework     : ${framework}`)
log(`toolkit       : ${toolkit}`)

var rootFolder    = './GeneratedFolders/'; log(`rootFolder    : ${rootFolder}`)
var dataFolder    = './AllClassesFiles/';  log(`dataFolder    : ${dataFolder}`)
var packageFolder = `./ext-all-stuff/${toolkit}`;    log(`packageFolder : ${packageFolder}`)

if (!fs.existsSync(rootFolder)) {
  log(`created       : ${rootFolder}`)
  mkdirp.sync(rootFolder)
}
else {
  log(`exists        : ${rootFolder}`)
}

var folderName = 'ext-' + framework + '-' + toolkit; log(`folderName    : ${folderName}`)
var toolkitFolder = rootFolder + folderName;         log(`toolkitFolder : ${toolkitFolder}`)
var srcFolder = toolkitFolder + '/src/';             log(`srcFolder     : ${srcFolder}`)
var libFolder = srcFolder + 'lib/';                  log(`libFolder     : ${libFolder}`)
log(`\n`)

rimraf.sync(toolkitFolder)
mkdirp.sync(toolkitFolder);log(`created       : ${toolkitFolder}`)
mkdirp.sync(srcFolder);log(`created       : ${srcFolder}`)
mkdirp.sync(libFolder);log(`created       : ${libFolder}`)

var dataFile = `${dataFolder}${toolkit}-all-classes-flatten.json`
log(`dataFile      : ${dataFile}`)
var data = require(dataFile)

launch(framework, data, srcFolder, libFolder)

//var fromPackages = path.join(packageFolder);log(`fromPackages  : ${fromPackages}`)
//var toPackages = path.join(toolkitFolder);  log(`toPackages    : ${toPackages}`)
log(`copy          : from ${packageFolder} to ${toolkitFolder}`)
fs.copySync(packageFolder, toolkitFolder)

//var finalFolder = path.join(toolkitFolder,'/../../../../packages/ext-angular')
//log(`finalFolder   : ${finalFolder}`)
//rimraf.sync(toolkitFolder)
//fs.copySync(toolkitFolder, finalFolder)
//log(`copy          : from ${toolkitFolder} to ${finalFolder}`)

log(`done`)


function launch(framework, data, srcFolder, libFolder) {

  switch(framework) {
    case 'angular':
      fs.writeFile(libFolder + 'ext-class.component' + '.ts', doExtClass(), function(err) {if(err){return console.log(err);} });
      fs.writeFile(libFolder + 'base' + '.ts', doExtBase(), function(err) {if(err){return console.log(err);} });
      break;
    case 'webcomponents':
      fs.writeFile(libFolder + 'ext-base' + '.js', doExtBase(), function(err) {if(err){return console.log(err);} });
      break;
    default:
      break;
  }

  var num = 0;
  var items = data.global.items;

  log(`num items     : ${items.length}`)
  log(`**************`)

  for (i = 0; i < items.length; i++) { 
    var o = items[i];
    if (o.alias != undefined) {
      if (o.alias.substring(0, 6) == 'widget') {
        var aliases = o.alias.split(",")
        for (j = 0; j < aliases.length; j++) {
          if (aliases[j].substring(0, 6) == 'widget') {
            if (o.items != undefined) {
              num++;
              o.xtype = aliases[j].substring(7)

              if (o.xtype == 'grid'  || o.xtype == 'button') {
                console.log(num + '.' + j + ' - ' + o.xtype)
                oneItem(o)
              }
              //console.log(num + '.' + j + ' - ' + o.xtype)
              //oneItem(o)

            }
            else {
              console.log('not: ' + o.name + ' - ' + o.alias)
            }
          }
        }
      }
    }
  }
  log(`**************`)

  exports = exports.substring(0, exports.length - 2); exports = exports + newLine;
  declarations = declarations.substring(0, declarations.length - 2); declarations = declarations + newLine;

  if(framework == 'angular') {
    fs.writeFile(`${srcFolder}public_api.ts`, doPublic_Api(exportall), function(err) {if(err) { return console.log(err); } });
    fs.writeFile(libFolder + 'ext-angular.module' + '.ts', doModule(imports, exports, declarations), function(err) {if(err) { return console.log(err); } });
  }
}

function oneItem(o) {
  var commaOrBlank = "";
  var tab = "\t";

  var sMETHODS = "";
  var methodsArray = o.items.filter(function(obj) {return obj.$type == 'methods';});
  if (methodsArray.length == 1) {
    methodsArray[0].items.forEach(function (method, index, array) {
      sMETHODS = sMETHODS + tab + tab + "{ name:'" + method.name + "',function: function"
      var sItems =''
      if (method.items !== undefined) {
        var arrayLength = method.items.length;
        for (var i = 0; i < arrayLength; i++) {
          if (method.items[i].$type == 'param') {
            if (i == arrayLength-1){commaOrBlank= ''} else {commaOrBlank= ','};
            sItems = sItems + method.items[i].name + ','
          }
        }
      }
      sItems = sItems.substring(0, sItems.length-1);
      sMETHODS = sMETHODS + "(" + sItems + ") { return this.ext." + method.name + "(" + sItems + ") } },\n";
    });
  }
  
  var sPROPERTIES = "";
  var sPROPERTIESOBJECT = "";
  var sGETSET = "";

  var configsArray = o.items.filter(function(obj) {return obj.$type == 'configs';});
  if (configsArray.length == 1) {
    configsArray[0].items.forEach(function (config, index, array) {
      //console.log(isWritten)
      // if (isWritten == false) {
      //   isWritten = true
      //   console.log(config)
      // }
      sPROPERTIES = `${sPROPERTIES}    '${config.name}',${newLine}`

      var type = ''
      if (config.type == undefined) {
        //console.log('type is undefined: ' + config.name)
        type = 'any'
      }
      else {
        type = config.type.replace(/"/g, "\'");
      }
      sPROPERTIESOBJECT = `${sPROPERTIESOBJECT}    "${config.name}": "${type}",${newLine}`;
      sGETSET = sGETSET + tab + `get ${config.name}(){return this.getAttribute('${config.name}')};set ${config.name}(${config.name}){this.setAttribute('${config.name}',${config.name})}\n`
    });

    sPROPERTIES = `${sPROPERTIES}    'platformConfig',${newLine}`
    sPROPERTIES = `${sPROPERTIES}    'responsiveConfig',${newLine}`
    sPROPERTIES = `${sPROPERTIES}    'fitToParent',${newLine}`
    sPROPERTIES = `${sPROPERTIES}    'config'${newLine}`

    sPROPERTIESOBJECT = `${sPROPERTIESOBJECT}    "platformConfig": "Object",${newLine}`;
    sPROPERTIESOBJECT = `${sPROPERTIESOBJECT}    "responsiveConfig": "Object",${newLine}`;
    sPROPERTIESOBJECT = `${sPROPERTIESOBJECT}    "fitToParent": "Boolean",${newLine}`;
    sPROPERTIESOBJECT = `${sPROPERTIESOBJECT}    "config": "Object",${newLine}`;
  }

  var sEVENTS = "";
  var sEVENTNAMES = "";
  var eventsArray = o.items.filter(function(obj) {return obj.$type == 'events';});
  if (eventsArray.length == 1) {
    eventsArray[0].items.forEach(function (event, index, array) {
      if (event.name == undefined) {
        var s = event.inheritdoc;
        event.name = s.substr(s.indexOf('#') + 1);
      }
      //if (event.name == 'tap') { event.name = 'tapit' };
      sEVENTS = sEVENTS + tab + tab + "{name:'" + event.name + "',parameters:'";
      sEVENTNAMES = sEVENTNAMES + tab + tab + "'" + event.name + "'" + "," + newLine;
      if (event.items != undefined) {
        event.items.forEach(function (parameter, index, array) {
          if (index == array.length-1){commaOrBlank= ''} else {commaOrBlank= ','};
          if (parameter.name == 'this'){ parameter.name = o.xtype };
          sEVENTS = sEVENTS + "" + parameter.name + commaOrBlank;
        });
      }
      sEVENTS = sEVENTS + "'}" + "," + newLine;
    })
  }
  sEVENTS = sEVENTS + tab + tab + "{name:'" + "ready" + "',parameters:''}" + "" + newLine;
  sEVENTNAMES = sEVENTNAMES + tab + tab + "'" + "ready" + "'" + "" + newLine;
  var classname =  o.xtype.replace(/-/g, "_")
  var capclassname = classname.charAt(0).toUpperCase() + classname.slice(1)
  var allClasses = "";
  allClasses = allClasses + tab + "'" + o.name + "'," + tab + "// xtype='" + classname + "'" + newLine;
  //numClasses++; console.log(numClasses + ' - ' + classname);

  //doRootfile('gulpfile.js', toolkit, folderName)
  //doRootfile('package.json', toolkit, folderName)
  //doRootfile('tsconfig-main.json', toolkit, folderName)
  //doRootfile('tsconfig-src.json', toolkit, folderName)

  switch(framework) {
    case 'angular':
      fs.writeFile(libFolder + 'ext-' + classname + '.component.ts', doClass(o.xtype, sGETSET, sMETHODS, sPROPERTIES, sPROPERTIESOBJECT, sEVENTS, sEVENTNAMES, o.name, classname, capclassname), function(err) {if(err) { return console.log(err); }});
      break;
    case 'webcomponents':
      fs.writeFile(libFolder + 'ext-' + classname + '.js', doClass(o.xtype, sGETSET, sMETHODS, sPROPERTIES, sPROPERTIESOBJECT, sEVENTS, sEVENTNAMES, o.name, classname, capclassname), function(err) {if(err) { return console.log(err); }});
      break;
    default:
      break;
  }

  imports = imports + `import { Ext${capclassname}Component } from './ext-${classname}.component';${newLine}`
  declarations = declarations + `Ext${capclassname}Component,${newLine}`
  exports = exports + `Ext${capclassname}Component,${newLine}`
  exportall = exportall + `export * from './lib/ext-${classname}.component';${newLine}`
}

function doRootfile(fileName, toolkit, folderName) {
  var p = path.resolve(__dirname, 'filetemplates/rootFolder/' + fileName + '.tpl')
  var content = fs.readFileSync(p).toString()
  var values = {
    toolkit: toolkit,
    folderName: folderName,
  }
  var tpl = new Ext.XTemplate(content)
  var t = tpl.apply(values)
  delete tpl
  fs.writeFile(rootFolder + '/' + fileName, t, function(err) {if(err) { return console.log(err) }})
}

function doClass(xtype, sGETSET, sMETHODS, sPROPERTIES, sPROPERTIESOBJECT, sEVENTS, sEVENTNAMES, name, classname, capclassname) {
  var p = path.resolve(__dirname, 'filetemplates/' + framework + '/class.tpl')
  var content = fs.readFileSync(p).toString()
  var values = {
    xtype: xtype,
    sGETSET: sGETSET,
    sMETHODS: sMETHODS,
    sPROPERTIES: sPROPERTIES,
    sPROPERTIESOBJECT: sPROPERTIESOBJECT,
    sEVENTS: sEVENTS,
    sEVENTNAMES: sEVENTNAMES,
    name: name,
    capclassname: capclassname,
    classname: classname
  }
  var tpl = new Ext.XTemplate(content)
  var t = tpl.apply(values)
  delete tpl
  return t
 }

/// <reference path="../../node_modules/@types/extjs/index.d.ts" />
function doExtBase() {
  var p = path.resolve(__dirname, 'filetemplates/' + framework + '/base.tpl')
  var content = fs.readFileSync(p).toString()
  return content
}

function doIndex(lib) {
return `export * from './${lib}ExtAngularModule'
export * from './${lib}ExtClass'
`
}

function doPublic_Api(exportall) {
  var p = path.resolve(__dirname, 'filetemplates/' + framework + '/public_api.tpl')
  var content = fs.readFileSync(p).toString()
  var values = {
    exportall: exportall
  }
  var tpl = new Ext.XTemplate(content)
  var t = tpl.apply(values)
  delete tpl
  return t
}

function doModule(imports, exports, declarations) {
  var p = path.resolve(__dirname, 'filetemplates/' + framework + '/module.tpl')
  var content = fs.readFileSync(p).toString()
  var values = {
    imports: imports,
    exports: exports,
    declarations: declarations
  }
  var tpl = new Ext.XTemplate(content)
  var t = tpl.apply(values)
  delete tpl
  return t
 }

function doExtClass() {
  return `declare var Ext: any
export class ExtClassComponent {
  public classname: any
  public extend: any
  public defineConfig: any
  public createConfig: any
  public ext: any
  constructor (classname: any, extend: string, defineConfig: any, createConfig: any) {
    if (!Ext.ClassManager.isCreated(classname)) {
      Ext.apply(defineConfig, { extend: extend })
      Ext.define(classname, defineConfig)
    }
    this.classname = classname
    this.extend = extend
    this.defineConfig = defineConfig
    this.createConfig = createConfig
    this.ext = Ext.create(classname, createConfig)
  }
}
`
}
