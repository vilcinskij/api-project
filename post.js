const queryParams = document.location.search;
const urlParams = new URLSearchParams(queryParams);
const postId = urlParams.get('post_id');

const postWrapper = document.querySelector('#post-wrapper');

postWrapper.classList.add('mt-5')

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}?_expand=user&_embed=comments`)
    .then(res => res.json())
    .then(post => {
        console.log(post);
        const postTitle = document.createElement('h1');
        const postAuthor = document.createElement('a');
        const postContent = document.createElement('p');
        const authorPosts = document.createElement('a');


        document.title = post.title
        
        authorPosts.textContent = 'All author posts';
        authorPosts.href = `./posts.html?user_id=${post.user.id}`
        postAuthor.textContent = post.user.name;
        postAuthor.href = `./user.html?user_id=${post.user.id}`;
        postTitle.textContent = post.title;
        postContent.textContent = post.body;
        
        let commentsWrapper = document.createElement('div');
        let commentList = document.createElement('div');

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

        commentsWrapper.append(commentList);
        postWrapper.append(authorPosts, postTitle, postAuthor, postContent, commentsWrapper);

    })