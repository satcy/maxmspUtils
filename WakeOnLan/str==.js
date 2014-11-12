autowatch = 1;
inlets = 2;
var current = "";
function anything(){
	if ( inlet == 0 ) {
		var s1 = arrayfromargs(messagename,arguments)[0];
 		outlet(0, s1 === current);
	} else if ( inlet == 1 ) {
		current = arrayfromargs(messagename,arguments)[0];
	}

}
