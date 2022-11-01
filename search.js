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
            const params = {
                data: posts,
                parentElement: searchResults,
                title: 'Posts',
                path: 'post'
            }
            renderSearchResults(params);
        })

    fetch(`https://jsonplaceholder.typicode.com/albums?q=${search}`)
        .then(res => res.json())
        .then(albums => {
            const params = {
                data: albums,
                parentElement: searchResults,
                title: 'Albums',
                path: 'album'
            }
            renderSearchResults(params);
        })
}

function renderSearchResults(paramsObj) {
    let {data, title, parentElement, path} = paramsObj;
    const resultsWrapper = document.createElement('div');
    const resultList = document.createElement('ul');
    const resultsWrapperTitle = document.createElement('h2');

    resultsWrapperTitle.textContent = title;
    resultsWrapper.classList.add('card', 'mb-4');

    data.map(item => {
        const resultElement = document.createElement('li');
        const resultLink = document.createElement('a');
        resultLink.href = `./${path}.html?${path}_id=${item.id}`;
        resultLink.textContent = item.title;

        resultElement.append(resultLink);
        resultList.append(resultElement);
        resultsWrapper.append(resultsWrapperTitle, resultList);
        parentElement.append(resultsWrapper);
    })
}

init()
