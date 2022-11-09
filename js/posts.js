import { createElement, createLinksList, fetchData, getUrlParam } from './functions.js';
import renderHeader from './header.js';
import renderPaginationLinks from './pagination.js';


async function init() {
    document.title = 'Posts'
    const userId = getUrlParam('user_id');
    const page = getUrlParam('page');

    let fetchUrl = '';
    if (userId) {
        fetchUrl = `https://jsonplaceholder.typicode.com/users/${userId}/posts?_expand=user`
    } else {
        fetchUrl = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20`
    }

    const posts = await fetchData(fetchUrl);
    const postsWrapper = document.querySelector('#posts-wrapper');

    const pageTitle = createElement({
        tag: 'div',
        content: `Posts List:`,
        classes: 'page-title'
    })

    const postsList = createLinksList({
        data: posts,
        wrapper: postsWrapper,
        path: 'post',
        listClasses: ['posts-list'],
        itemsClasses: ['post-item']
    });

    const pagination = renderPaginationLinks(page)

    postsWrapper.append(pageTitle, pagination, postsList);

    renderHeader()
}


init()