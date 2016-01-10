var _array = [];

function setto(index, val)
{
	while ( _array.length < index+1 ) {
		_array.push(0);
	}
	_array[index] = val;
}

function getdata(){
	outlet(0, _array);
}