// Move throughout array
// Compare current number with next
// Check if next is last in sequence
// Check if next is bigger than current
// If yes continue, if not count ++, inSequence = false
// return count


function Solve(params) {
	var n = parseInt(params[0]);
	var count = 0;
	for (var i = 0; i < n; i++) {
		if (i === n - 1) {
			//do some checks here
		}else if(i === 0){
			continue;
		} else{
			count++;
		};
	};
	return count;
}

var args = ["1"];
//var args = ["7", "1", "2", "-3", "4", "4", "0", "1"]; // 3
//var args = ["6", "1", "3", "-5", "8", "7", "-6"]; => 4
//var args = ["9", "1", "8", "8", "7", "6", "5", "7", "7", "6"]; => 5
Solve(args);