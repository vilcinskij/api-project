import { firstLetterUpperCase } from './functions.js'

firstLetterUpperCase()

const queryParams = document.location.search;
const urlParams = new URLSearchParams(queryParams);
const userId = urlParams.get('user_id');

const userCard = document.querySelector('#user-card');
const postsWrapper = document.querySelector('#posts-wrapper');
const albumsWrapper = document.querySelector('#albums-wrapper');

const postsHeader = document.createElement('a')
const albumHeader = document.createElement('h4')
const postList = document.createElement('ul');


postsHeader.textContent = 'User posts';
postsHeader.href = `./posts.html?user_id=${userId}`;

albumHeader.textContent = 'User albums';

postsWrapper.prepend(postsHeader);
albumsWrapper.prepend(albumHeader);

fetch(`https://jsonplaceholder.typicode.com/users/${userId}?_embed=posts&_embed=albums`)
   .then(res => res.json())
   .then(user => {
      document.title = user.name
      
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


      user.albums.map(album => {
         const postItem = document.createElement('li');
         const postTitle = document.createElement('a');

         postTitle.href = `./album.html?album_id=${album.id}`
         postTitle.textContent = album.title;

         postItem.append(postTitle);
         postList.append(postItem);
         albumsWrapper.append(postList);

         // postItem.classList.add('card', 'mt-4', 'p-3')
      })


      userCard.append(name, username, address, email, phone, website, company)

      name.classList.add('h4')
   })



