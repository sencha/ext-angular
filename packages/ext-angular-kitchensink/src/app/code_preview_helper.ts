export const cssClassName = (file) => {
  if (file.endsWith(".css")) {
    return 'css';
  }
  else if(file.endsWith(".TS") || file.endsWith(".ts")) {
    return 'typescript'
  }
  return "js";
}

export const getFiles = (node, allCode) => {
  const name = node.data.name.replace(/\s+/g, "");
  const codeMap = allCode[name] || {};
  const files = Object.keys(codeMap).map((file) => {
      return {
      name: file,
      code: `<pre><code mwlHighlightJs id='${file}' class='code ${cssClassName(file)}'>${codeMap[file].replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`,
      //code: `<pre><code mwlHighlightJs [source]="'${codeMap[file].replace(/</g, '&lt;').replace(/>/g, '&gt;')}'" language="typescript"></code></pre>`
      };
  });
  return files;
};

