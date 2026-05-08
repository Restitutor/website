const navBtn = document.querySelector('#navigation button');
const menu = document.querySelector('#navigation .menu');
let menuOpen = false;

function closeMenu() {
  menuOpen = false;
  navBtn.textContent = '=';
  navBtn.style.transform = 'rotate3d(0,0,0, 0.5turn)';
  menu.style.transform = 'scale(0)';
}

navBtn.addEventListener('click', () => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    navBtn.textContent = 'x';
    navBtn.style.transform = 'rotate3d(0, 1, 0, 0.5turn)';
    menu.style.transform = 'scale(1)';
  } else {
    closeMenu();
  }
});

document.querySelectorAll('#navigation .menu a').forEach(a => {
  a.addEventListener('click', closeMenu);
});

// Parallax — only runs on pages that include #parallax
const parallaxEl = document.getElementById('parallax');
if (parallaxEl) {
  const sky = document.querySelector('.sky');
  const farClouds = document.querySelector('.far_clouds');
  const nearClouds = document.querySelector('.near_clouds');
  const farMountains = document.querySelector('.far_mountains');
  const nearMountains = document.querySelector('.near_mountains');
  const trees = document.querySelector('.trees');
  const scrollBtn = document.querySelector('.scroll');
  const page = document.getElementById('page');

  if (scrollBtn && page) {
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: page.offsetTop * 0.75, behavior: 'smooth' });
    });
  }

  function updateParallax() {
    const y = window.scrollY;

    sky.style.transform          = `translate(0,${-y * 0.1}px)`;
    farClouds.style.transform    = `translate(0,${-y * 0.2}px)`;
    nearClouds.style.transform   = `translate(0,${-y * 0.3}px)`;
    farMountains.style.transform = `translate(0,${-y * 0.4}px)`;
    nearMountains.style.transform= `translate(0,${-y * 0.5}px)`;
    trees.style.transform        = `translate(0,${-y * 0.7}px)`;

    if (scrollBtn) {
      const opacity = 1 - Math.min(y * 0.005, 1);
      if (opacity <= 0) {
        scrollBtn.style.display = 'none';
      } else {
        scrollBtn.style.display = '';
        scrollBtn.style.opacity = opacity;
      }
    }
  }

  window.addEventListener('scroll', updateParallax);
  updateParallax();
}
