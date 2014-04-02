
var meta = document.getElementsByTagName('meta')[0];
var content = meta.getAttribute('content');
var parts = content.split(/script-src[\s]*/);

console.log(parts);

parts[1] = 'script-src \'unsafe-eval\' ' + parts[1];
var updated = parts.join('');

console.log(updated);

meta.setAttribute('content', updated);

typeof requestAnimationFrame == 'undefined' || (requestAnimationFrame(function(ts) {
  console.log('requestAnimationFrame: ' + ts);
  var message;
  try {
    message = Function('msg', 'return msg;')('OK');
  } catch (e) {
    message = e.message
    //Content Security Policy directive
    //'unsafe-eval'
  }
  console.log(/unsafe-eval/.test(message));
}));