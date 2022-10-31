
function init() {

const searchResults = document.querySelector('#search-results');
const searchPageTitle = document.createElement('h1');
searchPageTitle


console.log(search);

fetch(`https://jsonplaceholder.typicode.com/users?q=${search}`)
    .then(res => res.json())
    .then(users => {
        console.log(users)
        users.map(user => {

            const userLink = document.createElement('a');
            userLink.href = `./user.html?user_id=${user.id}`;

            console.log(userLink);
        })
    })

}

init()