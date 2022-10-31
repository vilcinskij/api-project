const header = document.createElement('header');
const menuList = document.createElement('ul');


const searchForm = document.createElement('form');
const searchBox = document.createElement('input');
const searchSubmit = document.createElement('input');
searchSubmit.type = 'Submit';
searchSubmit.value = 'Search';


searchForm.append(searchBox, searchSubmit);


document.body.prepend(header);
header.append(menuList, searchForm);



searchForm.addEventListener('submit', ()=>{
    console.log('labas');
}
)


header.classList.add('d-flex', 'justify-content-center', 'py-3');
menuList.classList.add('nav', 'nav-pills');

const menuItems = [
    {
        title: 'Home',
        path: './index.html'
    },
    {
        title: 'Users',
        path: './users.html'
    },
    {
        title: 'Albums',
        path: './albums.html'
    },
    {
        title: 'Posts',
        path: './posts.html'
    },

]

function addListItems(itemsArray) {
    itemsArray.map(item => {
        const menuItem = document.createElement('li');
        const itemLink = document.createElement('a');

        itemLink.textContent = item.title;
        itemLink.href = item.path;

        menuItem.append(itemLink);
        menuList.append(menuItem);

        menuItem.classList.add('nav-item');
        itemLink.classList.add('nav-link');

        if (item.path == `.${document.location.pathname}`) {
            itemLink.classList.add('active');
        }
    })
}

addListItems(menuItems);