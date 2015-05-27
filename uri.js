var num = 1;

var current = 0;
var last_val = -1;
var vals = [];


function set(v){
	num = parseInt(v) < 1 ? 1 : parseInt(v);
	last_val = -1;
	gen();
}

function bang(){
	get();
}

function get(){
	var val = vals[current];
	last_val = val;
	outlet(0, val);

	current++;
	if ( current > num - 1 ) {
		current = 0;
		gen();
	}
}

function gen(){
	if ( num == 1 ) {
		vals = [0];
		return;
	}
	vals = [];
	var temp = [];
	var i = 0;
	for ( i=0; i<num; i++ ) {
		temp.push(i);
	}
	var temp2 = [];
	for ( i=0; i<num; i++ ) {
		var r = parseInt(Math.random()*temp.length);
		temp2.push(temp[r]);
		temp.splice(r, 1);
	}

	var offset = 0;
	for ( i=0; i<num; i++ ) {
		if ( i == 0 && last_val == temp2[i] ) {
			offset++;
		}
		vals.push( temp2[(i+offset)%num] )
	}

}

if ( arrayfromargs(jsarguments).length == 2 ) {
	set(arrayfromargs(jsarguments)[1]);
}
