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
