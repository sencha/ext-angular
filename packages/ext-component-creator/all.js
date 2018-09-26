//node all.js angular modern
//node all.js webcomponents modern

function log(v,s) {
  var blanks
  if (v == '') {
    blanks = ''
  }
  else {
    blanks = new Array((22 - v.length) + 1).join( ' ' )
    blanks = blanks + ': '
  }
  console.log(`${v}${blanks}${s}`)
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

log(``,`\next-component-generator\n`)

exportall = exportall + `export * from './lib/ext-angular.module';${newLine}`
exportall = exportall + `export * from './lib/ext-class.component';${newLine}`

var framework = process.argv[2]
if(framework == undefined) {
  log(``,'parm is undefined. should be webcomponents or angular')
  return
}
if ((framework != 'webcomponents') && (framework != 'angular')) {
  log(``,'parm is incorrect.  should be webcomponents or angular')
  return
}

var toolkit = process.argv[3]
if(toolkit == undefined) {
  log(``,'parm is undefined. should be modern or classic')
  log(``,'node all.js modern angular')
  return
}
if ((toolkit != 'modern') && (toolkit != 'classic')) {
  log(``,'parm is incorrect.  should be modern or classic')
  return
}
log(`framework`,`${framework}`)
log(`toolkit`,`${toolkit}`)

var templateBaseFolder    = './filetemplates/';                           log(`templateBaseFolder`,`${templateBaseFolder}`)
var templateToolkitFolder = path.resolve(templateBaseFolder + framework); log(`templateToolkitFolder`,`${templateToolkitFolder}`)
var rootFolder            = './GeneratedFolders/';                        log(`rootFolder`,`${rootFolder}`)
var dataFolder            = './AllClassesFiles/';                         log(`dataFolder`,`${dataFolder}`)
var packageFolder         = `./ext-all-stuff/${toolkit}`;                 log(`packageFolder`,`${packageFolder}`)

if (!fs.existsSync(rootFolder)) {
  log(`created`,`${rootFolder}`)
  mkdirp.sync(rootFolder)
}
else {
  log(`exists`,`${rootFolder}`)
}

var folderName = 'ext-' + framework + '-' + toolkit; log(`folderName`,`${folderName}`)
var toolkitFolder = rootFolder + folderName;         log(`toolkitFolder`,`${toolkitFolder}`)
var srcFolder = toolkitFolder + '/src/';             log(`srcFolder`,`${srcFolder}`)
var libFolder = srcFolder + 'lib/';                  log(`libFolder`,`${libFolder}`)

rimraf.sync(toolkitFolder)
mkdirp.sync(toolkitFolder);log(`created`,`${toolkitFolder}`)
mkdirp.sync(srcFolder);    log(`created`,`${srcFolder}`)
mkdirp.sync(libFolder);    log(`created`,`${libFolder}`)

var dataFile = `${dataFolder}${toolkit}-all-classes-flatten.json`
log(`dataFile`,`${dataFile}`)
var data = require(dataFile)

launch(framework, data, srcFolder, libFolder, templateToolkitFolder)

var val = 'copy'
var str = new Array((19 - val.length) + 1).join( ' ' );
log(`${val}${str}`,`from ${packageFolder} to ${toolkitFolder}`)

//log(`${('copy' + '               ').substr(-19)}: from ${packageFolder} to ${toolkitFolder}`)
fs.copySync(packageFolder, toolkitFolder)
log(``,`done`)


function launch(framework, data, srcFolder, libFolder, templateToolkitFolder) {

  var num = 0;
  var items = data.global.items;

  var extension
  switch(framework) {
    case 'angular':
      extension = 'ts'
      break;
    case 'webcomponents':
      extension = 'js'
      break;
    default:
      extension = 'js'
      break;
  }

  log(`item count`,`${items.length}`)
  log(``,`**************`)

  for (i = 0; i < items.length; i++) { 
    var o = items[i];
    if (o.alias != undefined) {
      if (o.alias.substring(0, 6) == 'widget') {
        var aliases = o.alias.split(",")
        for (alias = 0; alias < aliases.length; alias++) {
          if (aliases[alias].substring(0, 6) == 'widget') {
            if (o.items != undefined) {
              num++;
              o.xtype = aliases[alias].substring(7)
              ///testing
              if (o.xtype == 'grid'  || o.xtype == 'button') {
                oneItem(o, libFolder, framework, extension, num, o.xtype, alias)
              }
            }
            else {
              console.log(``,'not: ' + o.name + ' - ' + o.alias)
            }
          }
        }
      }
    }
  }
  log(``,`**************`)

  exports = exports.substring(0, exports.length - 2); exports = exports + newLine
  declarations = declarations.substring(0, declarations.length - 2); declarations = declarations + newLine

  switch(framework) {
    case 'angular':
      var publicApiFile = `${srcFolder}public_api.${extension}`
      fs.writeFile(publicApiFile, doPublic_Api(exportall, templateToolkitFolder), function(err) {if(err) { return console.log(err); } });
      log(`publicApiFile`,`${publicApiFile}`)
      var classFile = `${libFolder}ext-class.component.${extension}`
      fs.writeFile(classFile, doExtClass(), function(err) {if(err){return console.log(err);} })
      log(`classFile`,`${classFile}`)
      var baseFile = `${libFolder}base.${extension}`
      fs.writeFile(baseFile, doExtBase(templateToolkitFolder), function(err) {if(err){return console.log(err);} })
      log(`baseFile`,`${baseFile}`)
      var moduleFile = `${libFolder}ext-angular.module.ts`
      fs.writeFile(moduleFile, doModule(imports, exports, declarations), function(err) {if(err) { return console.log(err); } });
      log(`moduleFile`,`${moduleFile}`)

    break
    case 'webcomponents':
      fs.writeFile(`${libFolder}base.${extension}`, doExtBase(templateToolkitFolder), function(err) {if(err){return console.log(err);} })
      break
    default:
      break
  }
}

function oneItem(o, libFolder, framework, extension, num, xtype, alias) {
  var classname =  o.xtype.replace(/-/g, "_")
  var capclassname = classname.charAt(0).toUpperCase() + classname.slice(1)
  var classFile = `${libFolder}ext-${classname}.component.${extension}`

  log(("  " + num).substr(-3) + '.' + alias + ' - ' + xtype, classFile)


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
      sPROPERTIES = `${sPROPERTIES}    '${config.name}',${newLine}`
      var type = ''
      if (config.type == undefined) {
        log(`config.type is any`,`${config.name}`)
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
  var allClasses = "";
  allClasses = allClasses + tab + "'" + o.name + "'," + tab + "// xtype='" + classname + "'" + newLine;

  switch(framework) {
    case 'angular':
      fs.writeFile(`${classFile}.${extension}`, doClass(o.xtype, sGETSET, sMETHODS, sPROPERTIES, sPROPERTIESOBJECT, sEVENTS, sEVENTNAMES, o.name, classname, capclassname, templateToolkitFolder), function(err) {if(err) { return console.log(err); }});
      break;
    case 'webcomponents':
      fs.writeFile(`${classFile}.${extension}`, doClass(o.xtype, sGETSET, sMETHODS, sPROPERTIES, sPROPERTIESOBJECT, sEVENTS, sEVENTNAMES, o.name, classname, capclassname, templateToolkitFolder), function(err) {if(err) { return console.log(err); }});
      break;
    default:
      break;
  }

  imports = imports + `import { Ext${capclassname}Component } from './ext-${classname}.component';${newLine}`
  declarations = declarations + `Ext${capclassname}Component,${newLine}`
  exports = exports + `Ext${capclassname}Component,${newLine}`
  exportall = exportall + `export * from './lib/ext-${classname}.component';${newLine}`
}

// function doRootfile(fileName, toolkit, folderName) {
//   var p = path.resolve(__dirname, 'filetemplates/rootFolder/' + fileName + '.tpl')
//   var content = fs.readFileSync(p).toString()
//   var values = {
//     toolkit: toolkit,
//     folderName: folderName,
//   }
//   var tpl = new Ext.XTemplate(content)
//   var t = tpl.apply(values)
//   delete tpl
//   fs.writeFile(rootFolder + '/' + fileName, t, function(err) {if(err) { return console.log(err) }})
// }

function doClass(xtype, sGETSET, sMETHODS, sPROPERTIES, sPROPERTIESOBJECT, sEVENTS, sEVENTNAMES, name, classname, capclassname, templateToolkitFolder) {
  var p = path.resolve(templateToolkitFolder + '/class.tpl')
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
function doExtBase(templateToolkitFolder) {
  //var p = path.resolve(__dirname, 'filetemplates/' + framework + '/base.tpl')
  var p = path.resolve(templateToolkitFolder + '/base.tpl')
  var content = fs.readFileSync(p).toString()
  return content
}

// function doIndex(lib) {
// return `export * from './${lib}ExtAngularModule'
// export * from './${lib}ExtClass'
// `
// }

function doPublic_Api(exportall, templateToolkitFolder) {
  //var p = path.resolve(__dirname, 'filetemplates/' + framework + '/public_api.tpl')
  var p = path.resolve(templateToolkitFolder + '/public_api.tpl')
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
