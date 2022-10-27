const albumId = 7;

const albumCard = document.querySelector('#album-card');
const albumPhotos = document.querySelector('#album-photos');


fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}?_expand=user&_embed=photos`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let albumTitle = document.createElement('h5');
        let albumAuthor = document.createElement('a');
        
        albumTitle.textContent = data.title;
        albumAuthor.textContent = data.user.name;
        albumAuthor.href= '#'
        albumCard.append(albumTitle, albumAuthor);

        data.photos.map(img => {
            let albumPhoto = document.createElement('img');
            albumPhoto.src = img.thumbnailUrl;
            albumPhotos.append(albumPhoto);
        })

    })

albumCard.classList.add('card', 'mt-5');
albumPhotos.classList.add('card', 'mt-5');