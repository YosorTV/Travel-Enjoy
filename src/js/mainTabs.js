import gsap, {TimelineMax, Power2, Power1, Back} from 'gsap';
gsap.registerPlugin();

const tab = () => {
    const tabNav = document.querySelectorAll('.main-tabs_item');
    const tabContent = document.querySelectorAll('.tab');
    const tabImg = document.querySelectorAll('.main-tab_content')[0];
    const tl = new TimelineMax();
    let tabName = null;
  
    function selectTabNav(){
      tabNav.forEach(item => {
        item.classList.remove('is-active')
      });
        this.classList.add('is-active');
          tabName = this.getAttribute('data-tab-name');
          selectTabContent(tabName);
    }
  
    function selectTabContent(tabName) {
      tabContent.forEach((item) => {
        tl.fromTo(item, .1, {delay: -.3, y:50, opacity:0}, {ease:Power2.easeIn, y:0, opacity:1});
          if(item.classList.contains(tabName)) {
            item.classList.add('is-active');
          } else {
            item.classList.remove('is-active');
          }
        });
      };
      tabNav.forEach(item => item.addEventListener('click', selectTabNav));
    }

tab();