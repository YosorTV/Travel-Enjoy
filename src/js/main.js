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
  const controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: "onLeave"
    }
});

  tl.fromTo(sectionTrains, .5, {x:-100, opacity: 0}, {x: 0, opacity: 1});
  tl.fromTo(sectionFlights, .5, {x:100, opacity: 0}, {x: 0, opacity: 1});

  const scene = new ScrollMagic.Scene({
    triggerElement: cards,
    duration: 1,
  })

  scene.setPin(cards, {pushFollowers:false});
  scene.setTween(tl);
  scene.addTo(controller);
  
  function updatePercentage(){
    tl.progress();
  }
}
scroll();

const tab = function(){
  const tabNav = document.querySelectorAll('.main-tabs_item');
  const tabContent = document.querySelectorAll('.tab');
  let tabName = null;

  function selectTabNav(){
    tabNav.forEach(item => item.classList.remove('is-active'));
      this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach((item) => {
      if(item.classList.contains(tabName)) {
        item.classList.add('is-active');
      } else {
        item.classList.remove('is-active');
      }
    })
  }
  tabNav.forEach(item => item.addEventListener('click', selectTabNav));
}
tab();