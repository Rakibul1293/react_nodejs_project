console.warn("index.js");
/* ---------- 1st lecture start ---------- */

// console.log('Before');
// const user = getUser(1);
// console.log(user);
// console.log('After');

// // Callbacks
// // Promises
// // Async/await

// function getUser(id) {
// 	setTimeout(() => {
// 		console.log('Reading a User from a Database .....');
// 		return {id: id, gitHubUserName: 'Rakibul Islam'};
// 	}, 2000);

// 	// return 1;
	
// }





/* ---------- 2nd lecture start ---------- */

// console.log('Before');
// getUser(1, function(user) {
// 	console.log('User:', user);
// 	console.log('User Id:', user.id);
// 	console.log('User Name:', user.gitHubUserName);

// 	getRepsitories(user.gitHubUserName, (repos) => {
// 		console.log('Repos:',repos);
// 	});
// });
// console.log('After');

// function getUser(id, callback) {
// 	setTimeout(() => {
// 		console.log('Reading a User from a Database .....');
// 		// console.log('Callback', callback);
// 		callback ({id: id, gitHubUserName: 'Rakibul Islam'});
// 	}, 2000);
// }

// function getRepsitories(username, callback) {
// 	setTimeout(() => {
// 		console.log('Calling GitHub API .....');
// 		// console.log('Callback', callback);
// 		callback (['repo1', 'repo2', 'repo3']);
// 	}, 2000);
// }





// console.log('Before');
// getUser(1, function(user) {
// 	// console.log('User:', user);
// 	// console.log('User Id:', user.id);
// 	// console.log('User Name:', user.gitHubUserName);

// 	getRepsitories(user.gitHubUserName, function(repos) {
// 		getCommits(repos[0], function(commits) {
// 			console.log(commits);
// 		});
// 	});
// });
// console.log('After');

// function getUser(id, callback) {
// 	setTimeout(() => {
// 		console.log('Reading a User from a Database .....');
// 		// console.log('Callback', callback);
// 		callback ({id: id, gitHubUserName: 'Rakibul Islam'});
// 	}, 2000);
// }

// function getRepsitories(username, callback) {
// 	setTimeout(() => {
// 		console.log('Calling GitHub API .....');
// 		// console.log('Callback', callback);
// 		callback (['repo1', 'repo2', 'repo3']);
// 	}, 2000);
// }

// function getCommits(repo, callback) {
// 	setTimeout(() => {
// 		console.log('All Commits .....');
// 		// console.log('Callback', callback);
// 		callback (['commit1', 'commit2', 'commit3']);
// 	}, 2000);
// }





/* ---------- 3rd lecture start ---------- */

// synchronous way
// console.log('Before');
// const user = getUser(1);
// const repos = getRepsitories(user.gitHubUserName);
// const Commits = getCommits(repos[0]);
// console.log(user);
// console.log(repos);
// console.log(Commits);
// console.log('After');




/* ---------- 4th lecture start ---------- */

// console.log('Before');
// getUser(1, getRepsitories);
// console.log('After');

// function getRepsitories(user) {
// 	getRepsitories(user.gitHubUserName, getCommits);
// }

// function getCommits(repos) {
// 	getCommits(repo, displayCommits);
// }

// function displayCommits(commits) {
// 	console.log(commits);
// }

// function getUser(id, callback) {
// 	setTimeout(() => {
// 		callback ({id: id, gitHubUserName: 'Rakibul Islam'});
// 	}, 2000);
// }

// function getRepsitories(username, callback) {
// 	setTimeout(() => {
// 		console.log('Calling GitHub API .....');
// 		callback (['repo1', 'repo2', 'repo3']);
// 	}, 2000);
// }

// function getCommits(repo, callback) {
// 	setTimeout(() => {
// 		console.log('All Commits .....');
// 		// console.log('Callback', callback);
// 		callback (['commit']);
// 	}, 2000);
// }





/* ---------- 5th lecture start ---------- */

// console.log('Before');
// getUser(1, function(user) {
// 	getRepsitories(user.gitHubUserName, (repos) => {
// 		getCommits(repos[0], (commits) => {
// 			console.log('Commit:',commits);
// 		});
// 	});
// });
// console.log('After');

// function getUser(id) {
// 	return new Promise((resolve, reject) => {
// 		// Kick off some async work
// 		setTimeout(() => {
// 			console.log('Reading a User from a Database .....');
// 			resolve ({id: id, gitHubUserName: 'Rakibul Islam'});
// 		}, 2000);
// 	});
// }

// function getRepsitories(username) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log('Calling GitHub API .....');
// 			resolve (['repo1', 'repo2', 'repo3']);
// 		}, 2000);
// 	});
// }

// function getCommits(repo) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log('All Commits .....');
// 			resolve (['commit']);
// 		}, 2000);
// 	});
// }





/* ---------- 6th lecture start ---------- */

// console.log('Before');
// getUser(1, function(user) {
// 	getRepsitories(user.gitHubUserName, (repos) => {
// 		getCommits(repos[0], (commits) => {
// 			console.log('Commit:',commits);
// 		});
// 	});
// });
// console.log('After');

// function getUser(id) {
// 	return new Promise((resolve, reject) => {
// 		// Kick off some async work
// 		setTimeout(() => {
// 			console.log('Reading a User from a Database .....');
// 			resolve ({id: id, gitHubUserName: 'Rakibul Islam'});
// 		}, 2000);
// 	});
// }

// function getRepsitories(username) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log('Calling GitHub API .....');
// 			resolve (['repo1', 'repo2', 'repo3']);
// 		}, 2000);
// 	});
// }

// function getCommits(repo) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log('All Commits .....');
// 			resolve (['commit']);
// 		}, 2000);
// 	});
// }





/* ---------- Additional lecture start ---------- */

//Basic Syntax with Multiple Parameters
// ES5
var multiplyES5 = function(x, y) {
    return x * y;
};
// ES6
const multiplyES6 = (x, y) => { return x * y };



// Basic Syntax with One Parameter
//ES5
var phraseSplitterEs5 = function phraseSplitter(phrase) {
    return phrase.split(' ');
};
console.log(phraseSplitterEs5(("ES6 Awesomeness")))
//ES6
const phraseSplitterEs6 = phrase => phrase.split(" ");
console.log(phraseSplitterEs6("ES6 Awesomeness"));  // ["ES6", "Awesomeness"]



// No Parameters
//ES5
var docLogEs5 = function docLog() {
    // console.log(document);
};
docLogEs5();
//ES6
var docLogEs6 = () => { 
	// console.log(document); 
};
docLogEs6(); // #document... <html> ….



// Object Literal Syntax
//ES5
var setNameIdsEs5 = function setNameIds(id, name) {
    return {
      id: id,
      name: name
    };
  };
// ES6
var setNameIdsEs6 = (id, name) => ({ id: id, name: name });
console.log(setNameIdsEs6 (4, "Kyle"));   // Object {id: 4, name: "Kyle"}



// First Example: Use Cases for Arrow Functions
const smartPhones = [
    { name:'iphone', price:649 },
    { name:'Galaxy S6', price:576 },
    { name:'Galaxy Note 5', price:489 }
];
// ES5
var prices = smartPhones.map(function(smartPhone) {
    return smartPhone.price;
});
console.log(prices); // [649, 576, 489]
// ES6
const pricess = smartPhones.map(smartPhone => smartPhone.price);
console.log(pricess); // [649, 576, 489]



// Second Example: Use Cases for Arrow Functions
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// ES5
var divisibleByThrreeES5 = array.filter(function (v){
  return v % 3 === 0;
});
// ES6
const divisibleByThrreeES6 = array.filter(v => v % 3 === 0);
console.log(divisibleByThrreeES6); // [3, 6, 9, 12, 15]






/* ---------- Mutable lecture start ---------- */
// Object, Array, Function are Mutable
let newObj = {
	total: 65,
	increment: 1
};
const incrementTotal = function(obj, val) {
	obj.increment = val;
	return function() {
		console.log(obj.total);
		obj.total = obj.total + obj.increment;
		console.log(obj.total);
	};
};
const incBy1 = incrementTotal(newObj, 1);
incBy1();
console.log(newObj);
const incBy2 = incrementTotal(newObj, 2);
incBy2();
console.log(newObj);
// But Browser Show Different Behavior



var a = [2, 1, 4, 3];
console.log(a);
var b = a.sort();
console.log(b);
console.log(a);






/* ---------- Immutable lecture start ---------- */
// Primitive Type are Mutable, there are no object: null, undefined, string, boolean, number.














/* ---------- Function Calling In Different Style lecture start ---------- */
// 1st Style(General Style):
var outsid_func = function(){
	var infunc = function () { 
		console.log("Function Calling In 1st Style(General Style): 13"); 
	}
	return infunc;
}
outsid_func();
var fun_assign = outsid_func();
fun_assign();

// 2nd Style:
var outsid_func = (function(){
	var infunc = function () { 
		console.log("Function Calling In 2nd Style: 13"); 
	}
	return infunc;
}());
outsid_func();

// 3rd Style:
var outsid_func = function(number){
	var infunc = function (number) { 
		console.log("Function Calling In 3rd Style: "+number); 
	}
	return infunc;
}
outsid_func(13)(3);








/* ---------- implicit return & explicit return ---------- */
function ReturnConstructor(arg){
	console.log(this);
    // Private variable.
    var privateVar = "can't touch this, return ctor.";

    // This is what is being exposed to the outside as the return object
    return {
        print: function() {
            console.log("ReturnConstructor: arg was: %s", arg);
			console.log(this);
        }
    };
}

function NormalConstructor(arg){
	console.log(this);
    // Private variable.
    var privateVar = "can't touch this, normal ctor";

    // This is what is being exposed to the outside as "public"
    this.print = function() {
		console.log("NormalConstructor: arg was: %s", arg);
		console.log(this);
	};
	// console.log(this);
}


var ret = new ReturnConstructor("calling return");
console.log(typeof ret);
console.log(ret);
console.log(ret.print());
var nor = new NormalConstructor("calling normal");
console.log(typeof nor);
console.log(nor);
console.log(nor.print());

ReturnConstructor("calling return").print();
console.log(typeof ReturnConstructor);
console.log(typeof NormalConstructor);
ReturnConstructor("calling return");
NormalConstructor("calling return");
//NormalConstructor("calling return").print();



function NormalConstructors(arg){
    // Private variable.
    var privateVar = "can't touch this, normal ctor";

    // This is what is being exposed to the outside as "public"
    return this.print = function() {
		console.log("NormalConstructors: arg was: %s", arg);
	};
}
var nors = NormalConstructors("calling return");
console.log(typeof nors);
console.log(nors);
// var norss = NormalConstructors("calling return").print();
// console.log(typeof norss);
// console.log(norss);

/*
When you use new, there's an implicit value. When you don't use new, there isn't.
When a function called with new returns an object, then that's the value of the new expression. When it returns
something else, that return value is ignored and the object implicitly constructed is the value of the expression.
So, yes, there can be a difference.

So, by using the var v = new ... in my question, they are the same. The difference would come into play when I 
do something like: ReturnConstructor("hello").print() which is valid and will print: ReturnConstructor: arg was: hello, 
because it returns an object, that has print defined,as opposed to NormalConstructor("hello"), which returns undefined, 
and will throw an error if I try to use the "print()" method on the undefined object. 
(I'm still not sure who will use it that way though ... any examples?)

Right - the new operator makes a big difference in the semantics of a function call. Without new, an ordinary function 
call to a function with no explicit return value results in undefined.

Implicit return only happens for single statement arrow functions, except When arrow function is declared with {}, 
even if it’s a single statement, implicit return does not happen: link(https://strongloop.com/strongblog/an-introduction-to-javascript-es6-arrow-functions/)
*/








/* JavaScript Anonymous Functions Lecture Start */
/* https://www.youtube.com/watch?v=nZsNsH59tcA */
/*
	Anonymous Functions Also Called/Known as:
	01. Self Executing Anonymous Functions
	02. Self Invoked Anonymous Functions
	03. Immediately Invoked Anonymous Functions
*/
(function() {
	var message = "";
	console.log("Hello World");
})();

(function() {
	var message = "Hello World !!!";
	function printMessage() {
		console.log(message);
	}
	printMessage();
})();

var theObj = (function() {
	var message = "Hello World !!!";
	function printMessage() {
		console.log(message);
	}
	printMessage();
	
	var obj = {};
	obj.talk = function() {
		printMessage();
	}
	
	return obj;
})();

theObj.talk();
theObj.talk();






/* Function Declarations VS Function Expressions in JavaScript Lecture Start */
/* https://www.youtube.com/watch?v=gjLn95skIKE */

console.log(doSomething);
doSomething();

function doSomething() {
	console.log("Declare Something");
}

// console.log(something);
// something();

var something = function() {
	console.log("Express Something");
}

console.log(something);
something();

var runIt = function(a) {
	console.log(a);
	a();
};

runIt(function() {
	var b = " Now";
	console.log("Running" + b);
});

runIt(function run() {
	var b = " Now";
	console.log("Running" + b);
});








