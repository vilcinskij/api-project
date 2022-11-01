const queryParams = document.location.search;
const urlParams = new URLSearchParams(queryParams);
const search = urlParams.get('search');


function init() {

    const searchResults = document.querySelector('#search-results');
    const searchPageTitle = document.createElement('h1');
    searchPageTitle.textContent = `Search results for '${search}':`;
    searchResults.append(searchPageTitle);


    fetch(`https://jsonplaceholder.typicode.com/users?q=${search}`)
        .then(res => res.json())
        .then(users => {
            const resultsWrapper = document.createElement('div');
            const resultList = document.createElement('ul');
            const resultsWrapperTitle = document.createElement('h2');

            resultsWrapperTitle.textContent = 'Users:'

            resultsWrapper.classList.add('card', 'mb-4');

            users.map(user => {

                const userLink = document.createElement('a');
                userLink.href = `./user.html?user_id=${user.id}`;
                userLink.textContent = user.name;

                const resultElement = document.createElement('li');
                resultList.append(resultElement);
                resultElement.append(userLink);
                searchResults.append(resultsWrapper);
                resultsWrapper.append(resultsWrapperTitle, resultList);
            })
        })
        
        fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`)
        .then(res => res.json())
        .then(posts => {
            const resultsWrapper = document.createElement('div');
            const resultList = document.createElement('ul');

            const resultsWrapperTitle = document.createElement('h2');

            resultsWrapperTitle.textContent = 'Posts:'

            resultsWrapper.classList.add('card', 'mb-4');


            posts.map(post => {

                const userLink = document.createElement('a');
                userLink.href = `./post.html?post_id=${post.id}`;
                userLink.textContent = post.title;

                const resultElement = document.createElement('li');
                resultList.append(resultElement);
                resultElement.append(userLink);
                searchResults.append(resultsWrapper);
                resultsWrapper.append(resultsWrapperTitle, resultList);
            })
        })

        fetch(`https://jsonplaceholder.typicode.com/albums?q=${search}`)
        .then(res => res.json())
        .then(albums => {
            const resultsWrapper = document.createElement('div');
            const resultList = document.createElement('ul');

            const resultsWrapperTitle = document.createElement('h2');

            resultsWrapperTitle.textContent = 'Albums:'

            resultsWrapper.classList.add('card', 'mb-4');


            albums.map(post => {

                const userLink = document.createElement('a');
                userLink.href = `./album.html?album_id=${post.id}`;
                userLink.textContent = post.title;

                const resultElement = document.createElement('li');
                resultList.append(resultElement);
                resultElement.append(userLink);
                searchResults.append(resultsWrapper);
                resultsWrapper.append(resultsWrapperTitle, resultList);
            })
        })

}

init()