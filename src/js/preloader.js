window.addEventListener('load', (() => {
  setTimeout(() => {
    const preload = document.querySelector('.box');
    const body = document.querySelector('body');
    body.style.overflowY = 'visible';
    preload.classList.add('preload-finish');
  }, 2000)
}));
