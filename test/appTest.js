const expect = require('chai').expect;

xdescribe('storeInfo', function() {
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
	//getCurrentScore adds all values from the array
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
}

//What I have to store
	//Multiple instances of questions (array of objects)
	//Current score (var or first index of array)

//Actions to be done
	//retrieveInfo(); Take information from form, return as object named instance
		//Concat date
		//Reject bad values here (ie only numbers in date)
	//storeInfo(); Add object to array named storedInstances
	//getCurrentScore(); add current score
	//printScore(); Print current score to h3