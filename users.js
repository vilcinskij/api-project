const usersWrapper = document.querySelector('#users-wrapper');
const usersList = document.createElement('ul');

usersWrapper.append(usersList)

fetch(`https://jsonplaceholder.typicode.com/users?_embed=posts`)
    .then(res => res.json())
    .then(users => {
        console.log(users);
        users.map(user => {
            const listElement = document.createElement('li');
            const listElementLink = document.createElement('a');
            const userPostsCont = document.createElement('span');

            userPostsCont.textContent = ` (${user.posts.length})`;
            listElementLink.href = `./user.html?user_id=${user.id}`

            listElementLink.append(user.name);
            listElement.append(listElementLink, userPostsCont);
            usersList.append(listElement);
        })
    })