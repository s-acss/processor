import processStyle from "./utils/processStyle";
import getACSSObj from "./utils/getACSSObj";
import textSACSS from "bundle-text:sacss";

(() => {
  const $id = (id) => {
    return document.getElementById(id);
  };
  const $FormMain = $id('FormMain');

  const forData2json = (formdata) => {
    const jsondata = {};
    formdata.forEach((value, key) => {
      if (!jsondata[key]) {
        jsondata[key] = formdata.getAll(key).length > 1 ? formdata.getAll(key) : formdata.get(key);
      }
    });
    return jsondata;
  }

  const onSubmit = function (e) {
    e.preventDefault();
    const {style, acss} = forData2json(new FormData(this));
    const {strStyle, strACSS} = processStyle(style, getACSSObj(textSACSS + '\n' + acss));

    $id('acssOutput').value = strACSS;
    $id('styleOutput').value = strStyle;
  };
  $FormMain.addEventListener('submit', onSubmit);
})();
