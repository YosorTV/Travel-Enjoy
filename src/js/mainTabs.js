import gsap, {TimelineMax} from 'gsap'
gsap.registerPlugin(TimelineMax);

const tl = new TimelineMax();

const tab = () => {
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
            tl.fromTo(item, .5, {opacity:0}, {opacity: 1});
        } else {
          item.classList.remove('is-active');
        }
      })
    }
    tabNav.forEach(item => item.addEventListener('click', selectTabNav));
  }
  tab();