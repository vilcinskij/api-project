let userCard = document.querySelector('#user-card');


fetch(`https://jsonplaceholder.typicode.com/users/1`)
    .then(res => res.json())
    .then(data => {
        console.log(data)

    })