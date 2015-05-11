outlets = 3;

var _path;
var _data;

function set(){
	var a = arrayfromargs(messagename,arguments);
	a.shift();
	if ( a.length == 2 ) {
		var key = a.shift();
		_data[key] = a[0];
	} else if ( a.length > 2 ) {
		var key = a.shift();
		_data[key] = a;
	} 	
}

function get(key){
	outlet(1, key);
	outlet(0, _data[key]);
}

function dump(){
	for(var pname in _data){
		outlet(1, pname);
		outlet(0, _data[pname]);
	}
}

function read(path){
	_path = path;
	var f = new File(path);
	var i,a,c;

	var _str = "";
	if (f.isopen) {
		while (a=f.readline()) { // returns a string
			_str += a;
		}
		outlet(2, 1);
		_data = JSON.parse(_str);
		f.close();
	} else {
		outlet(2, 0);
	}
}

function write(s){
	var f = new File(s,"write","TEXT"); 
	var s2 = f.filename + ", located in " + f.foldername;

	if (f.isopen) {
		//post("writing string to file: " + s2 + "\n");
		f.position = 0;
		while(f.isopen && f.position < f.eof){
			f.writeline("");
		}
		f.position = 0;
		f.writestring(JSON.stringify(_data));
		f.close();
		outlet(2, 1);
	} else {
		outlet(2, 0);
		//post("could not create file: " + s + "\n");
	}
} 

function writeagain(){
	write(_path);
}