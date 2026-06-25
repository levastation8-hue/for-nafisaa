const btn = document.getElementById('showMore');
const secretBox = document.getElementById('secretBox');
const showEnding = document.getElementById('showEnding');
const endingPage = document.getElementById('endingPage');
const backBtn = document.getElementById('backBtn');
const heartsContainer = document.querySelector('.hearts');
const sparklesContainer = document.querySelector('.sparkles');
const openBtn = document.getElementById('openBtn');
const openingScreen = document.getElementById('openingScreen');
const mainCard = document.getElementById('mainCard');
const bgMusic = document.getElementById('bgMusic');

btn.addEventListener('click', () => {
  secretBox.classList.toggle('hidden');
  btn.textContent = secretBox.classList.contains('hidden')
    ? 'klik kalau kamu penasaran 💌'
    : 'tutup pesan rahasia 🤍';
});

showEnding.addEventListener('click', () => {
  endingPage.classList.remove('hidden');
  endingPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

backBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

openBtn.addEventListener('click', async () => {
  openingScreen.classList.add('hidden');
  mainCard.classList.remove('hidden');

  try {
    await bgMusic.play();
  } catch (e) {
    console.log('Autoplay diblokir browser sampai ada interaksi lagi.', e);
  }
});

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '🤍';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (14 + Math.random() * 18) + 'px';
  heart.style.animationDuration = (6 + Math.random() * 6) + 's';
  heart.style.opacity = (0.6 + Math.random() * 0.4).toFixed(2);
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 12000);
}

function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.innerHTML = '✦';
  sparkle.style.left = Math.random() * 100 + 'vw';
  sparkle.style.fontSize = (8 + Math.random() * 10) + 'px';
  sparkle.style.animationDuration = (5 + Math.random() * 5) + 's';
  sparkle.style.opacity = (0.35 + Math.random() * 0.4).toFixed(2);
  sparklesContainer.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 10000);
}

setInterval(createHeart, 550);
setInterval(createSparkle, 700);

for (let i = 0; i < 12; i++) {
  setTimeout(createHeart, i * 250);
  setTimeout(createSparkle, i * 300);
}
