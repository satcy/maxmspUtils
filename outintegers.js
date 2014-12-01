

var preval = 0;

function msg_int(f){

	var l = Math.abs(f - preval);
	if ( l == 0 ) {
		outlet(0, f);
	} else {
		var v = (f - preval)/l;
		var now = preval;
		for ( var i=0; i<l; i++ ) {
			now += v;
			outlet(0, now);
		}
	}
	preval = f;
}