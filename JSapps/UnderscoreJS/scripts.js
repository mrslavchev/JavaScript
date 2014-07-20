var students = [
	{firstName: "Bugs", lastName: "Bunny", age: 12, notes: [3, 3, 3, 3, 3]}, // 15
	{firstName: "Lola", lastName: "Bunny", age: 14, notes: [5, 5, 3, 2, 6]}, // 21
	{firstName: "Daffy", lastName: "Duck", age: 14, notes: [3, 5, 3, 2, 6]}, // 21
	{firstName: "Elmer", lastName: "Fudd", age: 18, notes: [6, 6, 2, 2, 2]}, // 18
	{firstName: "Silvester", lastName: "Stallone", age: 92, notes: [3, 2, 3, 2, 2]}, // 12
	{firstName: "Amadeus", lastName: "Mozart", age: 12, notes: [3, 3, 3, 3, 3]} // 15
];

// Tasks 1 to 3.
// Task 1.
function firstBeforeLast(){

	_.chain(students)
	.filter(function(item){
		return item.firstName < item.lastName;
	})
	.sortBy('firstName')
	.reverse() // Didn't find more elegant way. I am sorry :(
	.each(function(item){
		console.log(item.firstName + ' ' + item.lastName);
	});
};

// Task 2.
function ageComparing(){
	_.chain(students)
	.filter(function(item){
		if(item.age >= 18 && item.age <= 24){
			return true;
		}
	})
	.each(function(item){
		console.log(item.firstName + ' ' + item.lastName);
	});
};

// Task 3.
// TODO make this mofo work.
function avarageNote(){
	_.chain(students)
	// This should have worked, but it's not, sorry.
	.sortBy('notes', function(arr){
		return _.reduce(arr, function(memo, num)
		{
			return memo + num;
		}, 0) / arr.length;
	})
	.each(function(item){
		console.log(item.firstName + ' ' + item.lastName);
	});
};

// Task 4, 5.
var animals = [
	{name: 'Cat', species: 'Mammal', legs: 4},
	{name: 'Dog', species: 'Mammal', legs: 4},
	{name: 'Hourse', species: 'Mammal', legs: 4},
	{name: 'Pig', species: 'Mammal', legs: 4},
	{name: 'Mouse', species: 'Mammal', legs: 4},
	{name: 'Zebra', species: 'Mammal', legs: 4},
	{name: 'Parrot', species: 'Bird', legs: 2},
	{name: 'Human', species: 'Mammal', legs: 2},
	{name: 'Spider', species: 'Insect', legs: 8},
	{name: 'Centipede', species: 'Insect', legs: 100}
];

// Task 4.
function groupBySpecties(){
	_.chain(animals)
	.sortBy('legs')
	.groupBy('species')
	.pairs()
	.each(function(item){
		console.log(item);
	})
};

// Task 5.
function countLegs(){
	var numOfLegs = 0;
	_.chain(animals)
	.each(function(item){
		numOfLegs += item.legs;
	})
	console.log(numOfLegs);
};

//Task 6.
var books = [
	{title: 'Huckleberry Finn', author: 'Mark Twain'},
	{title: 'Tom Sawyer', author: 'Mark Twain'},
	{title: 'The shining', author: 'Stephen King'},
	{title: 'The Da Vinci code', author: 'Dan Brown'},
	{title: 'The sixth mark', author: 'Dan Brown'},
	{title: 'The secret symbol', author: 'Dan Brown'},
	{title: 'How to be a proper ghay', author: 'Azis'}
];

function findAuthor(){
	_.chain(books)
	.countBy('author')
	.pairs()
	.sortBy(function(book){
		return book[1] * -1;
	})
	.first()
	.each(function(item){
		console.log(item);
	})
};

// Task 7.
var people = [
	{firstName: 'Petur', lastName: 'Petrov'},
	{firstName: 'Georgi', lastName: 'Georgiev'},
	{firstName: 'Petur', lastName: 'Ivanov'},
	{firstName: 'Ivan', lastName: 'Ivanov'},
	{firstName: 'Maria', lastName: 'Otvarachkata'},
	{firstName: 'Maria', lastName: 'Ivanova'},
	{firstName: 'Georgi', lastName: 'Ivanov'},
	{firstName: 'Petur', lastName: 'Ivanov'}
];

function commonFirstName(){
	_.chain(people)
	.countBy('firstName')
	.pairs()
	.sortBy(function(book){
		return book[1] * -1;
	})
	.first()
	.each(function(item){
		console.log(item);
	})
};

function commonLastName(){
	_.chain(people)
	.countBy('lastName')
	.pairs()
	.sortBy(function(book){
		return book[1] * -1;
	})
	.first()
	.each(function(item){
		console.log(item);
	})
};

// Print results.
console.log('Task 1');
firstBeforeLast(students);
console.log('Task 2');
ageComparing();
console.log('Task 3');
avarageNote();
console.log('Task 4');
groupBySpecties();
console.log('Task 5');
countLegs();
console.log('Task 6');
findAuthor();
console.log('Task 7');
console.log('Most common first name is:');
commonFirstName();
console.log('Most common last name is:');
commonLastName();

