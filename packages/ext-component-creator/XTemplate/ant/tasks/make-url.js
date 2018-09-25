/*
 * This file contains the guts of the <make-url> task.
 */

// Packs up the task parameters from the funky Ant way of retrieving them.
(function () {
    var query = [],
        queryEls = elements.get('query'),
        n = queryEls ? queryEls.size() : 0,
        crlfRe = /\s*[\n\r]\s*/g,
        trimRe = /^\s+|\s+$/g,
        attrs, i, el, name, value, wrap;

    for (i = 0; i < n; ++i) {
        el = queryEls.get(i);
        wrap = el.getRuntimeConfigurableWrapper();
        attrs = wrap.getAttributeMap();

        name = String(attrs.get('param'));
        value = String(project.replaceProperties(attrs.get('value') || wrap.getText())).replace(crlfRe, ' ').replace(trimRe, '');
        //self.log(name + ': ' + value);
        
        query.push({ name: name, value: value });
    }

    var url = makeUrl({
        scheme: attributes.get('scheme'),
        host: attributes.get('host'),
        port: attributes.get('port'),
        path: attributes.get('path'),
        fragment: attributes.get('fragment'),
        query: query
    });

    project.setProperty(attributes.get('property'), url);
})();
