console.info('Simple Synchronous Task 1:')
console.log(1)
setTimeout(() => {
	console.log('Calling After 2 Seconds')
	console.log(2)
})
setTimeout(() => {
	console.log('Calling After 3 Seconds')
	console.log(2)
}, 3000)
console.log(3)





console.info('Simple Synchronous Task 2:')
console.log(1)
console.log(getNumber(2))
console.log(3)
function getNumber(num) {
	setTimeout(() => {
		// console.log('Calling After 3 Seconds')
		return num
	}, 3000)
}



console.info('Asynchronous Task By Callback 1:')
console.log(1)
console.log(
	getNumbers(2, function(num) {
		console.log(num)
	})
)
console.log(3)
function getNumbers(num, callback) {
	setTimeout(() => {
		console.log('Calling After 3 Seconds')
		callback(num)
	}, 3000)
}



console.info('Asynchronous Task By Callback 2:')
getUserr(function(text) {
	console.log(text)
})
function getUserr(callback) {
	setTimeout(() => {
		console.log('Calling After 3 Seconds')
		callback('Hello')
	}, 3000)
}



console.info('Asynchronous Task By Callback 3:')
getUser(1, function(user) {
	console.log(user)
	enrolledCourse(user.name, function(courses) {
		console.log(courses)
		getPrice(courses[0], function() {
			console.log('Javascript course price is 4000')
		})
	})
})

function getUser(id, callback) {
	setTimeout(() => {
		callback({
			id: id,
			name: 'Rakibul',
			profession: 'Web Developer'
		})
	}, 3000)
}

function enrolledCourse(firstName, callback) {
	setTimeout(() => {
		callback(['Javascript', 'React', 'Node js'])
	}, 3000)
}

function getPrice(courseName, callback) {
	setTimeout(() => {
		callback()
	}, 3000)
}




console.info('Asynchronous Task By Promise 1:')
const result = new Promise((resolve, reject) => {
	setTimeout(() => {
		// reject('I will be done after 2 seconds')
		// reject(new Error('Some Error Occured'))
		resolve('I will be done after 2 seconds')
	}, 2000)
})
result
	.then(text => {
		console.log(text)
	})
	.catch(err => {
		console.log(err)
		console.log(err.message)
	})




console.info('Asynchronous Task By Promise 2:')
getUser(1)
	.then(user => {
		console.log(user)
		enrolledCourse(user.firstName)
			.then(courses => {
				console.log(courses)
				getPrice(courses[0])
					.then(
						console.log("Javascript course price is 4000")
					)
					.catch(err => {
						console.log(err.message)
					})
			})
			.catch(err => {
				console.log(err.message)
			})
	})
	.catch(err => {
		console.log(err.message)
	})
function getUser(id) {
 	return new Promise((resolve, reject) => {
	 		setTimeout(() => {
			resolve({
				id: id,
				name: 'Rakibul',
				profession: 'Web Developer'
			})
		}, 3000)
 	})
}
function enrolledCourse(firstName) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(['Javascript', 'React', 'Node js'])
		}, 3000)
	})
}
function getPrice(courseName) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve()
		}, 3000)
	})
}





console.info('Asynchronous Task By Promise 3:')
getUser(1)
	.then(user => {
		console.log(user)
		return enrolledCourse(user.firstName)
	})
	.then(courses => {
		console.log(courses)
		return getPrice(courses[0])	
	})
	.then(() => {
			console.log("Javascript course price is 4000")
		}
	)				
	.catch(err => {
		console.log(err.message)
	})
function getUser(id) {
 	return new Promise((resolve, reject) => {
	 		setTimeout(() => {
			resolve({
				id: id,
				name: 'Rakibul',
				profession: 'Web Developer'
			})
		}, 3000)
 	})
}
function enrolledCourse(firstName) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(['Javascript', 'React', 'Node js'])
		}, 3000)
	})
}
function getPrice(courseName) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve()
			// reject(new Error('Some Error Occured'))
		}, 3000)
	})
}





console.info('Asynchronous Task By promise.all:')
const p1 = Promise.resolve('step1')
const p2 = Promise.resolve('step2')
const p3 = Promise.resolve('step3')
// const p4 = Promise.reject('error ocurred')
Promise.all([p1, p2, p3])
	.then(() => {
		console.log('Everything Ok')
	})
	.catch(err => {
		console.log(err)
	})





console.info('Asynchronous Task By promise.race:')
const q1 = Promise.resolve('step1')
const q2 = Promise.resolve('step2')
const q3 = Promise.resolve('step3')
Promise.race([q1, q2, q3])
	.then((result) => {
		console.log(result)
	})











console.info('Asynchronous Task By AsyncAwait 1:')
async function getResult() {
	const user = await getUser(1)
	console.log(user)
	const courses = await enrolledCourse(user.name)
	console.log(courses)
	const price = await getPrice(courses[0])
	console.log(price)
}
getResult()


async function getResult() {
	const user = await getUser(1)
	console.log(user)
	const courses = await enrolledCourse(user.name)
	console.log(courses)
	await getPrice(courses[0])
	console.log('price 4000')
}
getResult()


async function getResult() {
	const user = await getUser(1)
	const courses = await enrolledCourse(user.name)
	return courses
}
console.log(getResult())


async function getResult() {
	const user = await getUser(1)
	const courses = await enrolledCourse(user.name)
	return courses
}
getResult()
	.then(courses => {
		console.log(courses)
	})
	.catch(err => {
		console.log(err)
	})

function getUser(id) {
 	return new Promise((resolve, reject) => {
	 		setTimeout(() => {
			resolve({
				id: id,
				name: 'Rakibul',
				profession: 'Web Developer'
			})
		}, 3000)
 	})
}
function enrolledCourse(firstName) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(['Javascript', 'React', 'Node js'])
		}, 3000)
	})
}
function getPrice(courseName) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve()
			// reject(new Error('Some Error Occured'))
		}, 3000)
	})
}










console.info('Asynchronous Task By AsyncAwait 2:')
try {
	async function getResult() {
		const user = await getUser(1)
		console.log(user)
		const courses = await enrolledCourse(user.name)
		console.log(courses)
		await getPrice(courses[0])
		console.log('price 4000')
	}
	getResult()
} catch(err) {
	console.log(err)
}

function getUser(id) {
 	return new Promise((resolve, reject) => {
	 		setTimeout(() => {
			resolve({
				id: id,
				name: 'Rakibul',
				profession: 'Web Developer'
			})
		}, 3000)
 	})
}
function enrolledCourse(firstName) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(['Javascript', 'React', 'Node js'])
		}, 3000)
	})
}
function getPrice(courseName) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve()
			// reject(new Error('Some Error Occured'))
		}, 3000)
	})
}