'use strict';

function Router(routes) {
    try {
        if (!routes) {
            throw 'error: routes param is mandatory';
        }
        this.constructor(routes);
        this.init();
    } catch (e) {
        console.error(e);   
    }
}

Router.prototype = {
    routes: undefined,
    rootElem: undefined,
    constructor: function (routes) {
        this.routes = routes;
        this.rootElem = document.getElementById('route');
    },
    init: function () {
        var r = this.routes;
        (function(scope, r) { 
            window.addEventListener('hashchange', function (e) {
                scope.hasChanged(scope, r);
            });
        })(this, r);
        this.hasChanged(this, r);
    },
    hasChanged: function(scope, r){
        if (window.location.hash.length > 0) {
            for (var i = 0, length = r.length; i < length; i++) {
                var route = r[i];
                if(route.isActiveRoute(window.location.hash.substr(1))) {
                    scope.goToRoute(route.htmlName);
                }
            }
        } else {
            for (var i = 0, length = r.length; i < length; i++) {
                var route = r[i];
                if(route.default) {
                    scope.goToRoute(route.htmlName);
                }
            }
        }
    },
    goToRoute: function (htmlName) {
        (function(scope) {
            var url = htmlName,
                xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                  scope.rootElem.innerHTML = this.responseText;
                }
            };
            xhttp.open('GET', url, true);
            xhttp.send();
        })(this);
    }
};

(function () {
class ExtRouter extends HTMLElement {

  get padding(){return this.getAttribute('padding')};set padding(padding){this.setAttribute('padding',padding)}

  constructor() {
    super()
  }

  connectedCallback() {
    var me = this;
    Ext.onReady(function(){
      setTimeout(function() { 
        var div = document.createElement("DIV");
        div.setAttribute("id", "route");
        div.style.width="100%";
        div.style.height="100%";
        div.style.padding=me.padding;
        var el = Ext.get(div);
        var props = {};
        props.xtype = 'widget'
        props.element = el;
        me.ext = Ext.create(props)
        var nodeParentName = me.parentNode.nodeName
        if (nodeParentName.substring(0, 3) == 'EXT') {
          var parentCmp = me.parentNode['ext'];
          var childCmp = me.ext;
          parentCmp.add(childCmp)
          //console.log(`${parentCmp.xtype}.add(${childCmp.xtype})`)
        }
        setTimeout(function() { 
          var router = new Router(window.routes);
        }, 50);
      }, 50);
    })
  }

  disconnectedCallback() {
    delete this.ext
    console.log('ExtBase disconnectedCallback')
  }
}
window.customElements.define('ext-router', ExtRouter);
})();