export class Scroll {
  constructor(buttonId, heroSelector) {
    this.button = document.getElementById(buttonId);
    this.heroSection = document.querySelector(heroSelector);

    this.init();
  }

  init() {
    this.button.addEventListener('click', (event) => {
      event.preventDefault();
      const heroHeight = this.heroSection.offsetHeight;
      window.scrollTo({
        top: this.heroSection.offsetTop + heroHeight,
        behavior: 'smooth',
      });
    });
  }
}
