//node all.js angular modern
//node all.js components modern

var path = require('path')
require('./XTemplate')
const rimraf = require('rimraf')
const mkdirp = require('mkdirp')
const ncp = require('ncp').ncp
var fs = require('fs-extra')
var newLine = '\n'
var tb = '	'

var moduleVars = {}
moduleVars.imports = ''
moduleVars.declarations = ''
moduleVars.exports = ''

log(``,`\n ext-component-generator \n`)

var framework = process.argv[2]
var toolkit  = process.argv[3]
var environment = process.argv[4]
//var environment = 'prod'
var components = process.argv[5]
//var components = ['grid','button']
if (processArgs(framework, toolkit) == -1) return

var generatedFolders      = './GeneratedFolders/';                        log(`generatedFolders`,`${generatedFolders}`)
var templateBaseFolder    = './filetemplates/';                           log(`templateBaseFolder`,`${templateBaseFolder}`)
var templateToolkitFolder = path.resolve(templateBaseFolder + framework); log(`templateToolkitFolder`,`${templateToolkitFolder}`)
var allClassesFilesFolder = './AllClassesFiles/';                         log(`allClassesFilesFolder`,`${allClassesFilesFolder}`)

if (!fs.existsSync(generatedFolders)) {
  mkdirp.sync(generatedFolders)
  log(`created`,`${generatedFolders}`)
}
else {
  log(`exists`,`${generatedFolders}`)
}

//var baseFolder = 'ext-' + framework + '-' + toolkit; log(`baseFolder`,`${baseFolder}`)
var baseFolder = 'ext-' + framework; log(`baseFolder`,`${baseFolder}`)

var toolkitFolder = generatedFolders + baseFolder;         log(`toolkitFolder`,`${toolkitFolder}`)
var srcFolder = toolkitFolder + '/src/';             log(`srcFolder`,`${srcFolder}`)
var libFolder = srcFolder + 'lib/';                  log(`libFolder`,`${libFolder}`)

rimraf.sync(toolkitFolder);log(`deleted`,`${toolkitFolder}`)
mkdirp.sync(toolkitFolder);log(`created`,`${toolkitFolder}`)
mkdirp.sync(srcFolder);    log(`created`,`${srcFolder}`)
mkdirp.sync(libFolder);    log(`created`,`${libFolder}`)

var dataFile = `${allClassesFilesFolder}${toolkit}-all-classes-flatten.json`
log(`dataFile`,`${dataFile}`)
var data = require(dataFile)

//*************
launch(framework, data, srcFolder, libFolder, templateToolkitFolder, moduleVars, baseFolder)

var val = 'copy';var str = new Array((19 - val.length) + 1).join( ' ' );
//toFolder = path.resolve(`./../../generators/ext-${framework}-${toolkit}/src`)
toFolder = path.resolve(`./../../generators/${baseFolder}/src`)

log(`toFolder`,`${toFolder}`)
rimraf.sync(toFolder);log(`deleted`,`${toFolder}`)
log(`ncp${str}`,`from ${srcFolder} to ${toFolder}`)
ncp(srcFolder, toFolder, function (err) {
  if (err) {
    return console.error(err)
  }
  log(``,`done`)
 })

//*************
function launch(framework, data, srcFolder, libFolder, templateToolkitFolder, moduleVars, baseFolder) {

  var extension
  switch(framework) {
    case 'angular':
      extension = 'ts'
      break;
    case 'components':
      extension = 'js'
      break;
    default:
      extension = 'js'
      break;
  }



  switch(framework) {
    case 'angular':

    // moduleVars.imports = moduleVars.imports + `import { ExtAngularLaunchComponent } from './ext-angular-launch.component';${newLine}`
    // moduleVars.exports = moduleVars.exports + `    ExtAngularLaunchComponent,${newLine}`
    // moduleVars.declarations = moduleVars.declarations + `    ExtAngularLaunchComponent,${newLine}`
    // var launchFile = `${libFolder}ext-angular-launch.component.${extension}`
    // fs.writeFile(launchFile, doLaunchComponent(templateToolkitFolder), function(err) {if(err){return console.log(err);} })
    // log(`launchFile`,`${launchFile}`);


      moduleVars.imports = moduleVars.imports + `import { ExtAngularBootstrapComponent } from './ext-angular-bootstrap.component';${newLine}`
      moduleVars.exports = moduleVars.exports + `    ExtAngularBootstrapComponent,${newLine}`
      moduleVars.declarations = moduleVars.declarations + `    ExtAngularBootstrapComponent,${newLine}`
      var bootstrapComponentFile = `${libFolder}ext-angular-bootstrap.component.${extension}`
      fs.writeFile(bootstrapComponentFile, doBootstrapComponent(templateToolkitFolder), function(err) {if(err){return console.log(err);} })
      log(`bootstrapComponentFile`,`${bootstrapComponentFile}`);

      moduleVars.imports = moduleVars.imports + `import { ExtAngularBootstrapService } from './ext-angular-bootstrap.service';${newLine}`
//     moduleVars.exports = moduleVars.exports + `    ExtAngularBootstrapService,${newLine}`
//     moduleVars.declarations = moduleVars.declarations + `    ExtAngularBootstrapService,${newLine}`
      var bootstrapServiceFile = `${libFolder}ext-angular-bootstrap.service.${extension}`
      fs.writeFile(bootstrapServiceFile, doBootstrapService(templateToolkitFolder), function(err) {if(err){return console.log(err);} })
      log(`bootstrapServiceFile`,`${bootstrapServiceFile}`);


      // moduleVars.imports = moduleVars.imports + `import { ExtOrgChartComponent } from './ext-orgchart.component';${newLine}`
      // moduleVars.exports = moduleVars.exports + `    ExtOrgChartComponent,${newLine}`
      // moduleVars.declarations = moduleVars.declarations + `    ExtOrgChartComponent,${newLine}`
      // var orgChartFile = `${libFolder}ext-orgchart.component.${extension}`
      // fs.writeFile(orgChartFile, doOrgChart(templateToolkitFolder), function(err) {if(err){return console.log(err);} })
      // log(`orgChartFile`,`${orgChartFile}`);

      // moduleVars.imports = moduleVars.imports + `import { ExtTransitionComponent } from './ext-transition.component';${newLine}`
      // moduleVars.exports = moduleVars.exports + `    ExtTransitionComponent,${newLine}`
      // moduleVars.declarations = moduleVars.declarations + `    ExtTransitionComponent,${newLine}`
      // var transitionFile = `${libFolder}ext-transition.component.${extension}`
      // fs.writeFile(transitionFile, doTransition(templateToolkitFolder), function(err) {if(err){return console.log(err);} })
      // log(`transitionFile`,`${transitionFile}`)

      break
    case 'components':
      var routerFile = `${libFolder}aa-router.component.js`
      fs.writeFile(routerFile, doRouter(templateToolkitFolder), function(err) {if(err){return console.log(err);} })
      log(`routerFile`,`${routerFile}`);
      break
    default:
      break
    }

    var num = 0
    var items = data.global.items
    log(`item count`,`${items.length}`)

  log(``,`************** following items can be copy/pasted into excel (paste special... text)`)

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
              if (environment == 'dev') {
                //if (o.xtype == 'container'  || o.xtype == 'button') {
                  oneItem(o, libFolder, framework, extension, num, o.xtype, alias, moduleVars)
                //}
              }
              // else if (components.includes(o.xtype)) {
              // if (o.xtype == 'container'  || o.xtype == 'button') {
              //   oneItem(o, libFolder, framework, extension, num, o.xtype, alias, moduleVars)
              // }
              // }
            }
            else {
              //console.log(``,'not: ' + o.name + ' - ' + o.alias)
            }
          }
        }
      }
    }
  }

  log(``,`**************`)

  // moduleVars.imports = moduleVars.imports.substring(0, moduleVars.imports.length - 2); moduleVars.imports = moduleVars.imports + ';' + newLine
  // moduleVars.imports = moduleVars.imports + `import { ExtClassComponent } from './ext-class.component';${newLine}`
  // moduleVars.exports = moduleVars.exports + `    ExtClassComponent${newLine}`
  // moduleVars.declarations = moduleVars.declarations + `    ExtClassComponent${newLine}`

  moduleVars.imports = moduleVars.imports.substring(0, moduleVars.imports.length - 2); moduleVars.imports = moduleVars.imports + ';' + newLine
  //moduleVars.imports = moduleVars.imports + `import { ExtClassComponent } from './ext-class.component';${newLine}`

  moduleVars.exports = moduleVars.exports.substring(0, moduleVars.exports.length - 2); moduleVars.exports = moduleVars.exports + '' + newLine
  //moduleVars.exports = moduleVars.exports + `    ExtClassComponent${newLine}`

  moduleVars.declarations = moduleVars.declarations.substring(0, moduleVars.declarations.length - 2); moduleVars.declarations = moduleVars.declarations + '' + newLine
  //moduleVars.declarations = moduleVars.declarations + `    ExtClassComponent${newLine}`

  var exportall = ''
  //exportall = exportall + `export * from './lib/ext-${framework}-${toolkit}.module';${newLine}`
  exportall = exportall + `export * from './lib/${baseFolder}.module';${newLine}`

  switch(framework) {
    case 'angular':
      var publicApiFile = `${srcFolder}public_api.${extension}`
      fs.writeFile(publicApiFile, doPublic_Api(exportall, templateToolkitFolder), function(err) {if(err) { return console.log(err); } });
      log(`publicApiFile`,`${publicApiFile}`)
      //var classFile = `${libFolder}ext-class.component.${extension}`
      //fs.writeFile(classFile, doExtClass(), function(err) {if(err){return console.log(err);} })
      //log(`classFile`,`${classFile}`)
      var baseFile = `${libFolder}base.${extension}`
      fs.writeFile(baseFile, doExtBase(templateToolkitFolder), function(err) {if(err){return console.log(err);} })
      log(`baseFile`,`${baseFile}`)
      var moduleFile = `${libFolder}${baseFolder}.module.ts`
      //var moduleFile = `${libFolder}ext-${framework}-${toolkit}.module.ts`
      fs.writeFile(moduleFile, doModule(moduleVars), function(err) {if(err) { return console.log(err); } });
      log(`moduleFile`,`${moduleFile}`)
    break
    case 'components':
      fs.writeFile(`${libFolder}base.${extension}`, doExtBase(templateToolkitFolder), function(err) {if(err){return console.log(err);} })

      var indexFile = `${libFolder}index.js`
      fs.writeFile(indexFile, doIndex(moduleVars), function(err) {if(err) { return console.log(err); } });
      log(`indexFile`,`${indexFile}`)

      break
    default:
      break
  }

}

function doIndex(moduleVars) {
  var p = path.resolve(__dirname, 'filetemplates/' + framework + '/index.tpl')
  var content = fs.readFileSync(p).toString()
  var values = {
    imports: moduleVars.imports,
    exports: moduleVars.exports
  }
  var tpl = new Ext.XTemplate(content)
  var t = tpl.apply(values)
  delete tpl
  return t
 }


function oneItem(o, libFolder, framework, extension, num, xtype, alias, moduleVars) {
  var classname =  o.xtype.replace(/-/g, "_")
  var capclassname = classname.charAt(0).toUpperCase() + classname.slice(1)
  var classFile = `${libFolder}ext-${o.xtype}.component.${extension}`
  //console.log(`${xtype}${tb}${tb}${('  ' + num).substr(-3)}_${alias}${tb}${classFile}`)
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
    var haveResponsiveConfig = false
    configsArray[0].items.forEach(function (config, index, array) {
      sPROPERTIES = `${sPROPERTIES}    '${config.name}',${newLine}`
      var type = ''
      if (config.type == undefined) {
        //log('', `${xtype}${tb}${config.name}`)
        type = 'any'
      }
      else {
        type = config.type.replace(/"/g, "\'");
      }
      if (config.name == 'responsiveConfig') {
        haveResponsiveConfig = true
      }
      sPROPERTIESOBJECT = `${sPROPERTIESOBJECT}    "${config.name}": "${type}",${newLine}`;
      sGETSET = sGETSET + tab + `get ${config.name}(){return this.getAttribute('${config.name}')};set ${config.name}(${config.name}){this.setAttribute('${config.name}',${config.name})}\n`
    });

    sPROPERTIES = `${sPROPERTIES}    'platformConfig',${newLine}`
    if (haveResponsiveConfig == false) {
      sPROPERTIES = `${sPROPERTIES}    'responsiveConfig',${newLine}`
    }
    sPROPERTIES = `${sPROPERTIES}    'align',${newLine}`
    sPROPERTIES = `${sPROPERTIES}    'fitToParent',${newLine}`
    sPROPERTIES = `${sPROPERTIES}    'config'${newLine}`

    sPROPERTIESOBJECT = `${sPROPERTIESOBJECT}    "platformConfig": "Object",${newLine}`;
    if (haveResponsiveConfig == false) {
      sPROPERTIESOBJECT = `${sPROPERTIESOBJECT}    "responsiveConfig": "Object",${newLine}`;
    }
    sPROPERTIESOBJECT = `${sPROPERTIESOBJECT}    "align": "Obyect",${newLine}`;
    sPROPERTIESOBJECT = `${sPROPERTIESOBJECT}    "fitToParent": "Boolean",${newLine}`;
    sPROPERTIESOBJECT = `${sPROPERTIESOBJECT}    "config": "Object",${newLine}`;

    var eventName = ''
    eventName = 'platformConfig';sGETSET = sGETSET + tab + `get ${eventName}(){return this.getAttribute('${eventName}')};set ${eventName}(${eventName}){this.setAttribute('${eventName}',${eventName})}\n`
    if (haveResponsiveConfig == false) {
      eventName = 'responsiveConfig';sGETSET = sGETSET + tab + `get ${eventName}(){return this.getAttribute('${eventName}')};set ${eventName}(${eventName}){this.setAttribute('${eventName}',${eventName})}\n`
    }
    eventName = 'align';sGETSET = sGETSET + tab + `get ${eventName}(){return this.getAttribute('${eventName}')};set ${eventName}(${eventName}){this.setAttribute('${eventName}',${eventName})}\n`
    eventName = 'fitToParent';sGETSET = sGETSET + tab + `get ${eventName}(){return this.getAttribute('${eventName}')};set ${eventName}(${eventName}){this.setAttribute('${eventName}',${eventName})}\n`
    eventName = 'config';sGETSET = sGETSET + tab + `get ${eventName}(){return this.getAttribute('${eventName}')};set ${eventName}(${eventName}){this.setAttribute('${eventName}',${eventName})}\n`

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

      var eventName = 'on' + event.name
      sGETSET = sGETSET + tab + `get ${eventName}(){return this.getAttribute('${eventName}')};set ${eventName}(${eventName}){this.setAttribute('${eventName}',${eventName})}\n`

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
      fs.writeFile(`${classFile}`, doClass(o.xtype, sGETSET, sMETHODS, sPROPERTIES, sPROPERTIESOBJECT, sEVENTS, sEVENTNAMES, o.name, classname, capclassname, templateToolkitFolder), function(err) {if(err) { return console.log(err); }});
      break;
    case 'components':
      fs.writeFile(`${classFile}`, doClass(o.xtype, sGETSET, sMETHODS, sPROPERTIES, sPROPERTIESOBJECT, sEVENTS, sEVENTNAMES, o.name, classname, capclassname, templateToolkitFolder), function(err) {if(err) { return console.log(err); }});
      break;
    default:
      break;
  }

  moduleVars.imports = moduleVars.imports + `import { Ext${capclassname}Component } from './ext-${o.xtype}.component';${newLine}`
  moduleVars.exports = moduleVars.exports + `    Ext${capclassname}Component,${newLine}`
  moduleVars.declarations = moduleVars.declarations + `    Ext${capclassname}Component,${newLine}`

  //exportall = exportall + `export * from './lib/ext-${classname}.component';${newLine}`
}

// function doRootfile(fileName, toolkit, baseFolder) {
//   var p = path.resolve(__dirname, 'filetemplates/generatedFolders/' + fileName + '.tpl')
//   var content = fs.readFileSync(p).toString()
//   var values = {
//     toolkit: toolkit,
//     baseFolder: baseFolder,
//   }
//   var tpl = new Ext.XTemplate(content)
//   var t = tpl.apply(values)
//   delete tpl
//   fs.writeFile(generatedFolders + '/' + fileName, t, function(err) {if(err) { return console.log(err) }})
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

// function doLaunchComponent(templateToolkitFolder) {
//   var p = path.resolve(templateToolkitFolder + '/ext-angular-launch.component.tpl')
//   var content = fs.readFileSync(p).toString()
//   return content
// }

function doBootstrapComponent(templateToolkitFolder) {
  var p = path.resolve(templateToolkitFolder + '/ext-angular-bootstrap.component.tpl')
  var content = fs.readFileSync(p).toString()
  return content
}

function doBootstrapService(templateToolkitFolder) {
  var p = path.resolve(templateToolkitFolder + '/ext-angular-bootstrap.service.tpl')
  var content = fs.readFileSync(p).toString()
  return content
}

function doRouter(templateToolkitFolder) {
  var p = path.resolve(templateToolkitFolder + '/aa-router.component.tpl')
  var content = fs.readFileSync(p).toString()
  return content
}



// function doOrgChart(templateToolkitFolder) {
//   var p = path.resolve(templateToolkitFolder + '/orgchart.tpl')
//   var content = fs.readFileSync(p).toString()
//   return content
// }

// function doTransition(templateToolkitFolder) {
//   var p = path.resolve(templateToolkitFolder + '/transition.tpl')
//   var content = fs.readFileSync(p).toString()
//   return content
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

function doModule(moduleVars) {
  var p = path.resolve(__dirname, 'filetemplates/' + framework + '/module.tpl')
  var content = fs.readFileSync(p).toString()
  var values = {
    toolkit: toolkit.charAt(0).toUpperCase() + toolkit.slice(1),
    imports: moduleVars.imports,
    exports: moduleVars.exports,
    declarations: moduleVars.declarations
  }
  var tpl = new Ext.XTemplate(content)
  var t = tpl.apply(values)
  delete tpl
  return t
 }

function doExtClass() {
  return `declare var Ext: any
import { Component } from '@angular/core';
@Component({
  selector: 'ext-class', 
  template: '<ng-template #dynamic></ng-template>'
})
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

function processArgs(framework, toolkit) {
  if(framework == undefined) {
    log(``,`framework: ${framework} is incorrect.  should be components or angular`)
    return -1
  }
  if ((framework != 'components') && (framework != 'angular')) {
    log(``,`framework: ${framework} is incorrect.  should be components or angular`)
    return -1
  }
  if(toolkit == undefined) {
    log(``,`toolkit: ${toolkit} is incorrect.  should be modern or classic`)
    log(``,'node all.js modern angular')
    return -1
  }
  if ((toolkit != 'modern') && (toolkit != 'classic')) {
    log(``,`toolkit: ${toolkit} is incorrect.  should be modern or classic`)
    return -1
  }
  log(`framework`,`${framework}`)
  log(`toolkit`,`${toolkit}`)
}

function log(v,s) {
  var blanks
  if (v == '') {
    blanks = ''
  }
  else {
    blanks = new Array((25 - v.length) + 1).join( ' ' )
    blanks = blanks + ': '
  }
  console.log(`${v}${blanks}${s}`)
}