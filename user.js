const userId = 9;

const userCard = document.querySelector('#user-card');
const postsWrapper = document.querySelector('#posts-wrapper');
const albumsWrapper = document.querySelector('#albums-wrapper');

const postsHeader = document.createElement('h4')
const albumHeader = document.createElement('h4')
const postList = document.createElement('ul');


postsHeader.textContent = 'User posts'
albumHeader.textContent = 'User albums'

postsWrapper.prepend(postsHeader);
albumsWrapper.prepend(albumHeader);

fetch(`https://jsonplaceholder.typicode.com/users/${userId}?_embed=posts&_embed=albums`)
   .then(res => res.json())
   .then(data => {
      // console.log(data);
      const name = document.createElement('span');
      const username = document.createElement('span');
      const address = document.createElement('span');
      const email = document.createElement('span');
      const phone = document.createElement('span');
      const website = document.createElement('span');
      const company = document.createElement('span');

      name.textContent = `${data.name}`;
      username.textContent = `Username: ${data.username}`;
      address.textContent = `Address: ${data.address.suite} ${data.address.street}, ${data.address.city}, ${data.address.zipcode}`;
      email.textContent = `Email: ${data.email}`;
      phone.textContent = `Phone: ${data.phone}`;
      website.textContent = `Website: ${data.website}`;
      company.textContent = `Company: ${data.company.name}`;

      data.posts.map(post => {
         const postItem = document.createElement('div');
         const postTitle = document.createElement('a');
         const postContent = document.createElement('p');

         postTitle.href = '#'
         postTitle.textContent = post.title;
         postContent.textContent = post.body;

         postItem.append(postTitle, postContent);
         postsWrapper.append(postItem);

         postItem.classList.add('card', 'mt-4', 'p-3')
      })


      data.albums.map(post => {
         const postItem = document.createElement('li');
         const postTitle = document.createElement('a');

         postTitle.href = `./album.html?album_id=${userId}`
         postTitle.textContent = post.title;

         postItem.append(postTitle);
         postList.append(postItem);
         albumsWrapper.append(postList);

         // postItem.classList.add('card', 'mt-4', 'p-3')
      })


      userCard.append(name, username, address, email, phone, website, company)

      name.classList.add('h4')
   })



