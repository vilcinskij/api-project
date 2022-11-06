export function firstLetterUpperCase(text) {
    return text[0].toUpperCase() + text.slice(1)
} 

export function getUrlParam(searchText){
    const queryParams = document.location.search;
    const urlParams = new URLSearchParams(queryParams);
    const result = urlParams.get(searchText);
    return result
}

export function renderAllComments(post) {
    const commentsWrapper = document.createElement('div');
    const commentList = document.createElement('div');

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
        commentsWrapper.append(commentList);

        commentList.classList.add('comments-list');
        commentItem.classList.add('card', 'm-3', 'p-3', 'comment-item');
    })
    return commentsWrapper;
}