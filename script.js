function inBox(arr) {
	const asterisk = [-1, -1];
	
	var horizontalLength = 0;
	var verticalLength = arr.length;
	
	for (var y = 0; y < arr.length; y++) {
		horizontalLength = arr[y].length;
		for (var x = 0; x < horizontalLength; x++) {
			const cell = arr[y][x];
			
			if (cell === '*') {
				asterisk[0] = x;	
				asterisk[1] = y;
			}
		}
	}
	
	return (asterisk[0] >= 0 && asterisk[1] >= 0) && 
				asterisk[0] > 0 && 
				asterisk[0] < horizontalLength &&
				asterisk[1] > 0 &&
				asterisk[1] < verticalLength;
}

console.log(inBox([
  "####",
  "#* #",
  "#  #",
  "####"
])); // true

console.log(inBox([
  "*####",
  "# #",
  "#  #*",
  "####"
])); //false