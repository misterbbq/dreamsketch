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
    
    "Claire, je t'aime du plus profond de mon coeur ❤️",
    
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
    

    // Ajoutez vos propres phrases ci-dessous :
    
];

// ====================================
// Variables et éléments DOM
// ====================================
const phraseElement = document.getElementById('phrase');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const copyIcon = document.getElementById('copyIcon');
const copyText = document.getElementById('copyText');
const themeToggle = document.getElementById('themeToggle');
const heartsContainer = document.getElementById('hearts');

let lastPhraseIndex = -1;

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

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// ====================================
// Génération de phrases
// ====================================
function generatePhrase() {
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
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    
    // Position et taille aléatoires
    const size = Math.random() * 20 + 10;
    const left = Math.random() * 100;
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;
    
    heart.style.left = `${left}%`;
    heart.style.fontSize = `${size}px`;
    heart.style.animationDuration = `${duration}s`;
    heart.style.animationDelay = `${delay}s`;
    
    heartsContainer.appendChild(heart);
    
    // Supprimer le cœur après l'animation
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

// ====================================
// Initialisation
// ====================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initHearts();
    
    // Générer une première phrase
    generatePhrase();
    
    // Event listeners
    generateBtn.addEventListener('click', generatePhrase);
    copyBtn.addEventListener('click', copyPhrase);
    themeToggle.addEventListener('click', toggleTheme);
});
