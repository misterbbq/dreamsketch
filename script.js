// ====================================
// PHRASES - Ajoutez vos phrases ici !
// ====================================

const phrases = [
    "Tu es la plus belle chose qui me soit arrivée.",
    "Mon cœur bat plus fort à chaque fois que je pense à toi.",
    "Avec toi, chaque jour est une nouvelle aventure.",
    "Tu illumines ma vie comme personne d'autre.",
    "Je t'aime plus que tous les mots du monde.",
    "Te serrer dans mes bras, ne penser plus qu'à toi, je n'attends que ça",
    "J'aime tracer des runes, la nuit au clair de lune, sur ton desert sans dunes",

    "L'amour qu'on se voue mutuellement est un calin de pensée",
    
    "Chaque fois que je nous sais éloignés je vois une opportunité de nous retrouver.",

    "Mon coeur pour toi brûleras, et dans mes bras tu seras",
    
    "Pour mon petit flocon, j'ai tant d'admiration",
    
    "J'aime te contempler et constater ta beauté",
    
    "Ce plaisir d'effleurer ta peau, te voir sourir à mes jeux de mots",
    
    "Passer du temps avec toi me met en émoi",
    
    "Pour se réconforter on sait sur qui compter.",
    
    "Sache que tu es désirée pour t'offrir un baiser",
    
    "Songer à toi m'emplit de bonheur",
    
    "Heureux tous les deux, nous irons jusqu'aux cieux",
    
    "Je t'aime du plus profond de mon coeur ❤️",
    
    "Bisou, mon oiseau de paradis",
    
    "Il suffit de quelques douceurs, une bonne odeur et voilà le bonheur !",
    
    "En m'offrant un baiser tu me ramènes dans ton monde de beauté 🥰",
    
    "Je sais apprécier la douceur dont tu me gâtes pour rallonger ces heures délicates",
    
    "Par la poesie que tu écris, je suis tout attendrit",
    
    "Un tant soi peu de caresses me transporte d'allegresse",
    
    "Passer ensemble la nuit, même brève, qu'est ce que j'en rêve !",
    
    "Comme ma tour eiffel à moi, tu brilles de milles feux même de nuit✨",
    
    "Aussi belle qu'une rose, tu fleuris mon esprit 🌹",
    
    "Un câlin, un bisou, ou même une balade et mon coeur bat la chamade",
    
    "Comme ma tour eiffel à moi, tu brilles de milles feux même de nuit✨",
    
    "J'aime vivre à tes cotés et savoir que l'on s'aime",
    
    "Je pense très fort à toi, Claire que j'aime de tout mon coeur !",

    "Je t'aime",
    
    "Quelle chance d'être ton amoureux ! 😍"

    // Ajoutez vos propres phrases ci-dessous :
    
];

const programmes = {
    avant: {
        date: "7 mai 2026",
        items: [
            { heure: "19 h 00", activite: "Retrouvailles" },
            { heure: "20 h 00", activite: "Concert !" },
            { heure: "22 h 45", activite: "Retour en casita" },
            { heure: "23 h 00", activite: "Mise sous couette" },
            { heure: "23 h 01", activite: "Câlinnnns !!!" },
        ]
    },
    pendant: {
        date: "8 mai 2026",
        items: [
            { heure: "9 h 35",  activite: "Réveil tout doux" },
            { heure: "12 h 30", activite: "Dejeuner CW" },
            { heure: "16 h 30", activite: "Retour en casita" },
            { heure: "17 h 00", activite: "Trampoline Park ?" },
            { heure: "19 h 30", activite: "Diner en amoureux" },
            { heure: "20 h 30", activite: "Petit film" },
            { heure: "22 h 30", activite: "Dodo câlins" },
        ]
    },
    apres: {
        date: "9 mai 2026",
        items: [
            { heure: "9 h 35", activite: "Réveil en douceur" },
        ]
    }
};

// ====================================
// Variables et éléments DOM
// ====================================
const toast = document.getElementById("toast");

let diff; // Variable globale pour stocker la différence de temps
let lastPhraseIndex = -1;
let sizeOn = false;
let now = new Date();

//const pageTitle = document.getElementById('page');



// ====================================
// Timer
// ====================================

function updateTimer() {
    const timerElement = document.getElementById('timer');
    const now = new Date();
    const targetDate = new Date('2026-05-07T21:37:04'); //Format ISO 8601 : 'YYYY-MM-DDTHH:mm:ss'
    diff = targetDate - now;
    //console.log(diff);
    setInterval(() => {

        // Si l'élément timer n'existe pas sur cette page, on arrête
        if (!timerElement) return;

        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            if (days > 0) {
                if (days === 1) {
                    timerElement.textContent = `Temps restant : Plus qu'${days} jour !`;
                } else {
                    timerElement.textContent = `Temps restant : Plus que ${days} jours !`;
                }
            } else if(hours > 0) {
                if (hours === 1) {
                    timerElement.textContent = `Temps restant : Il reste qu'${hours} heure !`;
                } else {
                    timerElement.textContent = `Temps restant : Il reste que ${hours} heures !`;
                }
            } else if(minutes > 0) {
                if (minutes === 1) {
                    timerElement.textContent = `Temps restant : C'est bientoooot ! Il reste qu'${minutes} minute !!!`;
                } else {
                timerElement.textContent = `Temps restant : C'est bientoooot ! Dans ${minutes} minutes !!! `;
                }
            } else {
                timerElement.textContent = `Temps restant : ${seconds} !`;
            }
        } else {
            timerElement.textContent = `C'est le moment !!! 💕`;
            //changePage();
        }
    }, 1000);
}



// ====================================
// Gestion du thème
// ====================================
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

function changePage(event) {
    const currentPage = window.location.pathname;
    let targetPage;
    const clickedBtn = event?.target?.closest('button');
    
    // Déterminer la page cible
    if (currentPage.includes('programme.html')) {
        if (clickedBtn && clickedBtn.id === 'menuBtn') {
            if (diff >= 0) {
                showToast("Malice à venir...😏");
            } else {
                targetPage = 'menu.html';
            }
        } else if (clickedBtn && clickedBtn.id === 'prgrmBackBtn') {
            targetPage = 'index.html';
        }
    } else if (currentPage.includes('menu.html')) {
        targetPage = 'programme.html';
    } else if (currentPage.includes('index.html') && clickedBtn && clickedBtn.id === 'prgrmBtn') {
        /*if (diff >= 0) {
            showToast("Malice à venir...😏");
        } else {*/
            targetPage = 'programme.html';
        //}
    } else {
        // Par défaut (index.html ou page racine)
        targetPage = 'index.html';
    }
    
    if (targetPage) {
        document.body.classList.add('fade-out');
        setTimeout(() => {
            // Utiliser un chemin relatif qui fonctionne partout
            const baseUrl = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
            window.location.href = baseUrl + targetPage;
        }, 300);
    }
}

// ====================================
// Adaptation du programme en fonction de la date
// ====================================
function updateProgramme() {
    const date = document.getElementById('date');
    const programmeList = document.getElementById('programme-list');

    if (!programmeList) return;

    let programme;
    if (diff > 0) {
        programme = programmes.avant;
    } else if (now.getDate() === 8 && now.getMonth() === 4) {
        programme = programmes.pendant;
    } else {
        programme = programmes.apres;
    }

    if (date) date.textContent = programme.date;

    const html = programme.items.map(item => `
        <li class="section-title">~~ ${item.heure} ~~</li>
        <li class="section-txt">${item.activite}</li>
    `).join('');

    programmeList.innerHTML = `<ul class="liste">${html}</ul>`;
}



// ====================================
// Toggle thème, générateur et programme
// ====================================

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// ====================================
// Toast de bas de page
// ====================================

let toastTimeout;
function showToast(message) {
    toast.innerText = message;
    toast.classList.add("show");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove("show"), 2500); 
}

// ====================================
// Génération de phrases
// ====================================
function generatePhrase() {
    const phraseElement = document.getElementById('phrase');
    if (phrases.length === 0) {
        phraseElement.textContent = "Ajoutez vos phrases dans le fichier script.js !";
        return;
    }
    
    // Éviter la répétition de la même phrase
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * phrases.length);
    } while (randomIndex === lastPhraseIndex && phrases.length > 1);
    
    lastPhraseIndex = randomIndex;
    
    // Animation de transition
    phraseElement.classList.add('fade-out');
    
    setTimeout(() => {
        phraseElement.textContent = phrases[randomIndex];
        phraseElement.classList.remove('fade-out');
        phraseElement.classList.add('fade-in');
        
        setTimeout(() => {
            phraseElement.classList.remove('fade-in');
        }, 400);
    }, 300);
}

// ====================================
// Copie dans le presse-papier
// ====================================
async function copyPhrase() {
    const phraseElement = document.getElementById('phrase');
    const copyBtn = document.getElementById('copyBtn');
    const copyIcon = document.getElementById('copyIcon');
    const copyText = document.getElementById('copyText');
    const text = phraseElement.textContent;
    
    try {
        await navigator.clipboard.writeText(text);
        
        // Feedback visuel
        copyIcon.textContent = '✅';
        copyText.textContent = 'Copié !';
        copyBtn.classList.add('copied');
        
        setTimeout(() => {
            copyIcon.textContent = '📋';
            copyText.textContent = 'Copier';
            copyBtn.classList.remove('copied');
        }, 2000);
    } catch (err) {
        console.error('Erreur lors de la copie:', err);
    }
}

// ====================================
// Animation des cœurs
// ====================================
function createHeart() {
    const heartsContainer = document.getElementById('hearts');
    const heart = document.createElement('div');

    heart.classList.add('heart');
    heart.innerHTML = '❤';
    
    let size = 0;
    if (sizeOn){
        size = Math.random() * 200 + 10;
        heart.classList.add('big'); // ← classe spéciale grands cœurs
    } else {
        size = Math.random() * 20 + 10;
    }
    const left = Math.random() * 100;
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;

    heart.style.left = `${left}%`;
    heart.style.fontSize = `${size}px`;
    heart.style.animationDuration = `${duration}s`;
    heart.style.animationDelay = `${delay}s`;
    
    heartsContainer.appendChild(heart);

    // Apparition douce uniquement pour les grands cœurs
    if (sizeOn) {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                heart.classList.add('visible');
            });
        });
    }

    setTimeout(() => {
        heart.remove();
    }, (duration + delay) * 1000);
} 

function initHearts() {
    // Créer quelques cœurs au démarrage
    for (let i = 0; i < 10; i++) {
        createHeart();
    }
    
    // Créer de nouveaux cœurs périodiquement
    setInterval(createHeart, 2000);
}

function BigH() {
    sizeOn = true;
    setTimeout(() => {
        sizeOn = false;
    }, 6000);
    
}

// ====================================
// Initialisation
// ====================================
document.addEventListener('DOMContentLoaded', () => {
    // Générer une première phrase seulement si on est sur la page avec le générateur
    const themeToggle = document.getElementById('themeToggle'); 
    const menuBtn = document.getElementById('menuBtn');         
    const prgrmBtn = document.getElementById('prgrmBtn');       
    const menuBackBtn = document.getElementById('menuBackBtn');
    const prgrmBackBtn = document.getElementById('prgrmBackBtn');
    const generateBtn = document.getElementById('generateBtn');
    const phraseElement = document.getElementById('phrase');
    const copyBtn = document.getElementById('copyBtn');
    

    initTheme();
    initHearts();
    // Toujours lancer le timer
    updateTimer();

    if (window.location.pathname.includes('programme.html')) {
        updateProgramme();
    }
    
    // Initialiser le générateur seulement si les éléments existent
    if (phraseElement && generateBtn) {
        generatePhrase();
        generateBtn.addEventListener('click', generatePhrase);
    }
    
    // Event listeners
    if (copyBtn) copyBtn.addEventListener('click', copyPhrase);
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    if (menuBackBtn) menuBackBtn.addEventListener('click', changePage);
    if (prgrmBackBtn) prgrmBackBtn.addEventListener('click', changePage);
    if (menuBtn) menuBtn.addEventListener('click', changePage);
    if (prgrmBtn) prgrmBtn.addEventListener('click', changePage);
    if (toast) toast.addEventListener('click',BigH)
});