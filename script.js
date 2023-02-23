var personen = [{
        "voornaam": "Piet",
        "achternaam": "Heijn",
        "nationaliteit": "Nederlandse",
        "leeftijd": 47,
        "gewicht": 86
    },
    {
        "voornaam": "Masud",
        "achternaam": "Mohammed",
        "nationaliteit": "Iraans",
        "leeftijd": 37,
        "gewicht": 79
    },
    {
        "voornaam": "Marie",
        "achternaam": "Visser",
        "nationaliteit": "Belgische",
        "leeftijd": 42,
        "gewicht": 69
    },
    {
        "voornaam": "Abdullah",
        "achternaam": "Öcalan",
        "nationaliteit": "Turks",
        "leeftijd": 73,
        "gewicht": 85
    },
    {
        "voornaam": "Bjorn",
        "achternaam": "Hakke",
        "nationaliteit": "Zweeds",
        "leeftijd": 18,
        "gewicht": 71
    },
    {
        "voornaam": "Jouke",
        "achternaam": "Dijkstra",
        "nationaliteit": "Fries",
        "leeftijd": 29,
        "gewicht": 82
    },
    {
        "voornaam": "Bo",
        "achternaam": "Wáng",
        "nationaliteit": "Chinees",
        "leeftijd": 38,
        "gewicht": 65
    }]

for(i = 0; i < personen.length; i++){
    const container = document.getElementById("container");
    var voornaam = document.createElement('p');
    var achternaam = document.createElement('p');
    var nationaliteit = document.createElement('p');
    var leeftijd = document.createElement('p');
    var gewicht = document.createElement('p');
    var line = document.createElement('p');

    voornaam.innerHTML = `Voornaam: ${personen[i]['voornaam']}`;
    voornaam.setAttribute("id",`${i}`);

    achternaam.innerHTML = `achternaam: ${personen[i]['achternaam']}`;
    achternaam.setAttribute("id",`${i}`);

    nationaliteit.innerHTML = `nationaliteit: ${personen[i]['nationaliteit']}`;
    nationaliteit.setAttribute("id",`${i}`);

    leeftijd.innerHTML = `leeftijd: ${personen[i]['leeftijd']}`;
    leeftijd.setAttribute("id",`${i}`);

    gewicht.innerHTML = `gewicht: ${personen[i]['gewicht']}`;
    gewicht.setAttribute("id",`${i}`);

    line.innerHTML = "===================================================================";
    line.setAttribute("id",`${i}`);

    container.appendChild(voornaam);
    container.appendChild(achternaam);
    container.appendChild(nationaliteit);
    container.appendChild(leeftijd);
    container.appendChild(gewicht);
    container.appendChild(line);
}
var submitBtn = document.getElementById('submit');
submitBtn.addEventListener("click", function(){
    var ageInput = document.getElementById('ageInput').value;
    for(i = 0; i < personen.length; i++){
        if(ageInput > personen[i]['leeftijd']){
            for(x = 0; x < 6; x++){
                if(document.getElementById(`${i}`) == null){
                }
                else {
                    document.getElementById(`${i}`).remove();
                }
            }
        }
    }
})