
function init() {
    let postsContainer = document.querySelector('#posts-container');

    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5&_embed=comments&_expand=user')
        .then(res => res.json())
        .then(posts => {
            posts.map(post => {
                console.log(post);

                let postItem = document.createElement('div');
                let postTitle = document.createElement('h4');
                let postContent = document.createElement('p');
                let postAuthor = document.createElement('a');

                let commentsWrapper = document.createElement('div');
                let commentList = document.createElement('div');


                let userName = post.user.name;
                postAuthor.href = '#';

                post.comments.map(comment => {
                    let commentItem = document.createElement('div');
                    let coomentTitle = document.createElement('h5');
                    let commentAuthor = document.createElement('a');
                    let coomenContent = document.createElement('p');

                    coomentTitle.textContent = comment.name;
                    commentAuthor.textContent = comment.email;
                    coomenContent.textContent = comment.body;

                    commentItem.append(coomentTitle, commentAuthor, coomenContent)
                    commentList.append(commentItem)


                    commentItem.classList.add('card', 'm-3', 'p-3');
                })

                postTitle.textContent = post.title;
                postAuthor.textContent = userName;
                postContent.textContent = post.body;

                commentsWrapper.append(commentList)
                postItem.append(postTitle, postAuthor, postContent, commentsWrapper);
                postsContainer.append(postItem);


                postItem.classList.add('card', 'm-3', 'p-3');
                postItem.style.width = '800px';
                postItem.style.margin = 'auto';
            })
        })


}

init()

