export function firstLetterUpperCase(text) {
    return text[0].toUpperCase() + text.slice(1)
}

export function getUrlParam(searchText) {
    const queryParams = document.location.search;
    const urlParams = new URLSearchParams(queryParams);
    const result = urlParams.get(searchText);
    return result
}

export function renderAllComments(post) {
    const commentsWrapper = document.createElement('div');
    const commentList = document.createElement('div');

    commentsWrapper.innerHTML = `<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
    data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
    data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
</button>`

    post.comments.map(comment => {
        const commentItem = document.createElement('div');
        const commentTitle = document.createElement('h5');
        const commentAuthor = document.createElement('a');
        const commentContent = document.createElement('p');

        commentTitle.textContent = firstLetterUpperCase(comment.name);
        commentAuthor.textContent = comment.email;
        commentAuthor.href = `mailto:${comment.email}`;
        commentContent.textContent = firstLetterUpperCase(comment.body);

        commentItem.append(commentTitle, commentAuthor, commentContent);
        commentList.append(commentItem);
        commentsWrapper.prepend(commentList);

        commentList.classList.add('comments-list');
        commentItem.classList.add('card', 'm-3', 'p-3', 'comment-item');

        commentList.classList.add('carousel-inner');
        commentItem.classList.add('carousel-item');
    })

    commentsWrapper.classList.add('commentsWrapper', 'carousel');
    commentsWrapper.id = 'carouselExampleControls';
    commentsWrapper.setAttribute('data-bs-ride', 'carousel');

    return commentsWrapper;
}