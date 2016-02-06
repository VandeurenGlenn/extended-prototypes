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
