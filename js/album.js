import renderHeader from './header.js';
import { fetchData, firstLetterUpperCase, getUrlParam } from './functions.js';

renderHeader()

async function init() {
    const albumId = getUrlParam('album_id');
    const album = await fetchData(`https://jsonplaceholder.typicode.com/albums/${albumId}?_expand=user&_embed=photos`);

    const albumCard = document.querySelector('#album-card');
    const albumPhotos = document.querySelector('#album-photos');

    document.title = firstLetterUpperCase(album.title);

    let albumTitle = document.createElement('h2');
    let albumAuthor = document.createElement('a');

    albumTitle.textContent = firstLetterUpperCase(album.title);
    albumAuthor.textContent = album.user.name;
    albumAuthor.href = `./user.html?user_id=${album.user.id}`;
    albumCard.append(albumTitle, albumAuthor);

    album.photos.map(img => {
        let albumPhoto = document.createElement('img');
        albumPhoto.src = img.thumbnailUrl;
        albumPhotos.append(albumPhoto);
    })

    albumCard.classList.add('card', 'mt-5');
    albumPhotos.classList.add('card', 'mt-5', 'p-3');
}

init()