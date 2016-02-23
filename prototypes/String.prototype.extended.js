String.prototype.replaceStartTag = function(tag, by) {
  var target = this;
  return target.replace(new RegExp('<' + tag + '>', 'g'), by);
};
String.prototype.replaceEndTag = function(tag, by) {
  var target = this;
  return target.replace(new RegExp('</' + tag + '>', 'g'), by);
};
String.prototype.replaceTags = function(tag, by) {
  return this.replaceStartTag(tag, by).replaceEndTag(tag, by);
};
String.prototype.replaceWhitespace = function(by) {
  // Do a global search for whitespace characters
  return this.replace(/\s+/g, by);
};
String.prototype.removeWhitespace = function() {
  // Do a global search for whitespace characters
  return this.replaceWhitespace('');
};
// TODO: check by css, json , etc ...?
String.prototype.beautify = function() {
  return this.replaceWhitespace(' ').replace(/\{/gi, '{').replace(/\}/gi, '}\n');
};
String.prototype.to = function (a, b) {
  var str = this.valueOf();
  if (!str.indexOf(a) && str.indexOf(b)) {
    return str.replace(a, b);
  } else if (str.indexOf(a) && str.indexOf(b)) {
    var url = b + '://';
    return url.concat(str);
  }
  return str;
};
String.prototype.toHttps = function () {
  return this.to('http', 'https');
};
