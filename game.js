$(function() {
	console.log("before global");

	var top = "";
	var topArray = ["top1", "top2", "top3", "top4", "top5", "top6", "top7"];
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

	// Someting to tell us current colour of button, remove colour as not wanting to change here
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
		// Vertical 3 rows and 7 columns need to be checked
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
		
		// Horizontal 6 rows and 4 columns need to be checked
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
		
		// Diagonal with pos slopes and neg slopes
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


	$('td').on('click', function(event){
		top = event.target.id;
		var topColor = $(this).css('background-color'); 

		var test = topArray.includes(top);
		var test2 = topColor === "rgb(128, 128, 128)";
		console.log(top);

		var col = $(this).closest('td').index();
		var bottomFree = lowestFree(col);
		console.log(top);

	DiffColor(bottomFree,col,currentColor);

		if (chkWinVert() || chkWinHor() || chkWinDiag()) {
			setTimeout(function() { 
				alert("You Have Won");
				resetGrid();},500);
			}
		
			if (test && test2){	
				playerSwitch();
				// alert("test and test2");
			}		else if (!topArray.includes(top)){
					playerSwitch();
				// alert("else if");
			}		else {			
					alert("Not A Valid Move");
			}

		})

	
	// Player Switch
	function playerSwitch() {
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
	}

	var audio = document.getElementById("player");
		audio.addEventListener("ended", function() {
    		audio.src = "connect4.mp3";
    		audio.play();
	});
		
});
