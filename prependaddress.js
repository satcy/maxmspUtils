
var value;
if ( arrayfromargs(jsarguments).length > 1 ) {
	value = arrayfromargs(jsarguments)[1];
}

function anything(){
	var arr = arrayfromargs(messagename,arguments);
	if ( arr.length > 0 ) {
		arr[0] = value + arr[0];
	}
	outlet(0, arr);
}

function set(val){
	value = val;
}