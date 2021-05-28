/**
 * 获取属性的缩写
 * @param propName
 * @returns {string}
 */
function getShortOfProp(propName = '') {
  propName.trimStart().trimEnd();
  return propName.split('-').map((item) => item.charAt(0)).join('');
}

export default getShortOfProp;
