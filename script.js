const overlay = document.getElementById('overlay');
const btnPlay = document.getElementById('btn-play');
const audio = document.getElementById('musica');
const tulipanCenter = document.getElementById('tulipan-center');

const frases = [
    "Me encanta tu forma de ser",
    "i Like your eyes",
    "I like your smile",
    "I like your hair",
    "I like your hands",
    "I like your lips",
    "I like you again :3",
    "I like you 🌷",
    "Sos una persona increíble",
    "Me hacés sonreír mucho",
    "Tenés una vibra mágica",
    "Fue bonito coincidir contigo",
    "Eres especial para mí",
    "Gracias por hablarme ese dia del propee",
    "Te Quiero Mucho",
    "Im scared",
    "Im scared x2",
    "Vegetita 777",
    "my dynamic Duo",
    "Te quiero mucho x2 :3",
    "Solo en la neck",
    "Solo en la neck x2"
];

btnPlay.addEventListener('click', () => {
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        audio.play();
        createStars();
    }, 1000);
});

tulipanCenter.addEventListener('click', () => {
    crearNota();
});

function spawnMessage() {
    const n = document.createElement('div');
    n.className = 'note-pop';
    n.innerText = frases[Math.floor(Math.random()*frases.length)];
    
    n.style.left = "50%";
    n.style.top = "50%";
    
    // Reducimos el margen aleatorio para que no se salgan de la pantalla
    // Un rango de 100px a los lados es más seguro para móviles
    const randomX = (Math.random() - 0.5) * 200; 
    n.style.marginLeft = `${randomX}px`;
    
    document.body.appendChild(n);
    setTimeout(() => n.remove(), 7000);
}

function crearNota() {
    const note = document.createElement('div');
    note.className = 'note-pop';
    note.innerText = frases[Math.floor(Math.random() * frases.length)];
    note.style.left = "50%";
    note.style.top = "50px";

    // Dispersión más amplia para notas más grandes
    const randomX = (Math.random() - 0.5) * 350;
    note.style.marginLeft = `${randomX}px`;

    tulipanCenter.appendChild(note);
    setTimeout(() => note.remove(), 8000); // 8 segundos en pantalla
}

function createStars() {
    const bg = document.getElementById('particles-js');
    for (let i = 0; i < 60; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.background = 'white';
        star.style.borderRadius = '50%';
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        star.style.opacity = Math.random();
        star.style.boxShadow = '0 0 10px white';
        bg.appendChild(star);
    }
}