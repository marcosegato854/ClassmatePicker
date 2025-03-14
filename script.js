const cardData = [
    { numero: 1, nome: "Adrion", cognome: "Bytyqi", email: "adrion.bytyqi.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/1_Adrion.jpg" },
    { numero: 2, nome: "Ludovico", cognome: "Cammarata", email: "ludovico.cammarata.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/2_Ludovico.jpg" },
    { numero: 3, nome: "Damiano", cognome: "Castellarin", email: "damiano.castellarin.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/3_Damiano.jpg" },
    { numero: 4, nome: "Matteo", cognome: "Celant", email: "matteo.celant.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/4_Matteo.jpg" },
    { numero: 5, nome: "Damiano", cognome: "Da Ros", email: "damiano.daros.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/5_DamianoDaRos.jpg" },
    { numero: 6, nome: "Samuele", cognome: "Drigo", email: "samuele.drigo.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/6_DrigoSamuele.jpg" },
    { numero: 7, nome: "Sara", cognome: "Fnaiqi", email: "sara.fnaiqi.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/7_SaraFnaiqi.jpg"},
    { numero: 8, nome: "Matteo", cognome: "Galante", email: "matteo.galante.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/8_MatteoGalante.jpg" },
    { numero: 9, nome: "Aurora", cognome: "Gasparutti", email: "aurora.gasparutti.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/9_Aurora.jpg" },
    { numero: 10, nome: "Nicolò", cognome: "Gobbo", email: "nicolo.gobbo.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/10_Nicolo.jpg" },
    { numero: 11, nome: "Kawe", cognome: "Longon", email: "kawe.longon.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/11_Kawe.jpg" },
    { numero: 12, nome: "Gaia", cognome: "Mantovani", email: "gaia.mantovani.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/12_Gaia.jpg" },
    { numero: 13, nome: "Nicola", cognome: "Marano", email: "nicola.marano.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/13_Nicola.jpg" },
    { numero: 14, nome: "Denis", cognome: "Mascherin", email: "denis.mascherin.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/14_Denis.jpg" },
    { numero: 15, nome: "Zawadi Emilia", cognome: "Piccolo", email: "zawadiemilia.piccolo.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/15_Zawadi.jpg" },
    { numero: 16, nome: "Marco", cognome: "Prevarin", email: "marco.prevarin.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/16_Prevarin_Marco.jpg" },
    { numero: 17, nome: "Giulia", cognome: "Quaino", email: "giulia.quaino.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/17_GiuliaQuaino.jpg" },
    { numero: 18, nome: "Valentina", cognome: "Rossi", email: "valentina.rossi.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/18_Valentina.jpeg" },
    { numero: 19, nome: "Marco", cognome: "Segato", email: "marco.segato.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/19_MarcoSegato.jpg" },
    { numero: 20, nome: "Brayan Camilo", cognome: "Serraino", email: "brayancamilo.serraino.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/20_Brayan.jpg" },
    { numero: 21, nome: "Alessia", cognome: "Tolotti", email: "alessia.tolotti.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/21_AlessiaTolotti.jpg" },
    { numero: 22, nome: "Luca", cognome: "Villalta", email: "luca.villalta.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/22_villalta_luca.jpg" },
    { numero: 23, nome: "Emanuele", cognome: "Zanchetta", email: "emanuele.zanchetta.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/23_Emanuele.jpg" },
    { numero: 24, nome: "Simone", cognome: "Zoccarato", email: "simone.zoccarato.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/24_Simone_Zoccarato.jpg" },
    { numero: 25, nome: "Giovanni", cognome: "Zol", email: "giovanni.zol.24@stud.itsaltoadriatico.it", immagine: "./img/Stud_img/25_Giovanni.jpg" }
];

const cardsDiv = document.getElementById("cards");
const randomBtn = document.getElementById("sorteggia");

randomBtn.addEventListener("click", suspance);

const row = document.createElement("div");
row.className = "row row-cols-5 g-3";
cardsDiv.appendChild(row);

cardData.forEach(student => {
    const col = document.createElement("div");
    col.className = "col"; 

    const card = document.createElement("div");
    card.className = "card h-100";
    card.id = `${student.numero}`;

    const img = document.createElement("img");
    img.src = student.immagine;
    img.alt = `Studente nr.${student.numero}`;
    img.className = "card-img-top";

    const studNameSurname = document.createElement("p");
    studNameSurname.className = "card-text";
    studNameSurname.innerHTML = `${student.nome} ${student.cognome}`;

    card.appendChild(img);
    card.appendChild(studNameSurname);
    col.appendChild(card);
    row.appendChild(col);
});

let callednumbers = [];

function getNumber() {
    let number = getRandomIntInRange(1, 25);
    while (callednumbers.includes(number)) {
        number = getRandomIntInRange(1, 25);
    }

    document.getElementById(number).classList.add("sorteggiato");
    callednumbers.push(number);

    const banner = document.getElementById("winner-banner");
    banner.innerHTML = ""; // Pulisce il contenuto precedente

    const bannerInside = document.createElement("div");
    const winnerImg = document.createElement("img");
    winnerImg.src = cardData[number - 1].immagine;
    const winnerName = document.createElement("h5");
    winnerName.innerHTML = `${cardData[number - 1].nome} ${cardData[number - 1].cognome}`;

    bannerInside.appendChild(winnerImg);
    bannerInside.appendChild(winnerName);
    banner.appendChild(bannerInside);

    banner.classList.remove("hidden");
    banner.classList.add("show");

    // Ferma la musica
    const audio = document.getElementById("random-sound");
    audio.pause();
    audio.currentTime = 0;

    setTimeout(() => {
        banner.classList.remove("show");
        banner.classList.add("hidden");
    }, 5000);
}

function getRandomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function suspance() {
    if (document.querySelector(".sorteggiato")) {
        let elemento1 = document.querySelector(".sorteggiato");
        elemento1.classList.remove("sorteggiato");
        elemento1.classList.add("inactive");
    }

    const cards = document.querySelectorAll('.card');
    let shuffledIndexes = Array.from(cards.keys()).sort(() => Math.random() - 0.5); // Ordine casuale
    let index = 0;

    // Resetta le illuminazioni precedenti
    cards.forEach(card => card.classList.remove('highlight'));

    // Avvia la musica
    const audio = document.getElementById("random-sound");
    audio.play();

    const interval = setInterval(() => {
        if (index > 0) cards[shuffledIndexes[index - 1]].classList.remove('highlight');
        if (index < shuffledIndexes.length) {
            cards[shuffledIndexes[index]].classList.add('highlight');
            index++;
        } else {
            clearInterval(interval);
            setTimeout(getNumber, 1000);
        }
    }, 400);
}


