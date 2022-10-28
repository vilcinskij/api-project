const albumsWrapper = document.querySelector('#albums-wrapper');
const albumHeader = document.createElement('h4');
albumHeader.textContent = 'Users albums'
albumsWrapper.prepend(albumHeader);


function init() {
    let postsContainer = document.querySelector('#posts-container');

    fetch('https://jsonplaceholder.typicode.com/posts?_embed=comments&_expand=user&_embed=albums')
        .then(res => res.json())
        .then(posts => {
            posts.map(post => {
                let postItem = document.createElement('div');
                let postTitle = document.createElement('h4');
                let postContent = document.createElement('p');
                let postAuthor = document.createElement('a');

                let commentsWrapper = document.createElement('div');
                let commentList = document.createElement('div');

                let userName = post.user.name;
                postAuthor.href = `./user.html?user_id=${post.userId}`;

                post.comments.map(comment => {
                    let commentItem = document.createElement('div');
                    let coomentTitle = document.createElement('h5');
                    let commentAuthor = document.createElement('a');
                    let coomenContent = document.createElement('p');

                    coomentTitle.textContent = comment.name;
                    commentAuthor.textContent = comment.email;
                    commentAuthor.href = `mailto:${comment.email}`;
                    coomenContent.textContent = comment.body;

                    commentItem.append(coomentTitle, commentAuthor, coomenContent)
                    commentList.append(commentItem)

                    commentList.classList.add('comments-list');
                    commentItem.classList.add('card', 'm-3', 'p-3', 'comment-item');
                })

                postTitle.textContent = post.title;
                postAuthor.textContent = userName;
                postContent.textContent = post.body;

                commentsWrapper.append(commentList)
                postItem.append(postTitle, postAuthor, postContent, commentsWrapper);
                postsContainer.append(postItem);


                postItem.classList.add('card', 'm-3', 'p-3');
            })
        })
}

init()


fetch('https://jsonplaceholder.typicode.com/albums?_limit=30&_embed=photos&_expand=user')
    .then(res => res.json())
    .then(albums => {
        console.log(albums);
        albums.map(album => {
            const albumItem = document.createElement('div');
            const albumLink = document.createElement('a');
            const albumTitle = document.createElement('h5');
            const albumAuthor = document.createElement('span');
            const albumCover = document.createElement('img');

            albumLink.href = `./album.html?album_id=${album.id}`
            albumTitle.textContent = album.title
            albumAuthor.textContent = album.user.name
            const randomIndex = Math.floor(Math.random() * album.photos.length)
            albumCover.src = album.photos[randomIndex].thumbnailUrl

            albumLink.append(albumTitle)
            albumItem.append(albumCover, albumLink, albumAuthor)
            albumsWrapper.append(albumItem);

            albumItem.classList.add('card')

        })
    })















// function capFirs(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

// capFirs(string)