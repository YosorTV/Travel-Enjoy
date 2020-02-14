import * as ScrollMagic from "scrollmagic";
import gsap, {TimelineMax, Power1} from 'gsap'
gsap.registerPlugin(TimelineMax);

export default class Card {
  constructor({title, description, type}){
    this.title = title;
    this.description = description;
    this.type = type;
  }

  render(selector){
    const container = document.querySelector(selector);
    if(!container) return;
    const block = document.createElement('figure');
          block.classList.add(`${this.type}`);
    const content = `
      <h2>${this.title}</h2>
      <p>${this.description}</p>`
    block.innerHTML = content;
    container.prepend(block);
    this.scroll();
  }

  scroll() {
    const ipadMedia = window.matchMedia("(min-width: 1024px)");
    const cards = document.querySelector(['.main_card-trains', '.main_card-flights']);
    const mediaOn = (x) => {
      if (x.matches) {
        triggerHook: 0.4
      } else {
        triggerHook: 0.9
      }
    }

    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
      triggerElement: cards,
      triggerHook: mediaOn,
      reverse: false
    })
    scene.setClassToggle(cards, 'fade-in');
    scene.addTo(controller);
    mediaOn(ipadMedia),
    ipadMedia.addListener(mediaOn)
  }
}
