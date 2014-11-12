outlets = 2;
var arr = [];
function readfile(s){
	var f = new File(s);
	var a;

	if (f.isopen) {
		arr = [];
		while (a=f.readline()) { // returns a string
			arr.push(a);
		}
		f.close();
	} else {
		post("could not open file: " + s + "\n");
	}
}

function writefile(s)
{
	var f = new File(s,"write","TEXT"); 

	if (f.isopen) {
		post("writing string to file: " + s + "\n");
		var str = "";
		for ( var i=0; i<arr.length; i++ ) {
			str += arr[i] + "\n";
		}
		f.writestring(str);
		f.close();
	} else {
		post("could not create file: " + s + "\n");
	}
}

function find(str){
	outlet(1, arr.indexOf(str));
}

function pushunique(str){
	if ( arr.indexOf(str) == -1 ) {
		outlet(1, str);
		arr.push(str);
	}
}

function push(str){
	arr.push(str);
}

function dump(){
	for ( var i=0; i<arr.length; i++ ) {
		outlet(0, arr[i]);		
	}
}

function clear(){
	arr = [];
}