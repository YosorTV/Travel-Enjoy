import gsap, {TimelineMax, Power2, Power1, Back} from 'gsap';
gsap.registerPlugin();

const cities = document.querySelectorAll('.country');
const places = document.querySelector('.places-name');
const doorIllusion = document.querySelector('.door-illusion');
const images = document.querySelectorAll('.img');
const line = document.querySelector('.line');
const text = document.querySelector('.text');
const btn = document.querySelector('.btn');
const title = document.querySelector('.title');
let current = 0;

function init() {

const tl = new TimelineMax({
  onStart: () => {
    cities.forEach(change => {
      change.style.pointerEvents = 'none';
    });
  },
  onComplete: () => {
    cities.forEach(change => {
      change.style.pointerEvents = 'auto';
    });
  }
});


tl.fromTo(images[0], 3, {opacity: 0, scale:1, pointerEvents: 'all'}, {opacity: 1, scale: 1.3, ease:Back.easeOut.config(4), pointerEvents: 'none'});
tl.fromTo(line, 1, {height: '0'}, {height: '35%', ease:Power2.easeOut},'step1');
tl.fromTo(text, 1, {opacity: 0, x: -400}, {opacity: 1, x:0, ease:Power2.easeInOut},'step1');
tl.fromTo(places, .5, {opacity: 0}, {opacity: 1, ease:Power2.easeInOut},'step2');
tl.fromTo(title, 1,{opacity: 0, x: -400}, {opacity:1, x:0, ease:Power2.easeInOut}, 'step1');
tl.fromTo(btn, .5, {opacity: 0}, {opacity: 1, ease:Power1.easeOut},'step2');

//links (cities)
const status = (active) => {
  cities.forEach((status) => {
    status.classList.remove('active');
  })
  active.classList.add('active');
}

  cities.forEach((city, index)=> {
    city.addEventListener('click', function(){
      status(this);
      switchImg(index);
    })
  })


//images
const switchImg = (imgNumber) => {
  const nextImg = images[imgNumber];
  const currentImg = images[current];

  tl.fromTo(doorIllusion, .3, {boxShadow: 'inset 0em 0em 0em #000'}, {boxShadow: 'inset 0em 3em 2em #000', ease:Power1.easeOut});
  tl.fromTo(currentImg, .3, {opacity: 1, pointerEvents: 'all'}, {opacity: 0, pointerEvents: 'none'});
  tl.fromTo(nextImg, .1, {opacity: 0, pointerEvents: 'none'}, {opacity: 1, pointerEvents: 'all'});

  images.forEach((img, index) => {
    if (index === imgNumber)
      tl.fromTo(img, .6, {y: -600}, {y:-10, ease:Power1.easeOut});
  })

  tl.fromTo(doorIllusion, .3, {boxShadow: 'inset 0em 3em 2em #000'},{boxShadow: 'inset 0em 0em 0em #000', ease:Power2.easeOut});
  tl.fromTo(doorIllusion, .1, {overflow: 'hidden'}, {overflow: 'visible', ease:Power2.easeOut});

  tl.fromTo(images, .7, {scale:1}, {scale: 1.3, ease:Back.easeOut.config(1)});

  current = imgNumber;
  }
}
init();
