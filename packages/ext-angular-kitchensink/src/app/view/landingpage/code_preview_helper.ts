export const cssClassName = (file) => {
    if (file.endsWith(".css")) {
        return 'css';
    }

	return "js xml";
}

export const getFiles = (node, allCode) => {
	const name = node.data.name.replace(/\s+/g, "");
	const codeMap = allCode[name] || {};
	const files = Object.keys(codeMap).map((file) => {
		return {
			name: file,
			code: `<pre><code id='${file}' class='code ${cssClassName(file)}'>${codeMap[file].replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`,
		};
	});

	return files;
};
