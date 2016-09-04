var loaderUtils = require("loader-utils");
var HamlJSX = require("./lib/haml-jsx");

module.exports = function (source) {
  this.cacheable && this.cacheable(true);
  var query = loaderUtils.parseQuery(this.query);

  var result;
  try {
    result = HamlJSX.renderHamlJSX(source, query.open, query.close);
  } catch (e) {
    this.emitError('HAML: ' + e);
    throw e;
  }

  return result;
}
