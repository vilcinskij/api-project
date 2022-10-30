const header = document.createElement('header');
const menuList = document.createElement('ul');

document.body.prepend(header);
header.append(menuList);


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
        
        if (item.path ==  `.${document.location.pathname}`){ 
            console.log('lanbas');
            itemLink.classList.add('active');
        }
    })
}

addListItems(menuItems)


console.log(document.location);

{/* <header class="d-flex justify-content-center py-3">
        <ul class="nav nav-pills">
            <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Users</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Albums</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Posts</a></li>
        </ul>
    </header> */}