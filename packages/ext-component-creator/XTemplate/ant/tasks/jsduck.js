/*
 * This file contains the guts of the <x-jsduck> task.
 */

(function () {
    var falseRe = /false|0|no|off/i,
        fileRe = /^`([^`]+)`$/;

    var PATH = function (value, name) {
            return '--' + name + '=' + project.resolveFile(value);
        },
        FILE = function (value, name) {
            var match = fileRe.exec(value),
                content = value;

            if (match) {
                content = readFile(project.resolveFile(value));
            }

            return '--' + name + '=' + content;
        },
        BOOL = function (value, name) {
            if (!value || falseRe.test(value)) {
                return null;
            }
            return '--' + name;
        },
        TEXT = function (value, name) {
            return '--' + name + '=' + value;
        }

    var handlers = {
            outdir: function (value) {
                return '--output=' + project.resolveFile(value);
            },
            "ignore-global": BOOL,
            external: TEXT,
            "builtin-classes": BOOL,
            "meta-tags": PATH,

            warnings: function (value) {
                if (value == 'none') {
                    return '--warnings=-all';
                }
                return '--warnings=' + value;
            },

            verbose: BOOL,

            title: TEXT,
            footer: TEXT,
            "head-html": FILE,
            "body-html": FILE,
            welcome: PATH,
            guides: PATH,
            videos: PATH,
            examples: PATH,
            stats: BOOL,
            categories: PATH,
            "pretty-json": BOOL,
            images: PATH,
            "link-tpl": FILE,
            "img-tpl": FILE,
            'export': TEXT,
            seo: BOOL,
            "eg-iframe": PATH,
            processes: TEXT,
            template: PATH,
            "template-links": PATH,
            "extjs-path": TEXT,
            "local-storage-db": TEXT,
            "touch-examples-ui": BOOL,
            "ext-namespace": TEXT,
            "examples-base-url": TEXT,
            config: PATH
        };

    var args = [],
        file, inputs, name, value, s;

    // Convert the attributes into options at one arg each:
    //
    for (name in handlers) {
        value = attributes.get(name);
        if (value !== null) {
            s = handlers[name](String(value), name);
            if (s) {
                args.push(s);
            }
        }
    }

    // For each directory or file specified, append the paths as arguments:
    //
    for (inputs = new FileSequence({
                        dirs: elements.get('dir')
                    }).append(new FileSetSequence({
                        fileSets: elements.get('files')
                    }));
                (file = inputs.next()); ) {
        args.push(file);
    }

    exec('jsduck', args, { capture: false });
})();
