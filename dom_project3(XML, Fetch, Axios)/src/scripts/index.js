const URL = 'https://jsonplaceholder.typicode.com/users'

let btn = document.querySelector('#loaddata')
let p = document.querySelector('#output')



// btn.addEventListener('click', function() {
//     const xhr = new XMLHttpRequest()

//     xhr.onreadystatechange = () => {
//         // console.log(xhr.response)
//         p.innerHTML = xhr.response
//     }

//     xhr.open('GET', URL)
//     xhr.send()
// })



// btn.addEventListener('click', function() {
//     fetch(URL)
//     // .then(res => console.log(res))

//     // .then(res => console.log(res.json()))

//     // .then(res => res.json())
//     // .then(data => console.log(data))
//     // .catch(err => console.log(err))

    
//     .then(res => res.json())
//     .then(data => {
//         data.forEach((user) => {
//             p.innerHTML = `${p.innerHTML} <br> Name: ${user.name}`
//         });
//     })
//     .catch(err => console.log(err))
// })



import axios from 'axios'
btn.addEventListener('click', function() {
    axios
        .get(URL)
        .then(res => {
            res.data.forEach(user => {
                p.innerHTML = `${p.innerHTML} <br> Name: ${user.name}`
            });
        })
        .catch(err => console.log(err))
})