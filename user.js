const userId = 10;

let userCard = document.querySelector('#user-card');
let postsWrapper = document.querySelector('#posts-wrapper');
let postsHeader = document.createElement('h4')

postsHeader.textContent = 'User posts'
postsWrapper.prepend(postsHeader);

fetch(`https://jsonplaceholder.typicode.com/users/${userId}?_embed=posts&_embed=photos`)
   .then(res => res.json())
   .then(data => {
      console.log(data);
      let name = document.createElement('span');
      let username = document.createElement('span');
      let address = document.createElement('span');
      let email = document.createElement('span');
      let phone = document.createElement('span');
      let website = document.createElement('span');
      let company = document.createElement('span');

      name.textContent = `${data.name}`;
      username.textContent = `Username: ${data.username}`;
      address.textContent = `Address: ${data.name}`;
      email.textContent = `Email: ${data.email}`;
      phone.textContent = `Phone: ${data.phone}`;
      website.textContent = `Website: ${data.website}`;
      company.textContent = `Company: ${data.company.name}`;

      data.posts.map(post => {
         let postItem = document.createElement('div');
         let postTitle = document.createElement('a');
         let postContent = document.createElement('p');

         postTitle.href = '#'
         postTitle.textContent = post.title;
         postContent.textContent = post.body;

         postItem.append(postTitle, postContent);
         postsWrapper.append(postItem);

         postItem.classList.add('card', 'mt-4', 'p-3')
      })

      userCard.append(name, username, address, email, phone, website, company)

      name.classList.add('h4')
   })


fetch(`https://jsonplaceholder.typicode.com/albums/${userId}/photos`)
   .then(res => res.json())
   .then(data => { })
