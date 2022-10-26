
function init() {
    let postsContainer = document.querySelector('#posts-container');

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
            posts.map(post => {
                console.log(post);

                let postItem = document.createElement('div');
                let postTitle = document.createElement('h4');
                let postParagraph = document.createElement('p');
                let postAuthor = document.createElement('a');

                let userId = post.userId

                fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                    .then(res => res.json())
                    .then(data => {
                        let userName = data.name
                        postAuthor.textContent = userName
                        postAuthor.href = '#'
                    })

                postTitle.textContent = post.title
                postParagraph.textContent = post.body
                postItem.append(postTitle, postParagraph, postAuthor)
                postsContainer.append(postItem)

            })
        })
}

init()

