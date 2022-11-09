import renderHeader from './header.js';
import { createLinksList } from './functions.js';

renderHeader()

async function init() {
    const usersWrapper = document.querySelector('#users-wrapper');

    const res = await fetch(`https://jsonplaceholder.typicode.com/users?_embed=posts`);
    const users = await res.json();

    const usersData = users.map(user  => {
        let userObj = {
            id: user.id,
            title: `${user.name} (${user.posts.length})`
        }
        return userObj
    })
    
    const usersList = createLinksList({
        data: usersData,
        path: 'user',
        listClasses: ['users-list'],
        itemsClasses: ['user-item'],
    })
    usersWrapper.append(usersList)
}
init()