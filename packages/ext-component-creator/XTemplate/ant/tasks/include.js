/*
 * This file contains the guts of the <process-includes> task.
 */

/**
 * Process the includes as described by the params.
 * @param {Object} params The parameters for the task
 * @param {String} params.src The srcfile attribute fully resolved
 * @param {String} params.out The outfile attribute fully resolved and defaulting to src.
 * @param {RegExp} params.regex The regex to match include statements.
 */
function processIncludes (params) {
    self.log('Read: ' + params.src);

    var lines = readLines(params.src),
        include, match;

    for (var i = 0, n = lines.length; i < n; ++i) {
        match = params.regex.exec(lines[i]);
        if (match) {
            include = project.resolveFile(match[1]);
            self.log('Include: ' + include);
            lines[i] = readFile(include);
        }
    }

    self.log('Write: ' + params.out);
    writeLines(params.out, lines);
}

// Packs up the task parameters from the funky Ant way of retrieving them.
(function () {
    var src = project.resolveFile(attributes.get('srcfile'));

    processIncludes({
        src: src,
        out: attributes.get('outfile') || src,
        regex: new RegExp(attributes.get('regex') || '^\\s*#include\\s+\\"(.+)\\"\\s*$')
    });
})();
