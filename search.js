const queryParams = document.location.search;
const urlParams = new URLSearchParams(queryParams);
const search = urlParams.get('search');

function init() {

    const searchResults = document.querySelector('#search-results');
    const searchPageTitle = document.createElement('h1');
    searchPageTitle.textContent = `Search results for '${search}':`;
    searchResults.append(searchPageTitle);

    // fetch(`https://jsonplaceholder.typicode.com/users?q=${search}`)
    //     .then(res => res.json())
    //     .then(users => {

    //         const formattedUsers = users.map(user => {
    //             const formattedUser = {
    //                 id: user.id,
    //                 title: user.name
    //             }
    //             return formattedUser
    //         })

    //         renderSearchResults(formattedUsers);
    //     })

    fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`)
        .then(res => res.json())
        .then(posts => {
            renderSearchResults({
                data: posts,
                parentElement: searchResults,
                title: 'Posts',
                path: 'post'
            });
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


        const searchForm = document.querySelector('#inner-search-form')
        searchForm.addEventListener('submit', (event)=>{
            event.preventDefault();
            const searcharch = event.target.elements['search-input'].value;
        })
}

function renderSearchResults(paramsObj) {
    let { data, title, parentElement, path } = paramsObj;
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
