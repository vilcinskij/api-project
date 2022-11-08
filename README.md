

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

  6. Sukurti naują puslapį album.html ir jame atvaizduoti:<br>
  6.1. Albumo pavadinimą.<br>
  6.2. Album autoriaus vardą. Paspaudus ant vardo - nukreipiama į autoriaus puslapį.<br>
  6.3. Skiltis, kurioje atvaizduojamos visos albumo nuotraukos.<br>
  
7. Sukurti naują puslapį post.html ir jame atvaizduoti:<br>
  7.1. Įrašo (post) pavadinimą.<br>
  7.2. Autoriaus vardą. Paspaudus ant autoriaus vardo, turėtų atidaryti autoriaus puslapį.<br>
  7.3. Įrašo turinį.<br>
  7.4. Įrašo komentarus. Komentarai turi būti atvaizduojami tokiu pačiu principu kaip ir pagrindiniame puslapyje.<br>
  7.5. Nuoroda „Kiti autoriaus įrašai", kurią paspaudus bus nukreipiama į naują puslapį posts.html. Jame bus atvaizduojami visi šio vartotojo įrašai.<br>

8. Sukurti vartotojų puslapį (users.html), kuriame būtų atvaizduotas vartotojų sąrašas.<br>
  8.1. Prie vartotojo turėtu būti jo vardas ir parašytų post'ų skaičius.<br>
  8.2. Paspaudus ant vartotojo - nukreipiama į jo puslapį.<br>

9. Tokiu pačiu principu, kaip ir vartotojų puslapį, sukurti puslapį albumams (albums.html).<br>
  9.1. Prie kiekvieno albumo turi būti:<br>
    9.1.1. Parašytas jo pavadinimas.<br>
    9.1.2. Parašytas vartotojo, sukūrusio šį albumą, vardas.<br>
    9.1.3. Albume esančių nuotraukų skaičius.<br>
    9.1.4. Viena nuotrauka<br>

10. Sukurti navigacijos elementą, kuris nukreips į puslapius:<br>
  10.1. Home / pagrindinis puslapis.<br>
  10.2. Users / vartotojų puslapis.<br>
  10.3. Albums / albumų puslapis.<br>
  10.4. Posts / pranešimų puslapis.<br>

11. Sukurti paieškos funkcionalumą navigacijos elemente:<br>
  11.1. Navigacijos elemente sukurti formą, kuri turi text tipo input elementą (nepamiršti pridėti name atributą).<br>
  11.2. Formos submit metu, naudojant action atributą, nukreipti į naują puslapį (search.html).<br>
  
  11.3. Šiame puslapyje atvaizduoti paieškos rezultatą.<br>
    11.3.1. Jeigu nėra tinkamų rezultatų, tai parašyti jog rezultatų pagal užklausą nerasta.<br>
  
  11.4. Filtruoti pagal šias kategorijas:<br>
    11.4.1. Vartotojus.<br>
    11.4.2. Postus.<br>
    11.4.2. Albumus.<br>


  15.1. Puslapiuose, kuriuose atvaizuojami post'ai, atvaizduoti pirmus 25 post'us. Tai bus pirmas post'ų puslapis.<br>
  15.2.
    15.2.1. Post'ų sąrašo apačioje pridėti nuorodas, kurios leidžia perjungti kitą post'ų puslapį. Pvz. antras puslapis rodys post'us nuo 26 iki 50, trečias puslapis rodys nuo 51 iki 75 ir t.t.<br>
    15.2.2. Puslapių nuorodų turi būti tiek, kad būtų galimybė atvaizduoti visus post'us.<br>
    15.2.3. Galima paspausti ant visų nuorodų, išskyrus tą, kurios puslapyje šiuo metu esama.<br>
15.3<br>
    15.3.1. Sukurti nuorodas pirmam ir paskutiniam puslapiu<br>
    15.3.2. Jeigu šiuo metu esama pirmame puslapyje, tai jo nuorodos paspausti negalim<br>
    15.3.3. Jeigu šiuo metu esama paskutiniame puslapyje, tai jo nuorodos paspausti negalim<br>