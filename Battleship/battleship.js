/** Battle ship Game
*/

var controller = {
	numShips: 3,
	shipsLeft: 0,
	shipLength: 3,
	gridWidth: 7,
	gridHeight: 7,
	shipLoc: [ 	{ships: [1, 0, 0], hits: ["", "", ""]},
				{ships: [0, 0, 0], hits: ["", "", ""]},
				{ships: [0, 0, 0], hits: ["", "", ""]} ],

	processGuess: function(guess) {
		console.log(this.shipLength);
	},

	generateShips: function() {
		var x, y, dirc, loc1, loc2, loc3, i = 0;
		var locations = [];

		x = Math.floor(Math.random() * (this.gridWidth - this.shipLength + 2));
		y = Math.floor(Math.random() * (this.gridWidth - this.shipLength + 2));
		loc1 = x.toString() + y.toString();
		dir = Math.floor(Math.random() * 2);	
		console.log(x, y, loc1);

		if (dir == 0) {
			for (var j = 0; j < this.shipLength; j++) {
				locations.push( (x + j) + "" + y);
			}
		} else {
			for (var j = 0; j < this.shipLength; j++) {
				locations.push( x + "" + (y+ j) );
			}
		}

		console.log(locations);
		return locations; 
	},

	collisions: function(arr) {
		for (var j = 0; j < this.numShips; j++) {
			var loc = this.shipLoc[j];
			for (var k = 0; k < this.shipLength; k++) {
				if (loc.ships.indexOf(arr[k]) >= 0)
					return true;
			}
		}

		return false;
	}
};


var ship

var test = {
	tester: function() {
	var where = document.getElementById("messageArea");
	where.innerHTML = "Hello";	
}

};

window.onload = controller.generateShips();