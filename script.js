/* =========================================================
   ANTI-BOUE
   SCRIPT JAVASCRIPT COMPLET
========================================================= */


/* =========================================================
   1. TES PRODUITS
=========================================================

   IMPORTANT :

   Chaque produit peut avoir PLUSIEURS PHOTOS.

   Pour ajouter un nouveau produit,
   copie simplement un bloc et change les informations.

========================================================= */

const produits = [

    /* =====================================================
       COUVRE-MOTEUR
    ===================================================== */

    {
        id: 1,

        categorie: "Couvre-moteur",

        nom: "Couvre-moteur modèle 01",

        couleur: "Noir",

        qualite: "Premium",
  
        prix: "Prix sur demande 60000GNF",

        photos: [

            " couvreMoteur/BonneCN.png",
            " couvreMoteur/NikeN.png",
            " couvreMoteur/TeteN.png",
            " couvreMoteur/TvslogoN.png",
            " couvreMoteur/TvsN.png", 
            " couvreMoteur/Psg1.png",
             " couvreMoteur/Psg2.png",
             " couvreMoteur/Real1.png",
             " couvreMoteur/Real2.png",
             " couvreMoteur/Fcb1.png",
             " couvreMoteur/Fcb2.png",
             " couvreMoteur/Fcb3.png",
             " couvreMoteur/Usa.png",
             " couvreMoteur/Usa1.png",


        ]
    },


    {
        id: 2,

        categorie: "Couvre-moteur",

        nom: "Couvre-moteur modèle 02",

        couleur: "Rouge",

        qualite: "Haute qualité",

        prix: "Prix sur demande 60000 GNF",

        photos: [
             " couvreMoteur/BonneCR.png",
            " couvreMoteur/TeteR.png",
             " couvreMoteur/TvslogoR.png",
             " couvreMoteur/TvsR.png",
             " couvreMoteur/Psg1.png",
             " couvreMoteur/Psg2.png",
             " couvreMoteur/Real1.png",
             " couvreMoteur/Real2.png",
             " couvreMoteur/Fcb1.png",
             " couvreMoteur/Fcb2.png",
             " couvreMoteur/Fcb3.png",
             " couvreMoteur/Usa.png",
             " couvreMoteur/Usa1.png",

        ]
    },


    {
        id: 3,

        categorie: "Couvre-moteur",

        nom: "Couvre-moteur modèle 03",

        couleur: "Bleu",

        qualite: "Standard",

        prix: "Prix sur demande 60000 GNF",

        photos: [
             " couvreMoteur/BarcB.png",
             " couvreMoteur/teteb.png",
             " couvreMoteur/BonneCB.png",
             " couvreMoteur/TvsB.png",
             " couvreMoteur/Psg1.png",
             " couvreMoteur/Psg2.png",
             " couvreMoteur/Real1.png",
             " couvreMoteur/Real2.png",
             " couvreMoteur/Fcb1.png",
             " couvreMoteur/Fcb2.png",
             " couvreMoteur/Fcb3.png",
             " couvreMoteur/Usa.png",
             " couvreMoteur/Usa1.png",


        ]
    },


    /* =====================================================
       GARDE-BOUE
    ===================================================== */

    {
        id: 4,

        categorie: "Garde-boue",

        nom: "Garde-boue modèle 01",

        couleur: "Rouge",

        qualite: "Premium",

        prix: "Prix sur demande 20000 GNF",

        photos: [
            "GardeBoue/R1.png",
            "GardeBoue/R2.png",
            "GardeBoue/R3.png",
            "GardeBoue/Usa1.png",
             "GardeBoue/Usa2.png",
        ]
    },


    {
        id: 5,

        categorie: "Garde-boue",

        nom: "Garde-boue modèle 02",

        couleur: "Noir",

        qualite: "Haute qualité",

        prix: "Prix sur demande 20000 GNF",

        photos: [
            "GardeBoue/N1.png",
            "GardeBoue/N2.png",
            "GardeBoue/Usa1.png",
            "GardeBoue/Usa2.png",

        ]
    },
     {
        id: 6,

        categorie: "Garde-boue",

        nom: "Garde-boue modèle 03",

        couleur: "Bleue",

        qualite: "Haute qualité",

        prix: "Prix sur demande 20000 GNF",

        photos: [
                        "GardeBoue/B1.png",
                        "GardeBoue/B2.png",
                        "GardeBoue/Usa1.png",
                        "GardeBoue/Usa2.png",


        ]
    },



    /* =====================================================
       TENDAIRES
    ===================================================== */

    {
        id: 7,

        categorie: "Tendaires",

        nom: "Tendaires modèle 01",

        couleur: "Bleu",

        qualite: "Premium",

        prix: "Prix sur demande 20000 GNF",

        photos: [
            "Tendaires/A224.png",
            "Tendaires/B224.png",
            "Tendaires/BMW1.png",
            "Tendaires/BMW2.png",
            "Tendaires/Fcb1.png",
            "Tendaires/fcb2.png",
            "Tendaires/Nike1.png",
            "Tendaires/Nike2.png",
            "Tendaires/Real1.png",
            "Tendaires/Real2.png",
            "Tendaires/Tvs1.png",
            "Tendaires/Tvs2.png",
            "Tendaires/Tvs3.png",




        ]
    },


    {
        id: 8,

        categorie: "Tendaires",

        nom: "Tendaires modèle 02",

        couleur: "Noir",

        qualite: "Haute qualité",

        prix: "Prix sur demande 20000 GNF",

        photos: [
             "Tendaires/A224.png",
            "Tendaires/B224.png",
            "Tendaires/BMW1.png",
            "Tendaires/BMW2.png",
            "Tendaires/Fcb1.png",
            "Tendaires/fcb2.png",
            "Tendaires/Nike1.png",
            "Tendaires/Nike2.png",
            "Tendaires/Real1.png",
            "Tendaires/Real2.png",
            "Tendaires/Tvs1.png",
            "Tendaires/Tvs2.png",
            "Tendaires/Tvs3.png",


        ]
    },


    /* =====================================================
       PIEDS MOTOS
    ===================================================== */

    {
        id: 9,

        categorie: "Pieds motos",

        nom: "Pieds motos modèle 01",

        couleur: "Noir",

        qualite: "Premium",

        prix: "Prix sur demande 30000 GNF",

        photos: [
            "imagePieds/pieds.jpg",
            "imagePieds/PIEDS MOTO.png",

        ]
    },


    {
        id: 10,

        categorie: "Pieds motos",

        nom: "Pieds motos modèle 02",

        couleur: "Rouge",

        qualite: "Standard",

        prix: "Prix sur demande 30000 GNF",

        photos: [
             "imagePieds/pieds.jpg",
            "imagePieds/PIEDS MOTO.png",

        ]
    },


    /* =====================================================
       TAPIS VOITURE
    ===================================================== */

    {
        id: 11,

        categorie: "Tapis voiture",

        nom: "Tapis voiture modèle 01",

        couleur: "Noir",

        qualite: "Haute qualité",

        prix: "Prix sur demande 70000 GNF",

        photos: [
            "TapisVoitures/Mercedes.png",
            "TapisVoitures/teteN.png",
            "TapisVoitures/Noirtete.png",
            "TapisVoitures/Usa1.png",
            "TapisVoitures/Usa3.png",
            "TapisVoitures/Usatete .png",

        ]
    },


    {
        id: 12,

        categorie: "Tapis voiture",

        nom: "Tapis voiture modèle 02",

        couleur: "Rouge",

        qualite: "Premium",

        prix: "Prix sur demande 70000 GNF",

        photos: [
            "TapisVoitures/BonneR.png",
            "TapisVoitures/BonneB.png",
            "TapisVoitures/TeteR.png",
            "TapisVoitures/teteb.png",
            "TapisVoitures/Mercedes.png",
            "TapisVoitures/Fra.png",
            "TapisVoitures/Usa1.png",
            "TapisVoitures/Usa3.png",
            "TapisVoitures/Usatete.png",

        ]
    }

];



/* =========================================================
   2. VARIABLES
========================================================= */

let categorieSelectionnee = "Tous";

let produitGalerie = null;

let photoActuelle = 0;


const listeProduits =
    document.getElementById("liste-produits");

const recherche =
    document.getElementById("recherche");

const filtreQualite =
    document.getElementById("filtre-qualite");

const filtreCouleur =
    document.getElementById("filtre-couleur");

const nombreProduits =
    document.getElementById("nombre-produits");



/* =========================================================
   3. LIEN WHATSAPP
========================================================= */

function lienWhatsApp(produit) {

    const message =

`Bonjour Anti-Boue 👋

Je souhaite commander / réserver ce produit.

Produit : ${produit.nom}
Catégorie : ${produit.categorie}
Couleur : ${produit.couleur}
Qualité : ${produit.qualite}
Prix : ${produit.prix}

Merci.`;

    return (
        "https://wa.me/224626389339?text=" +
        encodeURIComponent(message)
    );
}



/* =========================================================
   4. AFFICHER LES PRODUITS
========================================================= */

function afficherProduits() {

    const texte =
        recherche.value
        .toLowerCase()
        .trim();


    const qualite =
        filtreQualite.value;


    const couleur =
        filtreCouleur.value;


    const resultats =
        produits.filter(produit => {

            const categorieOK =

                categorieSelectionnee === "Tous" ||

                produit.categorie ===
                categorieSelectionnee;


            const rechercheOK =

                texte === "" ||

                produit.nom
                    .toLowerCase()
                    .includes(texte) ||

                produit.categorie
                    .toLowerCase()
                    .includes(texte) ||

                produit.couleur
                    .toLowerCase()
                    .includes(texte);


            const qualiteOK =

                qualite === "Toutes" ||

                produit.qualite === qualite;


            const couleurOK =

                couleur === "Toutes" ||

                produit.couleur === couleur;


            return (

                categorieOK &&

                rechercheOK &&

                qualiteOK &&

                couleurOK

            );

        });



    /* =====================================================
       NOMBRE DE PRODUITS
    ===================================================== */

    nombreProduits.textContent =

        resultats.length +

        (
            resultats.length > 1
                ? " produits"
                : " produit"
        );



    /* =====================================================
       AUCUN RÉSULTAT
    ===================================================== */

    if (resultats.length === 0) {

        listeProduits.innerHTML = `

            <div style="
                grid-column:1/-1;
                background:white;
                padding:50px 20px;
                text-align:center;
                border-radius:16px;
            ">

                <div style="font-size:50px;">
                    🔍
                </div>

                <h3>
                    Aucun produit trouvé
                </h3>

                <p style="color:#777;">
                    Essayez une autre recherche
                    ou une autre catégorie.
                </p>

            </div>

        `;

        return;
    }



    /* =====================================================
       CRÉATION DES CARTES
    ===================================================== */

    listeProduits.innerHTML =

        resultats.map(produit => {

            /*
                La première photo devient
                la photo principale.
            */

            const premierePhoto =
                produit.photos[0];


            return `

                <article
                    class="produit"
                    data-id="${produit.id}"
                >


                    <!-- IMAGE PRINCIPALE -->

                    <div
                        class="produit-image-container"
                        onclick="ouvrirGalerie(${produit.id})"
                    >

                        <img

                            class="produit-image"

                            src="${premierePhoto}"

                            alt="${produit.nom}"

                            loading="lazy"

                            onerror="
                                this.src='images/produit-indisponible.jpg'
                            "
                        >


                        <!-- NOMBRE DE PHOTOS -->

                        <span class="nombre-photos">

                            📷
                            ${produit.photos.length}

                        </span>


                        <!-- VOIR -->

                        <span class="voir-galerie">

                            Voir les photos →

                        </span>

                    </div>



                    <!-- CONTENU -->

                    <div class="produit-contenu">


                        <span class="etiquette">

                            ${produit.categorie}

                        </span>


                        <h3>

                            ${produit.nom}

                        </h3>


                        <p class="info-produit">

                            🎨 Couleur :
                            ${produit.couleur}

                        </p>


                        <p class="info-produit">

                            ⭐ Qualité :
                            ${produit.qualite}

                        </p>


                        <p class="prix">

                            ${produit.prix}

                        </p>


                        <div class="boutons-produit">


                            <!-- GALERIE -->

                            <button

                                class="btn btn-galerie"

                                onclick="
                                    ouvrirGalerie(${produit.id})
                                "
                            >

                                🖼️ Photos

                            </button>


                            <!-- WHATSAPP -->

                            <a

                                href="${lienWhatsApp(produit)}"

                                target="_blank"

                                class="btn btn-principal"
                            >

                                📱 Commander

                            </a>


                        </div>


                    </div>

                </article>

            `;

        }).join("");
}



/* =========================================================
   5. CRÉER LA GALERIE
========================================================= */

function creerGalerie() {

    /*
        On vérifie si la galerie
        existe déjà.
    */

    if (
        document.getElementById(
            "galerie"
        )
    ) {

        return;
    }


    const galerie =
        document.createElement("div");


    galerie.id = "galerie";

    galerie.className =
        "galerie";


    galerie.innerHTML = `

        <div
            class="galerie-fond"
            onclick="fermerGalerie(event)"
        >


            <div
                class="galerie-contenu"
                onclick="event.stopPropagation()"
            >


                <!-- FERMER -->

                <button

                    class="galerie-fermer"

                    onclick="fermerGalerie()"
                >

                    ×

                </button>


                <!-- IMAGE -->

                <img

                    id="image-galerie"

                    class="image-galerie"

                    src=""

                    alt=""
                >


                <!-- BOUTON PRÉCÉDENT -->

                <button

                    class="galerie-precedent"

                    onclick="photoPrecedente()"
                >

                    ‹

                </button>


                <!-- BOUTON SUIVANT -->

                <button

                    class="galerie-suivant"

                    onclick="photoSuivante()"
                >

                    ›

                </button>


                <!-- INFORMATIONS -->

                <div
                    id="infos-galerie"
                    class="infos-galerie"
                >

                </div>


                <!-- MINIATURES -->

                <div
                    id="miniatures-galerie"
                    class="miniatures-galerie"
                >

                </div>


            </div>

        </div>

    `;


    document.body.appendChild(galerie);
}



/* =========================================================
   6. OUVRIR GALERIE
========================================================= */

function ouvrirGalerie(id) {

    /*
        Trouver le produit
    */

    const produit =
        produits.find(
            p => p.id === id
        );


    if (!produit) {

        return;
    }


    produitGalerie =
        produit;


    photoActuelle = 0;


    creerGalerie();


    afficherPhotoGalerie();


    const galerie =
        document.getElementById(
            "galerie"
        );


    galerie.classList.add("active");


    /*
        Empêche la page
        de défiler derrière
        la galerie.
    */

    document.body.style.overflow =
        "hidden";
}



/* =========================================================
   7. AFFICHER LA PHOTO ACTUELLE
========================================================= */

function afficherPhotoGalerie() {

    if (!produitGalerie) {

        return;
    }


    const image =
        document.getElementById(
            "image-galerie"
        );


    const infos =
        document.getElementById(
            "infos-galerie"
        );


    const miniatures =
        document.getElementById(
            "miniatures-galerie"
        );


    /*
        IMAGE
    */

    image.src =
        produitGalerie
            .photos[photoActuelle];


    image.alt =
        produitGalerie.nom;



    /*
        INFORMATIONS
    */

    infos.innerHTML = `

        <div>

            <strong>
                ${produitGalerie.nom}
            </strong>

            <p>
                ${produitGalerie.categorie}
                •
                ${produitGalerie.couleur}
                •
                ${produitGalerie.qualite}
            </p>

            <b>
                ${photoActuelle + 1}
                /
                ${produitGalerie.photos.length}
            </b>

        </div>

    `;



    /*
        MINIATURES
    */

    miniatures.innerHTML =

        produitGalerie.photos
        .map((photo, index) => {

            return `

                <button

                    class="
                        miniature
                        ${
                            index === photoActuelle
                            ? "active"
                            : ""
                        }
                    "

                    onclick="
                        allerPhoto(${index})
                    "
                >

                    <img

                        src="${photo}"

                        alt="Photo ${index + 1}"

                    >

                </button>

            `;

        })
        .join("");
}



/* =========================================================
   8. PHOTO SUIVANTE
========================================================= */

function photoSuivante() {

    if (!produitGalerie) {

        return;
    }


    photoActuelle++;


    if (
        photoActuelle >=
        produitGalerie.photos.length
    ) {

        photoActuelle = 0;
    }


    afficherPhotoGalerie();
}



/* =========================================================
   9. PHOTO PRÉCÉDENTE
========================================================= */

function photoPrecedente() {

    if (!produitGalerie) {

        return;
    }


    photoActuelle--;


    if (photoActuelle < 0) {

        photoActuelle =
            produitGalerie.photos.length - 1;
    }


    afficherPhotoGalerie();
}



/* =========================================================
   10. ALLER DIRECTEMENT À UNE PHOTO
========================================================= */

function allerPhoto(index) {

    if (!produitGalerie) {

        return;
    }


    photoActuelle = index;


    afficherPhotoGalerie();
}



/* =========================================================
   11. FERMER LA GALERIE
========================================================= */

function fermerGalerie(event) {

    /*
        Si on clique sur le contenu,
        on ne ferme pas.
    */

    if (
        event &&
        event.target !== event.currentTarget
    ) {

        return;
    }


    const galerie =
        document.getElementById(
            "galerie"
        );


    if (galerie) {

        galerie.classList.remove(
            "active"
        );
    }


    document.body.style.overflow =
        "";
}



/* =========================================================
   12. CLAVIER
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        const galerie =
            document.getElementById(
                "galerie"
            );


        /*
            Si la galerie n'est pas ouverte,
            on ne fait rien.
        */

        if (
            !galerie ||
            !galerie.classList.contains("active")
        ) {

            return;
        }


        /*
            Flèche droite
        */

        if (
            event.key === "ArrowRight"
        ) {

            photoSuivante();
        }


        /*
            Flèche gauche
        */

        if (
            event.key === "ArrowLeft"
        ) {

            photoPrecedente();
        }


        /*
            Échap
        */

        if (
            event.key === "Escape"
        ) {

            fermerGalerie();
        }

    }
);



/* =========================================================
   13. CATÉGORIES
========================================================= */

document
    .querySelectorAll(".categorie")
    .forEach(bouton => {

        bouton.addEventListener(
            "click",
            function() {


                /*
                    Retirer active
                    des autres boutons
                */

                document
                    .querySelectorAll(".categorie")
                    .forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });


                /*
                    Activer celui sélectionné
                */

                bouton.classList.add(
                    "active"
                );


                /*
                    Enregistrer
                    la catégorie
                */

                categorieSelectionnee =
                    bouton.dataset.category;


                /*
                    Afficher les produits
                */

                afficherProduits();


                /*
                    Descendre vers
                    le catalogue
                */

                document
                    .getElementById("produits")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    });



/* =========================================================
   14. RECHERCHE
========================================================= */

recherche.addEventListener(
    "input",
    afficherProduits
);



/* =========================================================
   15. FILTRE QUALITÉ
========================================================= */

filtreQualite.addEventListener(
    "change",
    afficherProduits
);



/* =========================================================
   16. FILTRE COULEUR
========================================================= */

filtreCouleur.addEventListener(
    "change",
    afficherProduits
);



/* =========================================================
   17. MENU MOBILE
========================================================= */

function ouvrirMenu() {

    const menu =
        document.querySelector(
            ".navbar"
        );


    menu.classList.toggle(
        "active"
    );
}



/* =========================================================
   18. LANCER LE SITE
========================================================= */

afficherProduits();