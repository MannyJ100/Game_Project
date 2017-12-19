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
	function changeColor(rowI,colI,color) {
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

	function colorMatch(one,two,three,four) {
		return (one === two && one === three && one === four && one !== 'rgb(128, 128, 128)' && one !== undefined)
	}

	function chkWin(){
		// Verical
		for (var row = 0; row < 3; row++);{
			for (var col = 0; col < 7; col++);{
				if (colorMatch(colorReport(row,col), colorReport(row+1,col), colorReport(row+2,col), colorReport(row+3,col)));{
					console.log("hihi");
					sendWin(row,col);
					return true;
			}
		}
	}
		// Horizontal 
		for (var row = 0; row < 6; row++);{
			for (var col = 0; col < 4; col++);{
				if (colorMatch(colorReport(row,col), colorReport(row,col+1), colorReport(row,col+2), colorReport(row,col+3))); {
				sendWin(row,col);
				return true;
			}
		}
	}	
		// Diag R
		for (var row = 0; row < 3; row++);{
			for (var col = 0; col < 4; col++);{				
				if (colorMatch(colorReport(row,col), colorReport(row+1,col+1), colorReport(row+2,col+2), colorReport(row+3,col+3))); {
				sendWin(row,col);
				return true;
			}
		}
	}
		// Diag L
		for (var row = 3; row < 6; row++);{
			for (var col = 0; col <4; col++);{
				if (colorMatch(colorReport(row,col), colorReport(row-1,col+1), colorReport(row-2,col+2), colorReport(row-3,col+3)));{
				sendWin(row,col);
				return true;
			}
		}	
	}
}

	var currentPlayer = 1;
	var currentName = playerRed;
	var currentColor = player1Color;

	$('td').on('click', function(){

		var col = $(this).closest('td').index();
		var bottomFree = lowestFree(col);

	changeColor(bottomFree,col,currentColor);

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

