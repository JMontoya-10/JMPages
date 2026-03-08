const overlay = document.getElementById('overlay');
const btnPlay = document.getElementById('btn-play');
const audio = document.getElementById('musica');
const tulipanCenter = document.getElementById('tulipan-center');

const frases = [
    "Me gusta tu forma de ser",
    "Sos una persona increíble",
    "Me hacés reír",
    "Tenés una vibra mágica",
    "Fue bonito coincidir contigo",
    "Eres especial para mí",
    "Gracias por hablarme ese dia del propee",
    "Te Quiero Mucho",
    "Vegetita 777",
    "my dynamic Duo",
    "Te quiero mucho x2 :3",
    "Solo en la neck",
    "Im scared",
    "Im scared x2",
    "Aqui voy Amyy",
    "i Like your eyes",
    "I like your smile",
    "I like your hair",
    "I like your hands",
    "I like your lips :3",
    "I like you 🌷",
    "I really like you so much, Amy" // La frase final en inglés
];

let currentIndex = 0;

btnPlay.addEventListener('click', () => {
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        audio.volume = 0.2;
        audio.play();
        createStars();
    }, 1000);
});

tulipanCenter.addEventListener('click', () => {
    crearNotaEnOrden();
});

function crearNotaEnOrden() {
    if (currentIndex >= frases.length) {
        currentIndex = 0; // Reinicia si querés que vuelva a empezar
    }

    const note = document.createElement('div');
    note.className = 'note-pop';
    
    // Si es la última frase, le añadimos una clase especial de CSS
    if (currentIndex === frases.length - 1) {
        note.classList.add('final-note');
    }

    note.innerText = frases[currentIndex];
    currentIndex++;

    note.style.left = "50%";
    note.style.top = "50%";

    const randomX = (Math.random() - 0.5) * 200; 
    note.style.marginLeft = `${randomX}px`;

    document.body.appendChild(note);
    setTimeout(() => note.remove(), 8000); 
}

function createStars() {
    const bg = document.getElementById('particles-js');
    for (let i = 0; i < 60; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        bg.appendChild(star);
    }
}