
function init() {
const queryParams = document.location.search;
const urlParams = new URLSearchParams(queryParams);
const search = urlParams.get('search');

const searchResults = document.querySelector('#search-results');
const searchPageTitle = document.createElement('h1');
searchPageTitle


console.log(search);

fetch(`https://jsonplaceholder.typicode.com/users?q=${search}`)
    .then(res => res.json())
    .then(users => {
        console.log(users)
        users.map(user => {

            const userlink = document.createElement('a');
            userlink.href = `./user.html?user_id=${user.id}`;

            console.log(userlink);
        })
    })

}

init()