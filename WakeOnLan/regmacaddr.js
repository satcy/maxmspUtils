autowatch = 1;
outlets = 2;
function reg(str){
	
	var re = /([0-9a-f]+:){5}([0-9a-f]+)/g;
	if ( re.test(str) ) {
		var a = str.match(re);
		if ( a && a.length > 0 ) {
			outlet(1, a[0]);
			outlet(0, macAddr2Array(a[0]));
		}
	} 
}

function macAddr2Array(mac){
	var a = mac.split(":");
	for ( var i=0; i<a.length; i++ ) {
		a[i] = parseInt('0x'+a[i], 16);
	}
	return a;
}