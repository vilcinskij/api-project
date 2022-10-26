
function init() {
    let postsContainer = document.querySelector('#posts-container');

    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5&_embed=comments&_expan=user')
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


                commentsWrapper.append(commentList)

                let userId = post.userId;

                fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                    .then(res => res.json())
                    .then(user => {
                        let userName = user.name;
                        postAuthor.textContent = userName;
                        postAuthor.href = '#';
                    })


                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(res => res.json())
                    .then(coments => {
                        coments.map(comment => {
                            let commentItem = document.createElement('div');
                            let coomentTitle = document.createElement('h5');
                            let commentAuthor = document.createElement('a');
                            let coomenContent = document.createElement('p');

                            coomentTitle.textContent = comment.name;
                            commentAuthor.textContent = comment.email;
                            coomenContent.textContent = comment.body;

                            commentList.append(coomentTitle, commentAuthor, coomenContent)
                        })
                    })




                postTitle.textContent = post.title;
                postContent.textContent = post.body;
                postItem.append(postTitle, postContent, postAuthor, commentsWrapper);
                postsContainer.append(postItem);



                commentList.classList.add('card', 'm-3', 'p-3');
                postItem.classList.add('card', 'm-3', 'p-3');
                postItem.style.width = '800px';
            })
        })


}

init()

