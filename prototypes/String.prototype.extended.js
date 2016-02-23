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
  var target = this.valueOf();
  if (target.includes(a) && !target.includes(b)) {
    return target.replace(a, b);
  } else if (!target.includes(a) && !target.includes(b)) {
    var url = b + '://';
    return url.concat(target);
  }
  return target;
};
String.prototype.toHttps = function () {
  return this.to('http', 'https');
};
