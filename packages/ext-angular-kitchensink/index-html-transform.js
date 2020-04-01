module.exports = (targetOptions, indexHtml) => {

  var val = '<meta'
  const i = indexHtml.indexOf(val);
  return `${indexHtml.slice(0, i)}<base href="${process.env["basehref"]}">
  ${indexHtml.slice(i)}`;

  // const i = indexHtml.indexOf('</body>');
  // console.log(targetOptions)
  // console.log(process.env)
  // const config = `<p>Configuration: ${targetOptions.configuration}</p>`;
  // return `${indexHtml.slice(0, i)}
  //           ${config}
  //           ${process.env["basehref"]}
  //           ${indexHtml.slice(i)}`;
};