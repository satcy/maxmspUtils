outlets = 2;

evaluate.local = 1;
function evaluate(json){
	return (new Function("return " + json))();
}

var data;

function readjson(s)
{
	var f = new File(s);
	var i,a,c;

	var _str = "";
	if (f.isopen) {
		while (a=f.readline()) { // returns a string
			_str += a;
		}
		outlet(1, 1);
		data = evaluate(_str);
		f.close();
	} else {
		outlet(1, 0);
	}
}

function getdata(){
	var a = arrayfromargs(messagename,arguments);
	a.shift();
	var val;
	for ( var i=0; i<a.length; i++ ) {
		if ( i== 0 ) {
			val = data[a[i]];
		} else {
			val = val[a[i]];
		}
	}
	outlet(0, val);
}

function setdata(s){
	data = evaluate(s);
}