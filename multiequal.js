inlets = 2;
outlets = 2;
var mode = 0;
var numbers = arrayfromargs(jsarguments);

function msg_float(f){
	if ( inlet == 0 ) {
		if ( numbers && numbers.length > 0 ) {
			var index = numbers.indexOf(f);
			outlet(1, index);
			if ( mode == 1 && index != -1 ) outlet(0, 1);
			else if ( mode == 0 ) outlet(0, index != -1);
		}
	} else if ( inlet == 1 ) {
		numbers = [f];
	}
}

function msg_int(f){
	if ( inlet == 0 ) {
		if ( numbers && numbers.length > 0 ) {
			var index = numbers.indexOf(f);
			outlet(1, index);
			if ( mode == 1 && index != -1 ) outlet(0, 1);
			else if ( mode == 0 ) outlet(0, index != -1);
		}
	} else if ( inlet == 1 ) {
		numbers = [f];
	}
}

function setnumbers(){
	numbers = arrayfromargs(messagename,arguments);
}

function bangmode(){
	mode = 1;
}

function togglemode(){
	mode = 0;
}