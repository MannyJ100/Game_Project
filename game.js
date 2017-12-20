$(function() {
console.log("before global");

var playerRed = "Player Red"
var playerYellow = "Player Yellow"
var player1Color = 'rgb(255, 0, 0)'
var player2Color = 'rgb(255, 252, 0)'
var gameOn = true;
var table = $('table tr');


	// identify td location in table to change colour. Finds cell
	function DiffColor(rowI,colI,color) {
		return table.eq(rowI).find('td').eq(colI).css('background-color',color);
	}

	// Someting to tell us current colour of button
	function returnColor(rowI,colI){
		return table.eq(rowI).find('td').eq(colI).css('background-color');
	}

	// Find bottom avail free slot
	function lowestFree(colI) {
	
		var colorFeedback = returnColor(5,colI);
		for (var row = 5; row > -1; row--) {
			colorFeedback = returnColor(row,colI);
			if (colorFeedback === 'rgb(128, 128, 128)') {
				return row
			}
		}
	}

	// check if for inputs have the same colour
	function colorMatch(a,b,c,d) {
		return (a === b && a === c && a === d && a !== 'rgb(128, 128, 128)' && a !== undefined);
	}

	function chkWinVert(){
		// Vertical
		for (var row = 0; row < 3; row++){
			for (var col = 0; col < 7; col++){
				if (colorMatch(returnColor(row,col), returnColor(row+1,col), returnColor(row+2,col), returnColor(row+3,col))){
					console.log("hihi");
					return true;
					}	else {
						console.log("no match");
					}
				}
			}	
	}
		
		// Horizontal
	function chkWinHor() {	
		for (var row = 0; row < 6; row++){
			for (var col = 0; col < 4; col++){
				if (colorMatch(returnColor(row,col), returnColor(row,col+1), returnColor(row,col+2), returnColor(row,col+3))) {
					return true;
					} 	else {
						console.log("no match");
					}
				}
			}		
	}	
		
		// Diagonal
	function chkWinDiag() {
		for (var row = 0; row < 7; row++){
			for (var col = 0; col < 5; col++){				
				if (colorMatch(returnColor(row,col), returnColor(row+1,col+1), returnColor(row+2,col+2), returnColor(row+3,col+3))) {
					return true;
					}	else if (colorMatch(returnColor(row,col), returnColor(row-1,col+1), returnColor(row-2,col+2), returnColor(row-3,col+3))) {
					return true;
					}	else {
						console.log("no match");
					}
				}
			}	
	 }


	 // Reset Button
	$("#Reset").on('click', function(){
		console.log("hello");
		resetGrid();
	});

	function resetGrid(){
		$("td").css("background-color", "gray");
	}	

		// Starting player
	var currentPlayer = 1;
	var currentName = playerRed;
	var currentColor = player1Color;

	$('td').on('click', function(){

		var col = $(this).closest('td').index();
		var bottomFree = lowestFree(col);

	DiffColor(bottomFree,col,currentColor);

		if (chkWinVert() || chkWinHor() || chkWinDiag()) {
			alert("You Have Won");
			resetGrid();

		}

		//Player switch 
	currentPlayer = currentPlayer * -1

		if (currentPlayer === 1) {
			currentName = playerRed;
			$('h2').text(currentName + " it is your turn to connect")
			currentColor = player1Color;
		}	else {
			currentName = playerYellow;
			$('h2').text(currentName + " it is your turn to connect")
			currentColor = player2Color;

		}
	})

});