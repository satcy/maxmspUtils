outlets =  1;

var _friction = 0.93;
var _accelfactor = 500;

var newx = [0];
var sx = [0];
var xspeed = [0];


function accelfactor(f){
    _accelfactor = f;
}

function friction(f){
    _friction = f;
}
function imidiate(){
    var a = arrayfromargs(messagename,arguments);
    a.shift();
    var l = a.length;
    if ( l > 0 ) {
        if ( l != newx.length ) {
            newx = [];
            sx = [];
            xspeed = [];
            for ( var i=0; i<l; i++ ){
                newx.push(0); 
                sx.push(0);  
                xspeed.push(0);     
            }
        }
        for ( var i=0; i<l; i++ ) {
            newx[i] = a[i];
            sx[i] = a[i];
            xspeed[i] = 0;
        }
        bang();
    }
}

function msg_float(f){
    newx[0] = f;
}

function list(){
    var l = arguments.length;

    if ( l != newx.length ) {
        newx = [];
        sx = [];
        xspeed = [];
        for ( var i=0; i<l; i++ ){
            newx.push(0); 
            sx.push(0);  
            xspeed.push(0);     
        }
    }
    for ( var i = 0; i<l; i++ ){
        newx[i] = arguments[i];
    }
}

function bang(){
    var l = newx.length;
    for ( var i = 0; i<l; i++ ) {
        var acc = sx[i] - newx[i];
        var acc2;
        acc > 0 ? acc2 = -( acc * acc ) / _accelfactor : acc2 = ( acc * acc ) / _accelfactor;
        xspeed[i] = ( xspeed[i] + acc2 ) * _friction;
        sx[i] += xspeed[i];
    }
    outlet(0,sx);

}