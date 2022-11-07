import renderHeader from './header.js';
import { firstLetterUpperCase, renderAllComments } from './functions.js';

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
        let postItem = document.createElement('div');
        let postTitle = document.createElement('h4');
        let postAuthor = document.createElement('a');
        let postContent = document.createElement('p');

        postAuthor.href = `./user.html?user_id=${post.userId}`;
        
        postTitle.textContent = firstLetterUpperCase(post.title);
        postAuthor.textContent = post.user.name;
        postContent.textContent = firstLetterUpperCase(post.body).repeat(10);

        const commentsWrapper = renderAllComments(post);
        
        postItem.append(postTitle, postAuthor, postContent, commentsWrapper);
        postsWrapper.append(postItem);

        postTitle.classList.add('my-2');
        postAuthor.classList.add('my-4');
        postItem.classList.add('card', 'm-3', 'p-3');
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
