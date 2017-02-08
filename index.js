function countdown(start) {
	// body...
	setTimeout(start,2000)
}
function createMultiplier(argument) {
	// body...
	return function(argument){return argument*2}
}

var doubler  = createMultiplier() 
var tripler = function(arg){return arg*3}

function multiplier(a,s){
 return a * s
}
var doublerWithBind = multiplier.bind(null,2)
var triplerWithBind = multiplier.bind(null,3)