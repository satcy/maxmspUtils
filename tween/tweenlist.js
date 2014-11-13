inlets =1;
outlets =1;

var target = [];
var current = [];
var pre = [];

function tween(){
	var a = arrayfromargs(messagename,arguments);
	a.shift();

	if ( a.length != pre.length ) {
		pre = [];
		for ( var i=0; i<a.length; i++ ) {
			pre.push(0);
		}

	} else {
		pre = current;
	}
	target = a;
}

function rate(val){
	var l = target.length;
	var a = [];
	for ( var i=0; i<l; i++ ) {

		var x = (target[i] - pre[i]) * val + pre[i];
		a.push(x);
	}
	current = a;
	outlet(0, a);
}


