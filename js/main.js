const hero = document.querySelector('.hero');

if (CSS.supports('background-blend-mode', 'multiply')) {
  hero.style.backgroundImage = 'url(/img/shoe-3.png), radial-gradient(#747070, #111)';
  hero.style.backgroundBlendMode = 'multiply';
} else {
  hero.style.backgroundColor = '#222';
}