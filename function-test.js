
var meta = document.getElementsByTagName('meta')[0];
var content = meta.getAttribute('content');
var parts = content.split(/script-src[\s]*/);

console.log(parts);

parts[1] = 'script-src \'unsafe-eval\' ' + parts[1];
var updated = parts.join('');
console.log(updated)
meta.setAttribute('content', updated);

Function('console.log("function-test.js");')();