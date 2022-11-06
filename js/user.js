import renderHeader from './header.js'
renderHeader()


// import { firstLetterUpperCase } from './functions.js'

// firstLetterUpperCase()
async function init() {
   const queryParams = document.location.search;
   const urlParams = new URLSearchParams(queryParams);
   const userId = urlParams.get('user_id');

   const userCard = document.querySelector('#user-card');
   const postsWrapper = document.querySelector('#posts-wrapper');
   const albumsWrapper = document.querySelector('#albums-wrapper');

   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}?_embed=posts&_embed=albums`)
   const user = await res.json()

   document.title = user.name

   renderUserCard(user, userCard);
   renderAlbums(albumsWrapper, user);
   renderPosts(postsWrapper, userId, user);
}

function renderUserCard(user, userCard) {
   const name = document.createElement('span');
   const username = document.createElement('span');
   const address = document.createElement('a');
   address.href = `https://maps.google.com/?q=${user.address.geo.lat},${user.address.geo.lng}`
   const email = document.createElement('span');
   const phone = document.createElement('span');
   const website = document.createElement('span');
   const company = document.createElement('span');

   name.textContent = `${user.name}`;
   username.textContent = `Username: ${user.username}`;
   address.textContent = `Address: ${user.address.suite} ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`;
   email.textContent = `Email: ${user.email}`;
   phone.textContent = `Phone: ${user.phone}`;
   website.textContent = `Website: ${user.website}`;
   company.textContent = `Company: ${user.company.name}`;

   userCard.append(name, username, address, email, phone, website, company);

   name.classList.add('h4');
}

function renderAlbums(albumsWrapper, user) {
   const albumHeader = document.createElement('h4');
   const albumsList = document.createElement('ul');
   albumHeader.textContent = 'User albums';
   albumsWrapper.prepend(albumHeader);

   user.albums.map(album => {
      const albumItem = document.createElement('li');
      const albumTitle = document.createElement('a');

      albumTitle.href = `./album.html?album_id=${album.id}`
      albumTitle.textContent = album.title;

      albumItem.append(albumTitle);
      albumsList.append(albumItem);
      albumsWrapper.append(albumsList);

      // albumItem.classList.add('card', 'mt-4', 'p-3')
   })
}

function renderPosts(postsWrapper, userId, user) {
   const postsHeader = document.createElement('a');
   postsHeader.textContent = 'User posts';
   postsHeader.href = `./posts.html?user_id=${userId}`;
   postsWrapper.prepend(postsHeader);

   user.posts.map(post => {
      const postItem = document.createElement('div');
      const postTitle = document.createElement('a');
      const postContent = document.createElement('p');

      postTitle.href = `./post.html?post_id=${post.id}`
      postTitle.textContent = post.title;
      postContent.textContent = post.body;

      postItem.append(postTitle, postContent);
      postsWrapper.append(postItem);

      postItem.classList.add('card', 'mt-4', 'p-3')
   })
}

init()