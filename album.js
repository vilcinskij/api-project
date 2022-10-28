const queryParams = document.location.search;
const urlParams = new URLSearchParams(queryParams);
const albumId = urlParams.get('album_id');


// const albumId = 8;

const albumCard = document.querySelector('#album-card');
const albumPhotos = document.querySelector('#album-photos');


fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}?_expand=user&_embed=photos`)
    .then(res => res.json())
    .then(album => {
        console.log(album);
        let albumTitle = document.createElement('h2');
        let albumAuthor = document.createElement('a');
        
        albumTitle.textContent = album.title;
        albumAuthor.textContent = album.user.name;
        albumAuthor.href= '#'
        albumCard.append(albumTitle, albumAuthor);

        album.photos.map(img => {
            let albumPhoto = document.createElement('img');
            albumPhoto.src = img.thumbnailUrl;
            albumPhotos.append(albumPhoto);
        })

    })

albumCard.classList.add('card', 'mt-5');
albumPhotos.classList.add('card', 'mt-5');