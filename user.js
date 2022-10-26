let userCard = document.querySelector('#user-card');


fetch(`https://jsonplaceholder.typicode.com/users/1`)
    .then(res => res.json())
    .then(data => {
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

       name.classList.add('h4')

       userCard.append(name, username, address, email, phone, website, company)
    })