export const getFiles = (node, allCode) => {
	const name = node.data.name.replace(/\s+/g, "");
	const codeMap = allCode[name] || {};
	const files = Object.keys(codeMap).map((file) => {
		return {
			name: file,
			code: codeMap[file],
		};
	});

	return files;
};