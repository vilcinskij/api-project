import renderHeader from './header.js';
import { firstLetterUpperCase } from './functions.js';


async function init() {
    const queryParams = document.location.search;
    const urlParams = new URLSearchParams(queryParams);
    const postId = urlParams.get('post_id');

    const postWrapper = document.querySelector('#post-wrapper');
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}?_expand=user&_embed=comments`);
    const post = await res.json()
    
    document.title = post.title;
    renderSinglePost(post, postWrapper);
    renderAllComments(post, postWrapper);
    
    postWrapper.classList.add('mt-5');
}

function renderSinglePost(post, postWrapper) {
    const postTitle = document.createElement('h2');
    const postAuthor = document.createElement('a');
    const postContent = document.createElement('p');
    const authorPosts = document.createElement('a');

    authorPosts.textContent = 'All author posts';
    authorPosts.href = `../posts/posts.html?user_id=${post.user.id}`
    postAuthor.textContent = post.user.name;
    postAuthor.href = `../user/user.html?user_id=${post.user.id}`;
    postTitle.textContent = firstLetterUpperCase(post.title);
    postContent.textContent = firstLetterUpperCase(post.body) + '.';

    postWrapper.append(authorPosts, postTitle, postAuthor, postContent);
}

function renderAllComments(post, postWrapper) {
    let commentsWrapper = document.createElement('div');
    let commentList = document.createElement('div');

    post.comments.map(comment => {
        let commentItem = document.createElement('div');
        let commentTitle = document.createElement('h5');
        let commentAuthor = document.createElement('a');
        let commentContent = document.createElement('p');

        commentTitle.textContent = firstLetterUpperCase(comment.name);
        commentAuthor.textContent = comment.email;
        commentAuthor.href = `mailto:${comment.email}`;
        commentContent.textContent = firstLetterUpperCase(comment.body) + '.';

        commentItem.append(commentTitle, commentAuthor, commentContent);
        commentList.append(commentItem);

        commentList.classList.add('comments-list');
        commentItem.classList.add('card', 'm-3', 'p-3', 'comment-item');
    })

    commentsWrapper.append(commentList);
    postWrapper.append(commentsWrapper);
}

renderHeader()
init()