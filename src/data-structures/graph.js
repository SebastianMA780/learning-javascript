/* 
	Graphs: Interconnected nodes.

	Example:

			2 - 0
		/	\	
	 1 - 3

*/

//Edge list: represents in an array existing connections.
	const edgeGraph = [
		[0,2], //0 - 2
		[2,1], //2 - 1
		[2,3], //2 - 3
		[1,3], //1 - 3
	];

// Adjacent List: Represent connection based on the index.
	const adjacentGraph = [
		[2], //index 0
		[2,3], //index 1
		[0,1,3], //index 2
		[1,2], //index 3
	];

	const hashAdjacentGraph = {
		0: [2],
		1: [2,3],
		2: [0,1,3],
		3: [1,2]
	}

//Adjacent Matrix
	const matrixGraph = [
		[0,0,1,0], // index 0
		[0,0,1,1], // index 1
		[1,1,0,1], // index 2
		[0,1,1,0], // index 3
	]

	const adjacentMatrixGraph = {
		0: [0,0,1,0], 
		1: [0,0,1,1], 
		2: [1,1,0,1],
		3: [0,1,1,0], 
	}