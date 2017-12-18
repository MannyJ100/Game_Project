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
	function changeColor(rowIndex,colIndex,color) {
		return table.eq(rowIndex).find('td').eq(colIndex).css('background-color',color)
	}

	function returnColor(rowIndex,colIndex){
		return table.eq(rowIndex).find('td').eq(colIndex).css('background-color');
	}

	function checkBottom(colIndex) {
		var colorReport = returnColor(5,colIndex);
		for (var row = 5; row > -1; row--) {
			colorReport = returnColor(row,colIndex);
			if (colorReport === 'rgb(128, 128, 128)') {
				return row
			}
		}
	}

	function colorMatch(one,two,three,four) {
		return (one === two && one === three && one === four && one !== 'rgb(128, 128, 128)' && one !== undefined)
	}

	var currentPlayer = 1;
	var currentName = playerRed;
	var currentColor = player1Color;

	$('td').on('click', function(){

		var col = $(this).closest('td').index();
		var bottomAvail = checkBottom(col);

	changeColor(bottomAvail,col,currentColor);

	currentPlayer = currentPlayer * -1

	if (currentPlayer === 1) {
		currentName = playerRed;
		$('h2').text(currentName + " it is your turn.")
		currentColor = player1Color;
	}	else {
		currentName = playerYellow;
		$('h2').text(currentName + " it is your turn.")
		currentColor = player2Color;

	}
	})


})

