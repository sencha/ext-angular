"use strict"

export function getValidateOptions() {
  return {
    "type": "object",
    "properties": {
      "framework":   {"type": [ "string" ]},
      "port":        {"type": [ "integer" ]},
      "emit":        {"type": [ "boolean" ]},
      "browser":     {"type": [ "boolean" ]},
      "watch":       {"type": [ "string" ]},
      "profile":     {"type": [ "string" ]},
      "environment": {"type": [ "string" ]},
      "verbose":     {"type": [ "string" ]},
      "theme":       {"type": [ "string" ]},
      "toolkit":     {"type": [ "string" ]},
      "packages":    {"type": [ "string", "array" ]}
    },
    "additionalProperties": false
    // "errorMessage": {
    //   "option": "should be {Boolean} (https:/github.com/org/repo#anchor)"
    // }
  }
}

export function getDefaultOptions() {
  return {
    port: 1962,
    emit: true,
    browser: true,
    watch: 'yes',
    profile: '', 
    environment: 'development', 
    verbose: 'no',
    toolkit: 'modern',
    packages: null
  }
}

export function getDefaultVars() {
  return {
    watchStarted : false,
    firstTime : true,
    firstCompile: true,
    browserCount : 0,
    manifest: null,
    extPath: 'ext-angular',
    pluginErrors: [],
    deps: [],
    rebuild: true
  }
}

function toXtype(str) {
  return str.toLowerCase().replace(/_/g, '-')
}

export function extractFromSource(module, options, compilation) {
  try {
    var js = module._source._value
    const logv = require('./pluginUtil').logv
    logv(options,'FUNCTION extractFromSource')
    var statements = []
    if (module.resource.match(/\.html$/)) {

      var generate = require("@babel/generator").default
      var parse = require("babylon").parse
      var traverse = require("ast-traverse")

      var ast = parse(js, {
        plugins: [
          'typescript',
          'flow',
          'doExpressions',
          'objectRestSpread',
          'classProperties',
          'exportDefaultFrom',
          'exportExtensions',
          'asyncGenerators',
          'functionBind',
          'functionSent',
          'dynamicImport'
        ],
        sourceType: 'module'
      })

      function addType(argNode) {
        var type

        if (argNode.type === 'StringLiteral') {
          var xtype = toXtype(argNode.value)

          if (xtype != 'extreact') {
            type = {
              xtype: toXtype(argNode.value)
            }
          }
        } else {
          type = {
            xclass: js.slice(argNode.start, argNode.end)
          }
        }

        if (type != undefined) {
          let config = JSON.stringify(type)
          statements.push(`Ext.create(${config})`)
        }
      }

      traverse(ast, {
        pre: function (node) {
          if (node.type === 'CallExpression' && node.callee && node.callee.object && node.callee.object.name === 'Ext') {
            statements.push(generate(node).code)
          }
          if(node.type === 'StringLiteral') {
            let code = node.value
            for (var i = 0; i < code.length; ++i) {
              if (code.charAt(i) == '<') {
                if (resource.match(/\.html$/) && code.substr(i, 4) == '<!==') {
                  i += 4
                  i += code.substr(i).indexOf('-->') + 3
                  continue
                } else if (code.charAt(i+1) !== '/') {
                  var start = code.substring(i)
                  var end = start.indexOf(' ')
                  if (end >= 0) {
                    var xtype = start.substring(1, end)
                    // TODO add condition to check for ext componenets only.
                    // Donot need toXtype here since it can safely be assumend the selector is same as xtype for all components defined.
                    var type = { xtype: toXtype(xtype) }
                    let config = JSON.stringify(type)
                    statements.push(`Ext.create(${config})`)
                  }
                }
              }
              // Probably not required
              if (node.type == 'VariableDeclarator' && node.init && node.init.type == 'CallExpression' && node.init.callee) {
                if (node.init.callee.name == 'reactify') {
                  for (let i = 0; i < node.init.arguments.length; i++) {
                    const valueNode = node.init.arguments[i]
                    if (!valueNode) continue
                    addType(valueNode)
                  }
                }
              }
            }
          }
        }
      })

    }

    console.log('$$$$$$$$$$$$$$$4 statements are')
    console.log(statements)
    return statements
  }
  catch(e) {
    console.log(e)
    compilation.errors.push('extractFromSource: ' + e)
    return []
  }
}
