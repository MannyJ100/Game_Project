$(function() {
console.log("before global");

var boxes = document.getElementsByTagName("td");
var turnText = document.querySelector(".playerTurn");
var counter = 1;
var RedMoves = [];
var YellowMoves = [];
var table = $('table tr');

function start() {
	console.log("begin");
	addRedandYellowListener();
	addResetListener();
}

function addRedandYellowListener() {
	for (var i = boxes.length - 1; i >= 0; i--) {
		boxes[i].addEventListener("click", addRedorYellow);
	}
}
addRedandYellowListener();

function addRedorYellow(event) {
	if (event.target.innerHTML.length === 0) {
		if (counter % 2 === 0) {
			YellowMoves.push(parseInt(event.target.getAttribute("data-num")));
			event.target.innerHTML = "Yellow";
			event.target.setAttribute("class","Yellow");
			turnText.innerHTML = "It is Player Red's turn";
			counter++;
			// checkforwin
		}
		else {
			RedMoves.push(parseInt(event.target.getAttribute("data-num")));
			event.target.innerHTML = "Red";
			event.target.setAttribute("class", "Red");
			turnText.innerHTML = "It is Player Yellow's turn"
			counter++
			// checkforwin
			}
		}
	} 

	function checkBottom(colIndex) {
		var colourReport = addRedorYellow(5,colIndex);
		for (var row = 5; row > -1; row--) {
			colourReport = addRedorYellow(row,colIndex);
			if (colourReport === null) {
				return row
			}
		}
	}
})

