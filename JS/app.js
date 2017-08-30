//What I have to store
	//Multiple instances of questions (array of objects)
	//Current score (var or first index of array)

//Actions to be done
	//retrieveInfo(); Take information from html, return as object named instance
		//Concat date
		//Reject bad values here (ie only numbers in date)
	//storeInfo(); Add object to array named storedInstances
	//getCurrentScore(); add current score
	//printScore(); Print current score
	
function storeInfo(instance) {
	
}
	
/* xdescribe('storeInfo', function() {
	//storeInfo adds an object to an array
	const storeInfo = require('../JS/app.js').storeInfo;
	let instance, 
		storedInstances = [];
	
	before(function () {
		instance = {
			question: 'Why?',
			person: 'Stacy',
			acceptOrReject: 10,
			date: 'Jan 1, 2001'
		}
		
		storeInfo(instance);
	});
	
	it('should store each instance inside an array', function() {
		expect(storedInstances).to.have.lengthOf(1);
	});
	
	it('should store new values at the end of array', function() {
		storeInfo({
			question: 'When?',
			person: 'Johnny',
			acceptOrReject: 1,
			date: 'Jan 1, 2011'
		})
		
		expect(storedInstances[1].person).to.eql('Johnny');
	});
	
}

xdescribe('getCurrentScore', function() {
	const getCurrentScore = require('../JS/app.js').getCurrentScore;
	let storedInstances,
		currentScore;
	
	beforeEach(function () {
		storedInstances = [
			{acceptOrReject:1},
			{acceptOrReject:1},
			{acceptOrReject:10},
			{acceptOrReject:10},
			{acceptOrReject:10},
			{acceptOrReject:1}
		]
		
		currentScore = getCurrentScore(storedInstances);
	});
	
	it('should return a number', function () {
		expect(currentScore).to.be.a('number');
	});
	
	it('should add all values', function () {
		expect(currentScore).to.equal(33);
	});
} */

const currentScore = document.getElementById('currentScore');
const fieldset = document.querySelector('fieldset');
const question = fieldset.firstElementChild.nextElementSibling.nextElementSibling;
const person = question.nextElementSibling.nextElementSibling.nextElementSibling;
const acceptOrReject = person.nextElementSibling.nextElementSibling.nextElementSibling;
const month = acceptOrReject.nextElementSibling.nextElementSibling.nextElementSibling;
const day = month.nextElementSibling;
const year = day.nextElementSibling;

function clearInputs() {
	question.value = '';
	person.value = '';
	acceptOrReject.value = '';
	month.value = 'Jan';
	day.value = '';
	year.value = '';
	question.focus();
}
	//retrieveInfo(); Take information from html, return as object named instance
		//Concat date
		//Reject bad values here (ie only numbers in date)
	//storeInfo(); Add object to array named storedInstances
	//getCurrentScore(); add current score
	//printScore(); Print current score
