// gauge :credits à https://github.com/naikus/svg-gauge

// var myGauge = Gauge(document.getElementById("gauge-demon"),{
//     dialRadius: 40,
//     dialStartAngle: 135,
//     dialEndAngle: 45,
//     value: 0,
//     max: 100,
//     min: 0,
//     valueDialClass: "value",
//     valueClass: "value-text",
//     dialClass: "dial",
//     gaugeClass: "gauge",
//     showValue: false,
//     gaugeColor: null,
// });

// Variables globales
var nombreAleatoire, accuracyRate = 0;
		
// Fonction pour générer un nombre aléatoire entre 1 et 100
function genererNombreAleatoire() {
    return Math.floor(Math.random() * 100) + 1;
}

// Fonction appelée lorsque l'utilisateur soumet sa devinette
function devinerNombre() {
    // Récupérer la valeur entrée par l'utilisateur
    var devinette = document.getElementById("devinette").value;
    
    // Vérifier si la devinette est correcte
    if (devinette == nombreAleatoire) {
        document.getElementById("response").innerHTML = "Bravo, vous avez deviné le nombre !";
        accuracyRate = 100; // Taux d'exactitude à 100% si la devinette est correcte
    } else if (devinette < nombreAleatoire) {
        document.getElementById("response").innerHTML = "Le nombre à deviner est plus grand !";
        accuracyRate = Math.round((devinette / nombreAleatoire) * 100); // Calcul du taux d'exactitude
    } else if (devinette > nombreAleatoire) {
        document.getElementById("response").innerHTML = "Le nombre à deviner est plus petit !";
        accuracyRate = Math.round((nombreAleatoire / devinette) * 100); // Calcul du taux d'exactitude
    }
    
    // Réinitialiser la devinette
    document.getElementById("devinette").value = "";

    // Mettre à jour la gauche
    // myGauge.setValue(accuracyRate);
}

// Fonction appelée lorsque l'utilisateur clique sur le bouton "Rejouer"
function rejouer() {
    // Réinitialiser les variables
    nombreAleatoire = genererNombreAleatoire();
    accuracyRate = 0;
    
    // Réinitialiser l'affichage
    
    
    // Réinitialiser la devinette
    document.getElementById("devinette").value = "";

    // Afficher la réponse dans la console pour vérification
    console.log("La réponse est : " + nombreAleatoire);
}

// Appeler la fonction pour générer le premier nombre aléatoire
rejouer();



