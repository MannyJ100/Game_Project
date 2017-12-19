$(function() {
console.log("before global");

// var placeholders

// var boxes = document.getElementsByTagName("td");
// var turnText = document.querySelector(".playerTurn");
// var counter = 1;
// var RedMoves = [];
// var YellowMoves = [];
var playerRed = "Player Red"
var playerYellow = "Player Yellow"
var player1Color = 'rgb(255, 0, 0)'
var player2Color = 'rgb(255, 252, 0)'
var gameOn = true;
var table = $('table tr');

// var row = document.getElementsByTagName("tr");
// var validMoves = [];
// var x01 = [02, 08, 09];
// var x02 = [03, 10, 11];

// function start() {
// 	console.log("begin");
// 	addRedandYellowListener();
// 	addResetListener();
// }

// function addRedandYellowListener() {
// 	for (var i = boxes.length - 1; i >= 0; i--) {
// 		boxes[i].addEventListener("click", addRedorYellow);
// 	}
// }

// addRedandYellowListener();

// function addRedorYellow(event) {
// 	if (event.target.innerHTML.length === 0) {
// 		// checkValidMove(event);/*target.id,tdelement);*/

// 		// console.log(event.target.id);
// 		if (counter % 2 === 0) {
// 			YellowMoves.push(parseInt(event.target.getAttribute("data-num")));
// 			event.target.innerHTML = "Yellow";
// 			event.target.setAttribute("class","Yellow");
// 			turnText.innerHTML = "It is Player Red's turn";
// 			counter++;
// 			// checkforwin
// 		}
// 		else {
// 			RedMoves.push(parseInt(event.target.getAttribute("data-num")));
// 			event.target.innerHTML = "Red";
// 			event.target.setAttribute("class", "Red");
// 			turnText.innerHTML = "It is Player Yellow's turn"
// 			counter++
// 			// checkforwin
// 			}
// 		}
// 	} 

	// function checkValidMove(value) {
	// 	var Check = ["08","09","02"]; 
	// 	if (value.target.id === "01") {

	// 		value.target.setAttribute("class", "Red");
	// 		for (var x = 0; x < x01.length; x++);
	// 			validMoves.push(x01[x])
	// 		return;
	// 	}
	// 	if (value.target.id === "02") {

	// 		value.target.setAttribute("class", "Yellow");
	// 		for (var x = 0; x < x02.length; x++);
	// 			validMoves.push(x02[x])
	// 		return;
	// 	}
          
	// 	if (x01[0] == "02" || x01[1] == "08" || x01[2] == "09") {
 //           value.target.setAttribute("class", "Yellow");
		      
	// 	}
	// }
	function DiffColor(rowI,colI,color) {
		return table.eq(rowI).find('td').eq(colI).css('background-color',color)
	}

	function returnColor(rowI,colI){
		return table.eq(rowI).find('td').eq(colI).css('background-color');
	}

	function lowestFree(colI) {
		var colorReport = returnColor(5,colI);
		for (var row = 5; row > -1; row--) {
			colorReport = returnColor(row,colI);
			if (colorReport === 'rgb(128, 128, 128)') {
				return row
			}
		}
	}

	function addResetListener(){
		var resetButton = document.getELementById("Reset");
		ResetButton.addEventListener("click", resetBoard);
	}
	

	function colorMatch(a,b,c,d) {
		return (a === b && a === c && a === d && a !== 'rgb(128, 128, 128)' && a !== undefined)
	}

	function chkWinVert(){
		// Vertical
		for (var row = 0; row < 3; row++){
			for (var col = 0; col < 7; col++){
				if (colorMatch(returnColor(row,col), returnColor(row+1,col), returnColor(row+2,col), returnColor(row+3,col))){
					console.log("hihi");
					// reportWin(row,col);
					return true;
					} else {
						continue;
					}
				}
			}	
	}
		function chkWinHor() {// Horizontal 	
		for (var row = 0; row < 6; row++){
			for (var col = 0; col < 4; col++){
				if (colorMatch(returnColor(row,col), returnColor(row,col+1), returnColor(row,col+2), returnColor(row,col+3))) {
				// sendWin(row,col);
				return true;
			} else {
				continue;
				}
			}
		}		
	}	
		// Diag R
		function chkWinDiag() {
		for (var row = 0; row < 7; row++){
			for (var col = 0; col < 5; col++){				
				if (colorMatch(returnColor(row,col), returnColor(row+1,col+1), returnColor(row+2,col+2), returnColor(row+3,col+3))) {
				// sendWin(row,col);
				return true;
			} else if (colorMatch(returnColor(row,col), returnColor(row-1,col+1), returnColor(row-2,col+2), returnColor(row-3,col+3))) {
				// sendWin(row,col);
				return true;
			} else {
				continue;
				}
			}
		}	
	 }
		// Diag L
	// 	function chkWinDiagL() {
	// 	for (var row = 3; row < 6; row++);{
	// 		for (var col = 0; col <4; col++);{
	// 			if (colorMatch(returnColor(row,col), returnColor(row-1,col+1), returnColor(row-2,col+2), returnColor(row-3,col+3))) {
	// 			// sendWin(row,col);
	// 			return true;
	// 		} else {
	// 			continue
	// 			}
	// 		}
	// 	}	
	// }

	var currentPlayer = 1;
	var currentName = playerRed;
	var currentColor = player1Color;

	$('td').on('click', function(){

		var col = $(this).closest('td').index();
		var bottomFree = lowestFree(col);

	DiffColor(bottomFree,col,currentColor);

	if (chkWinVert() || chkWinHor() || chkWinDiag()) {
		alert("You Have Won");
	}

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


})

