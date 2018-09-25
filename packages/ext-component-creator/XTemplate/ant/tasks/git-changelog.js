/*
 * This file contains the guts of the x-git-changelog task.
 */

function updateCommitLog (params) {
    var args = [
            'whatchanged',
            '--name-only',
            '--no-merges',
            "--since='1 week ago'"
        ],
        changeLog = readLines(params.src, false),
        prefix = [],
        match, i, n;

    if (changeLog && changeLog.length) {
        for (i = 0, n = changeLog.length; i < n; ++i) {
            match = /\(commit ([0-9a-f]+)\)/i.exec(changeLog[i]); // see format below
            if (match) {
                args[3] = match[1] + '..';
                break;
            }
        }

        if (params.out != params.src) {
            echo('Updating commitlog ' + params.src + ' to ' + params.out);
        } else {
            echo('Updating commitlog at ' + params.out);
        }
    } else {
        echo('Creating commitlog at ' + params.out);
        changeLog = [];
    }

    var head = getCurrentCommitHash(),
        buf = [ exec('git', args).output, '\n' ];

    prefix.push(
        '-------------------------------------------------------------------------------',
        // this format is used above to limit the "since" in the git log call:
        'Commits in build on ' + (new Date()).toString() + '\n' + '(commit '+head+')',
        '-------------------------------------------------------------------------------'
    );

    writeLines(params.out, prefix.concat(buf).concat(changeLog));
}

/**
 * Generates the Jira changelog as described by the params.
 * @param {Object} params The parameters for the task
 * @param {String} params.src The srcfile attribute fully resolved
 * @param {String} params.out The outfile attribute fully resolved and defaulting to src.
 * @param {RegExp} params.ticketRegex The regex to match ticket ids.
 */
function updateJiraChangeLog (params) {
    var args = [
            'log',
            '--since=2 weeks ago',
            '--merges',
            '--pretty=format:%s'
        ],
        changeLog = readLines(params.src, false),
        match, prefix, i, n;

    if (changeLog && changeLog.length) {
        for (i = 0, n = changeLog.length; i < n; ++i) {
            match = /\(commit ([0-9a-f]+)\)/i.exec(changeLog[i]); // see format below
            if (match) {
                args[1] = match[1] + '..';
                break;
            }
        }

        prefix = changeLog.splice(0, i);
        changeLog.unshift('<br><hr>');

        if (params.out != params.src) {
            echo('Updating changelog ' + params.src + ' to ' + params.out);
        } else {
            echo('Updating changelog at ' + params.out);
        }
    } else {
        echo('Creating changelog at ' + params.out);
        prefix = ['<html><body>'];
        changeLog = ['</body></html>'];
    }

    function insertMatch (whole, m1) {
        return match[parseInt(m1, 10)];
    }
    var head = getCurrentCommitHash(),
        buf = [],
        logEntries = exec('git', args).output.split('\n'),
        tokenRe = /\{(\d+)\}/g;

    for (i = 0, n = logEntries.length; i < n; ++i) {
        match = params.ticketRegex.exec(logEntries[i]);
        if (match) {
            buf.push('<li>' + params.format.replace(tokenRe, insertMatch) + '</li>');
        }
    }

    if (params.sort) {
        buf.sort();
    }
    buf.push('</ul>','');

    prefix.push(
        // this format is used above to limit the "since" in the git log call:
        '<h1 style="margin:0">Changes in build on '+(new Date()).toString()+'</h1>'+
            '<small>(commit '+head+')</small><ul>'
    );

    writeLines(params.out, prefix.concat(buf).concat(changeLog));
}

// Packs up the task parameters from the funky Ant way of retrieving them.
(function () {
    var src = String(attributes.get('srcfile')),
        ticketRe = attributes.get('ticketregex'),
        out = String(attributes.get('outfile')) || src;

    if (ticketRe) {
        updateJiraChangeLog({
            src: src,
            out: out,
            format: String(attributes.get('format')),
            sort: parseBool(attributes.get('sort')),
            ticketRegex: new RegExp(ticketRe, "i")
        });
    } else {
        updateCommitLog({
            src: src,
            out: out
        });
    }
})();
