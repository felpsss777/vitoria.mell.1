const frases = [
  "Meu plano é simples: eu, você e a liberdade.",
  "Com você, até o caos tem ritmo.",
  "Nada me tira do foco, só o teu sorriso.",
  "Eu sou rua, mas contigo viro lar.",
  "É por você que eu rimo, Mell.",
  "Se BK fez planos, eu faço promessas.",
  "Obrigado por existir.",
  "Feliz dia dos namorados.",
  "Eu te amo, Neguinha.",
  "Espero que goste.",
  "Com você estou completo."
];

let index = 0;
let contadorCliques = 0;

function mostrarMensagem() {
  const texto = document.getElementById("texto");
  texto.style.opacity = 0;
  setTimeout(() => {
    texto.textContent = frases[index];
    texto.style.opacity = 1;
    index = (index + 1) % frases.length;
  }, 300);

  contadorCliques++;
  if (contadorCliques === 7) { // depois de 7 cliques aparece o botão secreto
    document.getElementById("botaoSecreto").style.display = "inline-block";
  }
}

const audio = new Audio("bk-planos.mp3.mp3");
audio.loop = true;
let tocando = false;

function alternarMusica() {
  if (tocando) {
    audio.pause();
  } else {
    audio.play();
  }
  tocando = !tocando;
}

function criarCoracao() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 3 + Math.random() * 2 + 's';

  document.querySelector('.hearts-container').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(criarCoracao, 400);

function abrirLinkSecreto() {
  // Exemplo: abre uma página especial, pode ser WhatsApp, um vídeo, mensagem, etc.
  // window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');

  // Ou exibir mensagem:
  alert("Você achou o link secreto! Te amo muito, meu Amor, mês que vem vou cantar essa pra você no show❤️");
}
