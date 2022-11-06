import renderHeader from './header.js';
import { firstLetterUpperCase } from './functions.js';

renderHeader()

async function init() {   
    const usersWrapper = document.querySelector('#users-wrapper');
    const usersList = document.createElement('ul');
    
    usersWrapper.append(usersList);
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/users?_embed=posts`);
    const users = await res.json();
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
}
init()