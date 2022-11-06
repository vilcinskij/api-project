import renderHeader from './header.js';
import { firstLetterUpperCase } from './functions.js';

renderHeader()


const queryParams = document.location.search;
const urlParams = new URLSearchParams(queryParams);
const userId = urlParams.get('user_id');

const postsWrapper = document.querySelector('#posts-wrapper');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts?_expand=user`)
.then(res => res.json())
.then(posts => {
    console.log(posts)
    
    const pageTitle = document.createElement('h1');
    pageTitle.textContent = `${posts[0].user.name} posts:`
    document.title = pageTitle.textContent
    
    const postsList = document.createElement('ul');

    posts.map(post => {
        const listItem = document.createElement('li');
        const listItemLink = document.createElement('a');


        listItemLink.textContent = post.title;
        listItemLink.href = `./post.html?post_id=${post.id}`


        listItem.append(listItemLink)
        postsList.append(listItem)
    })


    postsWrapper.append(pageTitle, postsList)
    // const userName
})