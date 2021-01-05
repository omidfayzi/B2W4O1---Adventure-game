var secretNumber = Math.trunc(Math.random()*20)+1;
var score = 20;
var highScore = 0;

document.querySelector(".check").addEventListener("click", function(){
	var raad = Number(document.querySelector(".Raad").value);
	if (!raad) {
		document.querySelector(".message").textContent = 
		"⛔️ Geen getal!"
	} else if (raad === secretNumber) {
		document.querySelector(".message").textContent = 
		"Goed geraden!👍";
		document.querySelector(".number").textContent = 
		secretNumber;
		


		if (score > highScore) {
			highScore = score;
			document.querySelector(".highScore").innerText =
			highScore;

		}
	} else if (raad > secretNumber) {
		if (score > 0) {
			document.querySelector(".message").textContent = 
			"Het getal te hoog!📈"
			score = score - 1;
			document.querySelector(".score").textContent = 
			score;
		} else {
			document.querySelector(".message").textContent =
			"Je hebt verloren.. ☹️"
		}
		
	} else if (raad < secretNumber) {
		if (score > 0) {
		    document.querySelector(".message").textContent = 
			"Het getal te laag!📉"
			score = score - 1;
			document.querySelector(".score").textContent = 
		score;
		} else {
			document.body.style.backgroundColor = "red";
			document.querySelector(".message").textContent =
			" Je hebt verloren.. ☹️" 
 			} 
 		}
})

document.querySelector(".check").addEventListener("click", function(){
	var raad = Number(document.querySelector(".Raad").value);
	if (raad === secretNumber) {
		document.querySelector("body").style.backgroundColor =
		"#60b347";
		var img = document.querySelector("#confetti"); 
		img.style.visibility = "visible";
		document.querySelector(".number").style.width = 
		"20rem"
		document.querySelector(".number").style.fontSize =
		"7rem"
	} 
});

document.querySelector(".tryAgain").addEventListener("click", function reset(){
	document.querySelector("body").style.backgroundColor = 
	"#222";
	var img = document.querySelector("#confetti"); 
	img.style.visibility = "hidden";
	document.querySelector(".number").style.width = 
	"15rem"
	document.querySelector(".number").style.fontSize =
	"6rem"
	document.querySelector(".message").textContent =
	"Begin te raden..."
	document.querySelector(".score").textContent = 
	"20";
	document.querySelector(".number").textContent = 
	"?";
});