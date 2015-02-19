		
!(function(global) {
	
		function fnCsp(fn) {
			return function csp() {
				return typeof fn == 'function' ? fn.apply(null, arguments) : undefined;
			};
		}
		
		var F = global.Function;

		function fnArg(fn) {
			return F('return (' + fn.toString() + ').apply(null, arguments);');
		}
		
		fnArg
		
		try {
			Function('console.log("ok");')();
			global.Function = fnArg;
		} catch (e) {
			console.log('fnCsp');
			global.Function = fnCsp;
		} finally {
			console.log(Function(function (msg) { return msg; })('success'));
		}
		
		requestAnimationFrame(function(ts) {
			console.log('requestAnimationFrame: ' + ts);
		});
		
		setTimeout(function() {
			console.log('timeout');
		}, 500);
		
		try {
			console.log('should fail');
			eval('console.log("eval");');
			setTimeout('console.log("settimeout");', 0);
		} catch (e) {
			console.log(e);
		}
		
}('global' in this ? global : window));