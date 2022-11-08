import { createLinksList, getUrlParam } from './functions.js';
import renderHeader from './header.js';
// import createElement from './pagination.js'

renderHeader()

async function init() {
    const userId = getUrlParam('user_id');
    const page = getUrlParam('page');

    let fetchUrl = '';
    if (userId) {
        fetchUrl = `https://jsonplaceholder.typicode.com/users/${userId}/posts?_expand=user`
    } else {
        fetchUrl = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=25`
    }

    console.log(page);

    const postsWrapper = document.querySelector('#posts-wrapper');

    const res = await fetch(fetchUrl)
    const posts = await res.json()
    const pageTitle = document.createElement('h1');
    pageTitle.textContent = `Posts List:`
    document.title = 'Posts'

    postsWrapper.append(pageTitle);


    createLinksList ({
        data: posts,
        wrapper: postsWrapper, 
        path: 'post', 
        listClasses: ['posts-list'], 
        itemsClasses: ['post-item']
    });
}

init()