import renderHeader from './header.js'
renderHeader()


async function init() {
    const queryParams = document.location.search;
    const urlParams = new URLSearchParams(queryParams);
    const albumId = urlParams.get('album_id');

    const albumCard = document.querySelector('#album-card');
    const albumPhotos = document.querySelector('#album-photos');

    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}?_expand=user&_embed=photos`);
    const album = await res.json();
    document.title = album.title;

    let albumTitle = document.createElement('h2');
    let albumAuthor = document.createElement('a');

    albumTitle.textContent = album.title;
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