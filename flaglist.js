var _length = 1;
var _flag = 255;
function length(v){
	_length = v;
	if ( _length < 1 ) _length = 1;
}
function msg_int(v){
	var _a = [];
	for ( var i=0; i<_length; i++ ){
		if ( v == i ) {
			_a.push(_flag);
		} else {
			_a.push(0);
		}
	}
	outlet(0, _a);
}

function list(){
	var l = Math.max(arguments.length, _length);
	var _a = [];
	for ( var i=0; i<l; i++ ){
		_a.push(0);		
	}
	l = arguments.length;
	for ( var j = 0; j<l; j++ ){
		if ( arguments[j] < _length ) _a[arguments[j]] = _flag;
	}
	outlet(0, _a);
}

function flag(v){
	_flag = v;
}