// import renderHeader from './header.js';

async function init() {
    const queryParams = document.location.search;
    const urlParams = new URLSearchParams(queryParams);
    const postId = urlParams.get('post_id');

    const postWrapper = document.querySelector('#post-wrapper');

    postWrapper.classList.add('mt-5');

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}?_expand=user&_embed=comments`);
    const post = await res.json()
    const postTitle = document.createElement('h1');
    const postAuthor = document.createElement('a');
    const postContent = document.createElement('p');
    const authorPosts = document.createElement('a');

    document.title = post.title

    authorPosts.textContent = 'All author posts';
    authorPosts.href = `../posts/posts.html?user_id=${post.user.id}`
    postAuthor.textContent = post.user.name;
    postAuthor.href = `../user/user.html?user_id=${post.user.id}`;
    postTitle.textContent = post.title;
    postContent.textContent = post.body;

    renderAllComments(post)

    postWrapper.append(authorPosts, postTitle, postAuthor, postContent, renderAllComments(post));
}

function renderAllComments(post) {
    let commentsWrapper = document.createElement('div');
    let commentList = document.createElement('div');

    post.comments.map(comment => {
        let commentItem = document.createElement('div');
        let commentTitle = document.createElement('h5');
        let commentAuthor = document.createElement('a');
        let commentContent = document.createElement('p');

        commentTitle.textContent = comment.name;
        commentAuthor.textContent = comment.email;
        commentAuthor.href = `mailto:${comment.email}`;
        commentContent.textContent = comment.body;

        commentItem.append(commentTitle, commentAuthor, commentContent);
        commentList.append(commentItem);

        commentList.classList.add('comments-list');
        commentItem.classList.add('card', 'm-3', 'p-3', 'comment-item');
    })

    commentsWrapper.append(commentList);
    return commentsWrapper;
}

init()