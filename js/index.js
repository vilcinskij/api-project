import renderHeader from './header.js'
renderHeader()

async function init() {
    const contentWrapper = document.querySelector('#content-wrapper');
    const albumsWrapperElement = await renderAlbums()
    const postsWrapperElement = await renderPosts()
    
    contentWrapper.append(postsWrapperElement, albumsWrapperElement)
    
    renderPosts()
    renderAlbums();
}

async function renderPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_embed=comments&_expand=user&_embed=albums')
    const posts = await res.json()

    const postsWrapper = document.createElement('div');
    postsWrapper.id = 'posts-wrapper';
    const postsHeader = document.createElement('h4');    
    postsWrapper.classList.add('posts-wrapper', 'card');
    postsHeader.textContent = 'Users posts';
    postsWrapper.append(postsHeader);

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
            let commentTitle = document.createElement('h5');
            let commentAuthor = document.createElement('a');
            let commentContent = document.createElement('p');

            commentTitle.textContent = comment.name;
            commentAuthor.textContent = comment.email;
            commentAuthor.href = `mailto:${comment.email}`;
            commentContent.textContent = comment.body;

            commentItem.append(commentTitle, commentAuthor, commentContent)
            commentList.append(commentItem)

            commentList.classList.add('comments-list');
            commentItem.classList.add('card', 'm-3', 'p-3', 'comment-item');
        })

        postTitle.textContent = post.title;
        postAuthor.textContent = userName;
        postContent.textContent = post.body;

        commentsWrapper.append(commentList);
        postItem.append(postTitle, postAuthor, postContent, commentsWrapper);
        postsWrapper.append(postItem);


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

        albumLink.href = `./album.html?album_id=${album.id}`
        albumTitle.textContent = album.title
        albumAuthor.textContent = album.user.name
        const randomIndex = Math.floor(Math.random() * album.photos.length)
        albumCover.src = album.photos[randomIndex].thumbnailUrl

        albumLink.append(albumTitle)
        albumItem.append(albumCover, albumLink, albumAuthor)
        albumsWrapper.append(albumItem);
        
        albumItem.classList.add('card');
    })
    return albumsWrapper
}

init()

