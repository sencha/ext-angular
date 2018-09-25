/*
 * This file contains the guts of the <x-jira-query> task.
 */
importPackage(javax.xml.parsers);
importPackage(javax.xml.xpath);

function encodeHtml (text) {
    return text.replace(/\&/g, '&amp;').replace(/\</g, '&lt;');
}

var IN = '    ',
    IN2 = IN + IN,
    IN3 = IN2 + IN,
    IN4 = IN3 + IN;

function echoTickets (data) {
    data.components.forEach(function (component) {
        var tickets = component.tickets,
            ids;

        echo(tickets.length + ' ticket' + ((tickets.length == 1) ? '' : 's') + ' for "' +
                component.text + '"');

        tickets.forEach(function (ticket) {
            (ids || (ids = [])).push(ticket.id);
            if (ids.length == 6) { // about one log line's worth
                echo(IN + ids.join(','));
                ids = [];
            }
        });

        if (ids) {
            echo(IN + ids.join(','));
        }
    });
}

function formatTicketsForForum (out, data) {
    /*
        [SIZE=3][B]Button[/B][/SIZE]
        [LIST]
        [*][B]EXTJSIV-5129[/B] - Button does not adhere to width setting in IE9
        [/LIST]
    */
    data.components.forEach(function (component) {
        var tickets = component.tickets;

        out.push('[SIZE=3][B]' + component.text + '[/B][/SIZE] (' + tickets.length + ')');
        out.push('[LIST]');

        tickets.forEach(function (ticket) {
            out.push(IN+'[*][B]' + ticket.id + '[/B] - ' + (ticket.note || ticket.title));
        });

        out.push('[/LIST]');
    });
}

function formatTicketsHtml (out, data) {
    out.push('<ul>');

    data.components.forEach(function (component) {
        var tickets = component.tickets;

        out.push(IN+'<li class="component">' + component.text + ' (' + tickets.length + ')');
        out.push(IN2+'<ul class="tickets">');

        tickets.forEach(function (ticket) {
            out.push(
                IN3+'<li class="ticket">',
                    IN4+'<span class="ticket-number">'+ticket.id+'</span>'+
                    '&#160;'+
                    '<span class="ticket-notes">'+(ticket.note || ticket.title)+'</span>',
                IN3+'</li>');
        });

        out.push(IN2+'</ul>',IN+'</li>');
    });

    out.push('Total: ' + data.totalCount + '</ul>');
}

function readTickets (queryResult) {
    var docBuilder = DocumentBuilderFactory.newInstance().newDocumentBuilder(),
        doc = docBuilder.parse(queryResult),
        items = doc.getElementsByTagName('item'),
        ticketsByComp = {},
        components = [],
        total = items.getLength(),
        comp, entry, j;

    for (j = 0; j < total; ++j) {
        var item = items.item(j);
        comp = xpathFind(item, 'component/text()') || 'Unknown';
        if (comp == 'Unknown') {
            comp = 'Misc';
        }
        entry = ticketsByComp[comp];

        if (!entry) {
            components.push(ticketsByComp[comp] = entry = {
                        text: comp,
                        tickets: []
                    });
        }

        entry.tickets.push({
            id:    xpathFind(item, 'key/text()'),
            note:  xpathFind(item, 'customfields/customfield[@id="customfield_10350"]/customfieldvalues/customfieldvalue/text()'),
            title: xpathFind(item, 'summary/text()')
        });
    }

    components.sort(function (a, b) {
        return (a.text < b.text) ? -1 : ((b.text < a.text)  ? 1 : 0);
    });

    components.forEach(function (component) {
        component.tickets.sort(function (t1, t2) {
            return (t1.id < t2.id) ? -1 : ((t2.id < t1.id)  ? 1 : 0);
        });
    })

    return {
        components: components,
        totalCount: total
    };
}

/**
 * Process the embedded JQL queries as described by the params.
 * @param {Object} params The parameters for the task
 * @param {String} params.src The srcfile attribute fully resolved
 * @param {String} params.out The outfile attribute fully resolved and defaulting to src.
 * @param {String} params.url The base Jira URL
 * @param {String} params.xsl The XSL file to use to transform the queries
 */
function processJql (params) {
    self.log('Read: ' + params.src);

    var lines = readLines(params.src),
        out = [],
        destFileName1 = params.out + '.$tmp1',
        destFile1 = new File(destFileName1),
        destFileName2 = params.out + '.$tmp2',
        delimRe = /^\s*\#jql(?:\[(.+)\])?\s*$/,
        crlfRe = /\s*[\n\r]\s*/g,
        trimRe = /^\s+|\s+$/g,
        count = 0,
        forumFile, forumout, jql, line, match, data;

    for (var i = 0, n = lines.length; i < n; ++i) {
        line = lines[i];

        if (!(match = delimRe.exec(line))) {
            out.push(line);
        } else {
            var file = (match[1] && String(project.replaceProperties(match[1]))) || params.xsl;

            jql = [];
            while (++i < n) {
                line = lines[i];
                if (delimRe.test(line)) {
                    break;
                }
                jql.push(line);
            }

            ++count;
            jql = jql.join('\n').replace(crlfRe, ' ').replace(trimRe, '');
            echo('Jira Query: ' + jql)
            if (file) {
                echo('XSLT: ' + file);
                if (file.charAt(0) == '.') {
                    file = new File(new File(params.src).getParentFile(), file).getCanonicalPath();
                }
            }

            var get = project.createTask('get');
            get.setSrc(new URL(params.url + encodeURIComponent(jql)));
            get.setDest(destFile1);
            get.setUsername(params.usr);
            get.setPassword(params.pwd);
            get.setIgnoreErrors(!params.failonerror);
            get.execute();

            if (destFile1.exists()) {
                if (file) {
                    var xslt = project.createTask('xslt');
                    xslt.setIn(destFile1);
                    xslt.setOut(new File(destFileName2));
                    xslt.setBasedir(file ? new File(file).getParentFile() : new File(params.basedir));
                    xslt.setStyle(file);
                    xslt.execute();

                    out.push(readFile(destFileName2));

                    deleteFile(destFileName2);
                } else {
                    // GROUPBY in XSLT is hard and problematic when some nodes do not have
                    // the GROUPBY field present. So, our current nested UL/LI/UL/LI notes
                    // format where we GROUPBY 'component' is easiest to implement in JS.
                    data = readTickets(destFileName1);
                    echoTickets(data);
                    formatTicketsHtml(out, data);

                    if (params.forumprefix) {
                        formatTicketsForForum(forumout = [], data);
                        forumFile = params.forumprefix + count + '.forum.txt';
                        self.log('Write: ' + forumFile);
                        writeLines(forumFile, forumout);
                    }
                }

                deleteFile(destFileName1);
            } else {
                out.push('Error getting results - see build log');
            }
        }
    }

    self.log('Write: ' + params.out);
    writeLines(params.out, out);
}

// Packs up the task parameters from the funky Ant way of retrieving them.
(function () {
    var src = project.resolveFile(attributes.get('srcfile'));

    processJql({
        src: src,
        out: attributes.get('outfile') || src,
        url: attributes.get('url'),
        xsl: attributes.get('xslt'),
        dir: attributes.get('basedir'),
        usr: attributes.get('user'),
        pwd: attributes.get('pswd'),
        forumprefix: attributes.get('forumprefix'),
        failonerror: parseBool(attributes.get('failonerror'))
    });
})();
