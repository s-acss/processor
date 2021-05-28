import isStyleLine from "./isStyleLine";
import getSACSS from "./getSACSS";

function processStyle(strStyle = '', objACSS = {}) {
  const objStyle = {};

  // 去掉冗余符号
  strStyle = strStyle.replace(/\r/g, '')
    .replace(/\;/g, ';\n')
    .replace(/\n\n/g, '\n');

  const arrStyle = strStyle.split('\n').map((line) => {
    // 是否是值所在的行
    if (!isStyleLine(line)) {
      return line;
    }
    const [sacss, propName, value] = getSACSS(line, objACSS);

    if (!sacss) {
      return line;
    }
    if (propName) {
      objStyle[sacss] = [propName, value];
    }
    return `/* ${sacss} */`;
  });

  const arrACSS = Object.keys(objStyle).sort().map((item) => {
    const selector = item.replace(/\./g, '\\.').replace(/\%/g, '\\%');
    const [propName, value] = objStyle[item];
    return `.${selector}{${propName}:${value};}`
  });

  return {
    strACSS: arrACSS.join('\n'),
    strStyle: arrStyle.join('\n')
  };
};

export default processStyle;
