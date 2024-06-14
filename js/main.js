alert("Welkom bij Hoger lager ");

let roll = document.querySelector(".dice-button");
let helpbtn = document.querySelector(".help-button");
let computer_points = document.querySelector(".computer-credits");
let player_points = document.querySelector(".player-credits");
let winmess = document.querySelector(".message-box");
let lowbtn = document.querySelector(".lower-button");
let highbtn = document.querySelector(".higher-button");
let picture = document.querySelector(".img1");
let foto = document.querySelector(".img2");
let playerRounds = document.querySelector(".player-rounds");
let computerRounds = document.querySelector(".computer-rounds");

// the variables
let randomComputer = 0;
let randomPlayer = 0;
let higherLower = "";
let playerScore = 0;
let computerScore = 0;
let player_rounds = 0;
let computer_rounds = 0;

// disable the higher lower buttons first
disableButton(highbtn);
disableButton(lowbtn);

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// Geeft een willekeurig getal tussen 1 en 6 terug
function getRandomNumber() {
	return getRandomIntInclusive(1, 6);
}

// help button
helpbtn.addEventListener("click", function () {
	alert(
		"Er zijn twee dobbelstenen en de Jij om de hooste punt te bereiken wint de rond." +
		" Jij moet kiezen of jij hoger of lager gaat dan de nummer die gegeven is. success !!!! "
	);
});

// function to roll the dice

roll.addEventListener("click", function () {
	randomComputer = getRandomNumber();
	winmess.textContent=
		"Denkt jij dat het volgende nummer hoger of lager wordt dan" +
		" " +
		randomComputer +
		". " +
		"Kies tussen hoger of lager"
	;
	console.log("computer", randomComputer);
	winner();

	enableButton(highbtn);
	enableButton(lowbtn);
});
highbtn.addEventListener("click", function () {
	randomPlayer = getRandomNumber();
	higherLower = "hoger";
	towin();
	showImage();
	winstreaks();
	winner();
	console.log("player", randomPlayer);

	disableButton(highbtn);
	disableButton(lowbtn);
});

lowbtn.addEventListener("click", function () {
	randomPlayer = getRandomNumber();
	higherLower = "lager";
	towin();
	showImage();
	winstreaks();
	winner();
	console.log("player", randomPlayer);

	disableButton(highbtn);
	disableButton(lowbtn);
});

function towin() {
	if (higherLower === "hoger") {
		if (randomPlayer > randomComputer) {
			playerScore++;
			winmess.textContent = "goed gedaan, Jij wint";
		} else if (randomPlayer < randomComputer) {
			winmess.textContent = "ooh! fout";
			computerScore++;
		} else {
			winmess.textContent = "gelijk spel!!";
		}
	}
	if (higherLower === "lager") {
		if (randomPlayer < randomComputer) {
			playerScore++;
			winmess.textContent = "goed 1 punt hoger!!";
		} else if (randomPlayer > randomComputer) {
			computerScore++;
			winmess.textContent = "ooh! fout";
		} else {
			winmess.textContent = "gelijk spel!!";
		}
	} else {
	}
	computer_points.textContent = computerScore;
	player_points.textContent = playerScore;
}

function showImage() {
	if (randomComputer == 1) {
		foto.src = "img/dice1.png";
	} else if (randomComputer == 2) {
		foto.src = "img/dice2.png";
	} else if (randomComputer == 3) {
		foto.src = "img/dice3.png";
	} else if (randomComputer == 4) {
		foto.src = "img/dice4.png";
	} else if (randomComputer == 5) {
		foto.src = "img/dice5.png";
	} else if (randomComputer == 6) {
		foto.src = "img/dice6.png";
	}

	if (randomPlayer == 1) {
		picture.src = "img/dice1.png";
	} else if (randomPlayer == 2) {
		picture.src = "img/dice2.png";
	} else if (randomPlayer == 3) {
		picture.src = "img/dice3.png";
	} else if (randomPlayer == 4) {
		picture.src = "img/dice4.png";
	} else if (randomPlayer == 5) {
		picture.src = "img/dice5.png";
	} else if (randomPlayer == 6) {
		picture.src = "img/dice6.png";
	}
}

function winstreaks() {
	if (computerScore == 3) {
		winmess.textContent = "winstreak bonus points";
		computerScore = 8;
	}
	if (playerScore == 3) {
		winmess.textContent = "nice!! bonus points";
		playerScore = 5;
	}
}

function winner() {
	if (playerScore == 20 && computerScore <= 20) {
		winmess.textContent = "speler wint de rond";
		playerScore = 0;
		computerScore = 0;
		player_rounds++;
	} else if (computerScore == 20 && playerScore <= 20) {
		winmess.textContent = "computer wint de rond";
		playerScore = 0;
		computerScore = 0;
		computer_rounds++;
	} else {
	}
	computerRounds.textContent = computer_rounds;
	playerRounds.textContent = player_rounds;
}


function disableButton(button) {
	button.disabled = true;
}
function enableButton(button) {
	button.disabled = false;
}
