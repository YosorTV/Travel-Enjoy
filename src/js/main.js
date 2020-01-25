import * as ScrollMagic from "scrollmagic";
import gsap, { TimelineMax } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

gsap.registerPlugin();
ScrollMagicPluginGsap(ScrollMagic, TimelineMax);

function scroll() {
  const sectionTrains = document.querySelector('.main_card-trains');
  const sectionFlights = document.querySelector('.main_card-flights');

  const cards = document.querySelector('.main-cards');
  const tl = new TimelineMax({onUpdate:updatePercentage});
  const controller = new ScrollMagic.Controller();
  
  tl.fromTo(sectionTrains, .5, {x:-100, opacity: 0}, {x: 0, opacity: 1});
  tl.fromTo(sectionFlights, .5, {x:100, opacity: 0}, {x: 0, opacity: 1});

  const scene = new ScrollMagic.Scene({
    triggerElement: cards,
    triggerHook: 'onLeave',
    duration: 100
  })

  scene.setPin(cards);
  scene.setTween(tl);
  scene.addTo(controller);
  
  function updatePercentage(){
    tl.progress();
  }
}
scroll();
