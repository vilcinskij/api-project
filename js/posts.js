import renderHeader from './header.js';
import { firstLetterUpperCase, getUrlParam } from './functions.js';

renderHeader()

async function init() {
    const userId = getUrlParam('user_id');

    let fetchUrl = '';
    if (userId) {
        fetchUrl = `https://jsonplaceholder.typicode.com/users/${userId}/posts?_expand=user`
    } else {
        fetchUrl = `https://jsonplaceholder.typicode.com/posts`
    }

    const postsWrapper = document.querySelector('#posts-wrapper');

    const res = await fetch(fetchUrl)
    const posts = await res.json()
    const pageTitle = document.createElement('h1');
    pageTitle.textContent = `Posts List:`
    document.title = 'Posts'

    const postsList = document.createElement('ul');

    posts.map(post => {
        const listItem = document.createElement('li');
        const listItemLink = document.createElement('a');
        listItemLink.href = `./post.html?post_id=${post.id}`
        listItemLink.textContent = firstLetterUpperCase(post.title);


        listItem.append(listItemLink)
        postsList.append(listItem)
    })
    postsWrapper.append(pageTitle, postsList);
}

init()