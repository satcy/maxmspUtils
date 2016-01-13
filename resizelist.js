
var _num = 32;
if ( arrayfromargs(jsarguments).length > 1 ) {
	_num = arrayfromargs(jsarguments)[1];
}

function list(){
	var _a = arguments;

	//Numberの配列長を、補完しつつ変更する。オリジナルは変更しない
	var a = [];
	var i;
	var j;
	var nl = _a.length;
	var idx;
	var l = _num*nl;
	var cr = nl/(l);
	
	var n_0 = _a[0];
	var n_1 = n_0;
	for ( i = 0; i<nl; i++ ){
		n_1 = _a[(i+1 > nl-1) ? nl-1 : i+1];
		n_0 = _a[i];
		for ( j=0; j<_num; j++ ){
			a.push( n_0 + j*((n_1 - n_0)/(_num)) );
		}
	}
	var a2 = [];
	for ( i = 0; i<_num; i++ ){
		idx = parseInt(i*nl);
		if ( idx > a.length-1 ) idx = a.length-1; 
		a2[i] = a[idx];
	}
	a = null;
	outlet(0, a2);
}

function set(val){
	_num = val;
}