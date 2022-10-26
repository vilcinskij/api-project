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

       name.textContent = data.name;
       username.textContent = data.username;
       address.textContent = data.name;
       email.textContent = data.email;
       phone.textContent = data.phone;
       website.textContent = data.website;
       company.textContent = data.company.name;

       userCard.append(name, username, address, email, phone, website, company)
    })