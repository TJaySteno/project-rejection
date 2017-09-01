//Define HTML elements
const randomQuestion = document.getElementById('randomQuestion');
const currentScore = randomQuestion.nextElementSibling;
const fieldset = document.querySelector('fieldset');
const question = fieldset.firstElementChild.nextElementSibling.nextElementSibling;
const person = question.nextElementSibling.nextElementSibling.nextElementSibling;
const acceptOrReject = person.nextElementSibling.nextElementSibling.nextElementSibling;
const month = acceptOrReject.nextElementSibling.nextElementSibling.nextElementSibling;
const day = month.nextElementSibling;
const year = day.nextElementSibling;

//Create variables
let storedInstances;
if (localStorage.storedInstances) {
	//If storedInstances exists in localStorage, parse it
	storedInstances = JSON.parse(localStorage.storedInstances);
} else {
	//else create in a new array
	storedInstances = new Array();
}

//Basic functions
function clearInputs() {
	//Return input fields to normal
	question.value = '';
	person.value = '';
	acceptOrReject.value = '';
	month.value = 'Jan';
	day.value = '';
	year.value = '';
	question.focus();
}

//App logic
function retrieveInfo() {
	//Store user inputs as JS object
	handler();
	const instance = {
		question: question.value,
		person: person.value,
		acceptOrReject: Number(acceptOrReject.value),
		date: `${month.value} ${day.value}, ${year.value}`
	}
	return instance;
}

function getCurrentScore() {
	//Add up points from array's objects
	let score = 0;
	storedInstances.forEach(function(storedInstances){
		score += storedInstances.acceptOrReject
	});
	return score;
}

function submit() {
	//Actions to perform on button click
	const instance = retrieveInfo();
	storedInstances.push(instance);
	currentScore.textContent = `Current score: ${getCurrentScore()}`;
	if (typeof(Storage) !== "undefined") {
		localStorage.setItem("storedInstances", JSON.stringify(storedInstances));
	} else {
		throw Error('Sorry! No Web Storage support');
	}
	clearInputs();
}

(function() {
	//Get and display current score & random past question
	currentScore.textContent = `Current score: ${getCurrentScore()}`;
	if (storedInstances.length) {
		const d = Math.floor(Math.random() * storedInstances.length );
		const question = storedInstances[d];
	randomQuestion.textContent = `You asked ${question.person} for ${question.question}. ${question.date}`;
	}
})()

//Error handler
function handler() {
	if (question.value === '' ||
		person.value === '' ||
		acceptOrReject.value === 'null' ||
		day.value === '' ||
		year.value === '') {
			throw Error('Please answer every question');
	} else if (isNaN(Number(day.value)) || day.value > 31 || day.value < 1 ) {
		throw Error('Days must be numbers between 1 and 31');
	} else if (isNaN(Number(year.value)) || year.value.length !== 4 ) { 
		throw Error('Years must be 4 digit numbers');
	}
}