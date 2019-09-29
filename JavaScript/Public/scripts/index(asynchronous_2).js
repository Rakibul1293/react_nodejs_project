console.info('INFO: Simple Synchronous Task')
const posts = [
	{ title: 'Post One', body: 'This is post one' },
	{ title: 'Post Two', body: 'This is post two' }
]
function getPosts() {
	setTimeout(() => {
		let output = ''
		posts.forEach((post, index) => {
			output += `<li>${post.title}</li>`
			console.log(post.title)
		})
		document.body.innerHTML = output
	}, 1000)
}
function createPost(post) {
	setTimeout(() => {
		posts.push(post)
	}, 2000)
}

getPosts()
createPost({ title: 'Post Three', body: 'This is post Three' })





console.info('INFO: Asynchronous Task By Callback')
const posts = [
	{ title: 'Post One', body: 'This is post one' },
	{ title: 'Post Two', body: 'This is post two' }
]
function getPosts() {
	setTimeout(() => {
		let output = ''
		posts.forEach((post, index) => {
			output += `<li>${post.title}</li>`
			console.log(post.title)
		})
		document.body.innerHTML = output
	}, 1000)
}
function createPost(post, callback) {
	setTimeout(() => {
		posts.push(post)
		callback()
	}, 2000)
}

createPost({ title: 'Post Three', body: 'This is post Three' }, getPosts)





console.info('INFO: Asynchronous Task By Promise')
const posts = [
	{ title: 'Post One', body: 'This is post one' },
	{ title: 'Post Two', body: 'This is post two' }
]
function getPosts() {
	setTimeout(() => {
		let output = ''
		posts.forEach((post, index) => {
			output += `<li>${post.title}</li>`
			console.log(post.title)
		})
		document.body.innerHTML = output
	}, 1000)
}
function createPost(post) {
	return new Promise((resolve, reject) => {
			setTimeout(() => {
			posts.push(post)

			const error = false
			if(!error) {
				resolve()
			} else {
				reject('Error: Something went wrong')
			}
		}, 2000)
	})
}

createPost({ title: 'Post Three', body: 'This is post Three' })
	.then(getPosts)
	.catch(err => console.log(err))





console.info('INFO: Asynchronous Task By Promise.all')
const promise1 = Promise.resolve('Hello World')
const promise2 = 10
const promise3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 2000, 'Good Bye')
})
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
const promise5 = fetch('https://jsonplaceholder.typicode.com/users')
	.then(res => res.json())

Promise.all([promise1, promise2, promise3, promise4, promise5])
	.then(values => console.log(values))





console.info('INFO: Asynchronous Task By Async/Await')
const posts = [
	{ title: 'Post One', body: 'This is post one' },
	{ title: 'Post Two', body: 'This is post two' }
]
function getPosts() {
	setTimeout(() => {
		let output = ''
		posts.forEach((post, index) => {
			output += `<li>${post.title}</li>`
			console.log(post.title)
		})
		document.body.innerHTML = output
	}, 1000)
}
function createPost(post) {
	return new Promise((resolve, reject) => {
			setTimeout(() => {
				posts.push(post)

				const error = false
				if(!error) {
					resolve()
				} else {
					reject('Error: Something went wrong')
				}
		}, 2000)
	})
}
async function init() {
	await createPost({ title: 'Post Three', body: 'This is post Three' })
	getPosts()
}
init()





console.info('INFO: Asynchronous Task By Async/Await Fetch')
async function fetchUsers() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await res.json()
	console.log(data)
}
fetchUsers()