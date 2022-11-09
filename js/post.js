import renderHeader from './header.js';
import { firstLetterUpperCase, getUrlParam, renderAllComments, renderLinkElement, renderSinglePost } from './functions.js';

async function init() {

    const postId = getUrlParam('post_id');
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}?_expand=user&_embed=comments`);
    const post = await res.json()
    document.title = firstLetterUpperCase(post.title);
    
    const postWrapper = document.querySelector('#post-wrapper');
    const postContent = renderSinglePost(post);
    const commentsWrapper = renderAllComments(post);
    const otherPostsLink = renderLinkElement(post)

    
    renderAllComments(post, postWrapper);
    
    
    postWrapper.append(otherPostsLink, postContent, commentsWrapper);
    
    postWrapper.classList.add('mt-5');
}

renderHeader()
init()