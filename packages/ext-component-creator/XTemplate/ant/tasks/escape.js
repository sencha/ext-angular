/*
 * This file contains the guts of the <x-escape> task.
 */

(function () {
    var string = attributes.get('string')+'',
        property = attributes.get('property'),
        varname = attributes.get('var'),
        type = attributes.get('type')+'';

    switch (type) {
        case 'json':
            string = JSON.encode(string);
            string = string.substring(1, string.length-1);
            break;
        case 'xml':
            string = escapeXml(string);
            break;
    }

    if (property && !project.getProperty(property)) {
        project.setProperty(property, string);
    }

    if (varname) {
        project.setProperty(varname, string);
    }
})();
