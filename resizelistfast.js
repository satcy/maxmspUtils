
var _num = 32;
if ( arrayfromargs(jsarguments).length > 1 ) {
	_num = arrayfromargs(jsarguments)[1];
}

function list(){
	var _a = arguments;

	var arr = [];
	var idx;
	var l = _a.length;
	var c = l/_num;
	
	for ( i = 0; i<_num; i++ ){
		idx = parseInt(i*c);
		if ( idx > l-1 ) idx = l-1; 
		arr[i] = _a[idx];
	}
	outlet(0, arr);
}

function set(val){
	_num = val;
}