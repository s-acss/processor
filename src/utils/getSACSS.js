import isNumber from "./isNumber";
import getShortOfProp from "./getShortOfProp";

function getSACSS(line, objACSS) {
  let [propName, value] = line.replace(/;/g, '').split(':').map((item) => item.trimStart().trimEnd());
  const mathProp = objACSS[propName];
  if (!mathProp) {
    return [];
  }

  let matchSelector = mathProp[value];

  // 匹配到了返回
  if (matchSelector) {
    return [matchSelector.slice(1)];
  }

  const numberValue = parseFloat(value);
  matchSelector = mathProp[numberValue];

  // 匹配到了返回
  if (matchSelector) {
    return [matchSelector];
  }

  const hasNumber = isNumber(numberValue);

  if (!hasNumber) {
    return [];
  }

  return [`${getShortOfProp(propName)}${value.indexOf('%') > 0 ? value : numberValue}`, propName, value];
};

export default getSACSS;
