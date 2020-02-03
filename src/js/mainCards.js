import * as ScrollMagic from "scrollmagic";

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
    const cards = document.querySelector(['.main_card-trains', '.main_card-flights'])
    const controller = new ScrollMagic.Controller({
      globalSceneOptions: {
          triggerHook: "onEnter"
      }
  });
    const scene = new ScrollMagic.Scene({
      triggerElement: cards,
      duration: '100%',
      offset: '50%'
    })
    scene.setClassToggle(cards, 'fade-in');
    scene.addTo(controller);
  }
}