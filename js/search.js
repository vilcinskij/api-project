import renderHeader from './header.js';
import { createLinksList, getUrlParam } from './functions.js';

renderHeader()

async function init() {
    outerSearchForm()
    innerSearchForm()
}

function outerSearchForm() {
    const search = getUrlParam('search');
    getSearchResults(search)
}

function innerSearchForm() {
    const searchForm = document.querySelector('#inner-search-form');
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const searchInput = event.target.elements['search-input'].value;
        getSearchResults(searchInput);
        event.target.reset()
    })
}

async function getSearchResults(search) {
    const searchResults = document.querySelector('#search-results');
    const searchPageTitle = document.createElement('h1');
    searchPageTitle.textContent = `Search results for '${search}':`;
    searchResults.append(searchPageTitle);
    searchResults.innerHTML = '';

    const usersRes = await fetch(`https://jsonplaceholder.typicode.com/users?q=${search}`);
    const users = await usersRes.json();

    const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`);
    const posts = await postsRes.json();

    const albumsRes = await fetch(`https://jsonplaceholder.typicode.com/albums?q=${search}`);
    const albums = await albumsRes.json();

    if (users.length < 1 && posts.length < 1 && albums.length < 1) {
        const notFoundMessage = document.createElement('h2');
        notFoundMessage.textContent = 'not found';
        searchResults.append(notFoundMessage);
    }

    const formattedUsers = users.map(user => {
        const formattedUser = {
            id: user.id,
            title: user.name
        }
        return formattedUser
    })

    renderSearchResults({
        data: formattedUsers,
        parentElement: searchResults,
        title: 'Users',
        path: 'users'
    });

    renderSearchResults({
        data: posts,
        parentElement: searchResults,
        title: 'Posts',
        path: 'post'
    });

    const params = {
        data: albums,
        parentElement: searchResults,
        title: 'Albums',
        path: 'album'
    }
    renderSearchResults(params);
}

function renderSearchResults(paramsObj) {
    let { data, title, parentElement, path } = paramsObj;

    const resultsWrapper = document.createElement('div');
    const resultsWrapperTitle = document.createElement('h2');

    resultsWrapperTitle.textContent = title;

    resultsWrapper.classList.add('card', 'mb-4');
    parentElement.append(resultsWrapper);
        
    const postsListElement = createLinksList({
        data,
        path,
        listClasses: ['search-list'],
        itemsClasses:['search-item']
    });

    resultsWrapper.append(resultsWrapperTitle, postsListElement);
}

init()
