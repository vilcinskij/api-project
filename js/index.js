import renderHeader from './header.js';
import { createElement, firstLetterUpperCase, renderAllComments, renderSinglePost } from './functions.js';

async function init() {
    const contentWrapper = document.querySelector('#content-wrapper');
    const albumsWrapperElement = await renderAlbums()
    const postsWrapperElement = await renderPosts()

    contentWrapper.append(postsWrapperElement, albumsWrapperElement)

    renderHeader()
    renderPosts()
    renderAlbums();
}

async function renderPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_embed=comments&_expand=user&_embed=albums')
    const posts = await res.json()

    const postsWrapper = document.createElement('div');
    postsWrapper.id = 'posts-wrapper';
    const postsHeader = document.createElement('h4');
    postsWrapper.classList.add('posts-wrapper');
    postsHeader.textContent = 'Users posts';
    postsWrapper.append(postsHeader);

    posts.map(post => {

        const postItem = createElement({ tag: 'div', classes: 'post-item' })
        const postComments = renderAllComments(post)

        const postContent = renderSinglePost(post)

        postItem.append(postContent, postComments);
        postsWrapper.append(postItem);
    })
    return postsWrapper
}

async function renderAlbums() {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums?_limit=30&_embed=photos&_expand=user');
    const albums = await res.json();

    const albumsWrapper = document.createElement('div');
    const albumsHeader = document.createElement('h4');
    albumsWrapper.id = 'albums-wrapper';
    albumsWrapper.classList.add('albums-wrapper', 'card');
    albumsHeader.textContent = 'Users albums';
    albumsWrapper.append(albumsHeader);

    albums.map(album => {
        const albumItem = document.createElement('div');
        const albumLink = document.createElement('a');
        const albumTitle = document.createElement('h5');
        const albumAuthor = document.createElement('span');
        const albumCover = document.createElement('img');

        albumLink.href = `./album.html?album_id=${album.id}`;
        albumTitle.textContent = firstLetterUpperCase(album.title);
        albumAuthor.textContent = album.user.name;
        const randomIndex = Math.floor(Math.random() * album.photos.length);
        albumCover.src = album.photos[randomIndex].thumbnailUrl;

        albumLink.append(albumTitle);
        albumItem.append(albumCover, albumLink, albumAuthor);
        albumsWrapper.append(albumItem);

        albumItem.classList.add('card');
    })
    return albumsWrapper;
}

init()

