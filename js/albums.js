import renderHeader from './header.js';
import { fetchData, firstLetterUpperCase } from './functions.js';

async function init() {
    const albumsWrapper = document.querySelector('#albums-wrapper');
    albumsWrapper.classList.add('mt-5')

    const albums = await fetchData(`https://jsonplaceholder.typicode.com/albums/?_expand=user&_embed=photos`)

    const albumsList = createAlbumsListElement(albums);

    albumsWrapper.append(albumsList);

    renderHeader()
}

function createAlbumsListElement(albums) {
    const albumsList = document.createElement('ul');

    albums.map(album => {
        const listItem = document.createElement('li');
        const listItemBox = document.createElement('div');
        const albumTitle = document.createElement('h5');
        const albumAuthor = document.createElement('h6');
        const albumLink = document.createElement('a');
        const albumCover = document.createElement('img');

        albumLink.href = `./album.html?album_id=${album.id}`;
        albumTitle.textContent = album.title;
        albumAuthor.textContent = album.user.name;
        const randomIndex = Math.floor(Math.random() * album.photos.length);
        albumCover.src = album.photos[randomIndex].thumbnailUrl;

        albumTitle.textContent = firstLetterUpperCase(album.title);
        albumAuthor.textContent = album.user.name;

        albumLink.append(listItemBox);

        listItemBox.append(albumCover, albumTitle, albumAuthor, album.photos.length);
        listItem.append(albumLink);
        albumsList.append(listItem);

        listItemBox.classList.add('card');
        
    })
    return albumsList
}

init()