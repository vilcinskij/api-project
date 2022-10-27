

API nuoroda: <a target="_blank" href="https://jsonplaceholder.typicode.com">https://jsonplaceholder.typicode.com</a> 

1. Sukurti puslapį, kuriame bus atvaizduojami įrašai (posts.html). Kiekvienas įrašas turi:<br>
  1.1. Pavadinimą. <br>
  1.2. Pastraipą su įrašo (post) turiniu.<br>
  1.3. Autorių. Tai turi būti nuoroda. Kol kas ji gali niekur nevesti.<br>
  
  2. Po kiekvienu įrašu (post) pridėti posto komentarus. Kiekvienas komentaras turi:<br>
  2.1. Komentaro pavadinimą.<br>
  2.2. Komentaro turinį - pastraipą.<br>
  2.3. Komentarą parašiusio asmens el. pašto adresą.<br>

  3. Sukurti naują puslapį user.html, kuriame bus atvaizduojama vartotojo informacija:<br>
  3.1. Pilnas vardas.<br>
  3.2. Vartotojo vardas / nick'as.<br>
  3.3. El. paštas.<br>
  3.4. Adresas, kuris turės gatvę, namo numerį, miestą, pašto kodą. Paspaudus ant adreso, pagal koordinates, turėtų atidaryti šios vietos Google Maps.<br>
  3.5. Telefono numeris.<br>
  3.6. Internetinio puslapio adresas.<br>
  3.7. Įmonės, kurioje dirba, pavadinimas.<br>

  4. Šiame puslapyje turės būti atvaizduojama:<br>
  4.1. Visi vartotojo parašyti įrašai (posts). Post'ų įrašuose nereikia atvaizduoti komentarų. Kiekvienas post'as turi turėti nuorodą.<br>
  4.2. Visi vartotojo sukurti foto albumai. Kiekvienas albumas turės:<br>
    4.2.1. Albumo pavadinimą, kuris turi būti nuoroda. Kol kas nuoroda gali niekur nevesti.<br>

  5. Pagrindiniame (index.html) puslapyje pridėti skiltį, kurioje atvaizduojamas albumų sąrašas. Kiekvienas albumas turės:<br>
  5.1. Pavadinimą, o paspaudus ant jo - nukreipiama į albumą (album.html).<br>
  5.2. Albumo autoriaus vardą.<br>
  5.3. Nuotrauką.<br>

  6. Sukurti naują puslapį album.html ir jame atvaizduoti:
  6.1. Albumo pavadinimą.
  6.2. Album autoriaus vardą. Paspaudus ant vardo - nukreipiama į autoriaus puslapį.
  6.3. Skiltis, kurioje atvaizduojamos visos albumo nuotraukos.
  
7. Sukurti naują puslapį post.html ir jame atvaizduoti:
  7.1. Įrašo (post) pavadinimą.
  7.2. Autoriaus vardą. Paspaudus ant autoriaus vardo, turėtų atidaryti autoriaus puslapį.
  7.3. Įrašo turinį.
  7.4. Įrašo komentarus. Komentarai turi būti atvaizduojami tokiu pačiu principu kaip ir pagrindiniame puslapyje.
  7.5. Nuoroda „Kiti autoriaus įrašai", kurią paspaudus bus nukreipiama į naują puslapį posts.html. Jame bus atvaizduojami visi šio vartotojo įrašai.

8. Sukurti vartotojų puslapį (users.html), kuriame būtų atvaizduotas vartotojų sąrašas.
  8.1. Prie vartotojo turėtu būti jo vardas ir parašytų post'ų skaičius.
  8.2. Paspaudus ant vartotojo - nukreipiama į jo puslapį.

9. Tokiu pačiu principu, kaip ir vartotojų puslapį, sukurti puslapį albumams (albums.html).
  9.1. Prie kiekvieno albumo turi būti:
    9.1.1. Parašytas jo pavadinimas.
    9.1.2. Parašytas vartotojo, sukūrusio šį albumą, vardas.
    9.1.3. Albume esančių nuotraukų skaičius.
    9.1.4. Viena nuotrauka