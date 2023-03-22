/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.  Ogni membro è caratterizzato dalle seguenti informazioni:
nome
ruolo
foto
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede*/

//MILESTONE 0 - CREAZIONE ARRAY DI OGGETTI

const team = [

    {
        name: "Wayne Barrett",
        role: "Founder & CEO",
        pic: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        pic: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        pic: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        pic: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        pic: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        pic: "barbara-ramos-graphic-designer.jpg"
    }
]
//MILESTONE 1 - STAMPO SU CONSOLE TUTTI I MEMBRI DEL TEAM
//console.log(team);

for (i = 0; i < team.length; i++) {
    const team_member = team[i];
    //console.log(team_member);
    console.log(`name: ${team_member.name}`);
    console.log(`role: ${team_member.role}`);
    console.log(`pic: ${team_member.pic}`);
    
    //MILESTONE 2 - Stampare l'array sottoforma di stringhe nel DOM
    const card = 
    `<div class="col-4">
        <div class="card">
            <h3 class="name">${team_member.name}</h3>
            <img src="./assets/img/${team_member.pic}" alt="">
            <p class="role">${team_member.role}</p>
        </div>
    </div>`

    const rowElement = document.querySelector(".row")
    rowElement.innerHTML += card;
}


