$(function() {
console.log("before global");

var placeholders
var boxes = document.getElementsByTagName("td");
var turnText = document.querySelector(".playerTurn");
var counter = 1;
var RedMoves = [];
var YellowMoves = [];
// var row = document.getElementsByTagName("tr");
// var validMoves = [];
// var x01 = [02, 08, 09];
// var x02 = [03, 10, 11];

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
		// checkValidMove(event);/*target.id,tdelement);*/

		// console.log(event.target.id);
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

	function checkBottom() {
		var colourReport = addRedorYellow(5);
		for (var row = 5; row > -1; row--) {
			colourReport = addRedorYellow(row);
		}
	}
})

