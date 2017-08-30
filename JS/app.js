//Define HTML elements
const currentScore = document.getElementById('currentScore');
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
	if (question.value === '' ||
		person.value === '' ||
		acceptOrReject.value === 'null' ||
		day.value === '' ||
		year.value === '') {
			throw Error('Please answer every question');
	} else if (isNaN(Number(day.value)) || isNaN(Number(year.value))) {
		throw Error('Day and year values must be numbers');
	} else {
		const instance = {
			question: question.value,
			person: person.value,
			acceptOrReject: Number(acceptOrReject.value),
			date: `${month.value} ${day.value}, ${year.value}`
		}
		return instance;
	}
}

function getCurrentScore() {
	//Add up points from array's objects
	let score = 0;
	for (let i = 0; i < storedInstances.length; i++) {
		score += storedInstances[i].acceptOrReject;
	}
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
}