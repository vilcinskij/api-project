import renderHeader from './header.js';
import { firstLetterUpperCase, getUrlParam, renderAllComments } from './functions.js';

async function init() {

    const postId = getUrlParam('post_id')

    const postWrapper = document.querySelector('#post-wrapper');

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}?_expand=user&_embed=comments`);
    const post = await res.json()

    document.title = firstLetterUpperCase(post.title);
    renderSinglePost(post, postWrapper);
    renderAllComments(post, postWrapper);

    const commentsWrapper = renderAllComments(post);

    postWrapper.append(commentsWrapper);

    postWrapper.classList.add('mt-5');
}

function renderSinglePost(post, postWrapper) {
    const postTitle = document.createElement('h2');
    const postAuthor = document.createElement('a');
    const postContent = document.createElement('p');
    const authorPosts = document.createElement('a');

    authorPosts.textContent = 'All author posts';
    authorPosts.href = `./posts.html?user_id=${post.user.id}`;
    postAuthor.textContent = post.user.name;
    postAuthor.href = `./user.html?user_id=${post.user.id}`;
    postTitle.textContent = firstLetterUpperCase(post.title);
    postContent.textContent = firstLetterUpperCase(post.body) + '.';

    postWrapper.append(authorPosts, postTitle, postAuthor, postContent);
}

renderHeader()
init()