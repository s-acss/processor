/**
 * 解析 ACSS 字符串
 * @param strACSS
 * @returns {{}}
 */
function getACSSObj(strACSS = '') {
  const result = {};
  let indexSelector = 0;
  let indexValue = 0;
  let selector = '';
  strACSS = strACSS.replace(/\\/g, '');
  for (let i = 0; i < strACSS.length; i++) {
    const thisChar = strACSS.charAt(i);
    if (thisChar === '{') {
      selector = strACSS.substring(indexSelector, i).replace(/\\/g, '');
      indexValue = i + 1;
      continue;
    }
    if (thisChar === '}') {
      indexSelector = i + 1;
      const values = strACSS.substring(indexValue, i).split(';');
      const [propName, value] = values[0].split(':').map((item) => item.trimStart().trimEnd());
      if (!result[propName]) {
        result[propName] = {};
      }
      result[propName][value] = selector.trimStart().trimEnd();
    }
  }
  return result;
};
export default getACSSObj;
