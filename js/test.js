
//Création table dynamique sur la page
function encoderCommande(){

    let nom = document.getElementById("formNom").value;
    let prenom = document.getElementById("formPrenom").value;
    let formChoix = document.getElementById("formChoix").value;
    let tableInfos = [nom, prenom, formChoix];


    var listeTitres = ["Nom", "Prenom", "Choix"];
    // Récupérer la reference de l'endoit ou injecter la table
    var contenant = document.getElementById("panneauDesCommandes");

    // Créer <table> et <tbody>
    var tableau = document.createElement("table");
    var tableauBody = document.createElement("tbody");

    //Créer les intitulés des collones tableau
    var rangeeTitres = document.createElement("tr");

    for(var i = 0; i<listeTitres.length; i++){
        var titreCellule = document.createElement("th");
        var textTitreCellule = document.createTextNode(listeTitres[i]);
        titreCellule.appendChild(textTitreCellule);
        rangeeTitres.appendChild(titreCellule);
    }
    tableauBody.appendChild(rangeeTitres);

    //organiser le contenu
    var rangee = document.createElement("tr");

    for (var k = 0; k < 3; k++) {
        // Créer td et instaurer le texte
        var cellule = document.createElement("td");
        var celluleText = document.createTextNode(tableInfos[k]);
        cellule.appendChild(celluleText);
        rangee.appendChild(cellule);
    }
    tableauBody.appendChild(rangee);

    // Place le tbody dans la table
    tableau.appendChild(tableauBody);
    // Place la table dans le contenant
    contenant.appendChild(tableau);
    // Place des bordures
    tableau.setAttribute("border", "2");
}

function myFocus(element) {
    element.value='';
}

function myBlur(element){
    if (element.value == ''){
        element.value = element.defaultValue;
    }
}


