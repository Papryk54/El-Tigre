export class Navigation {
  constructor(menuSelector, defaultSectionId, extraSectionId = null) {
    this.menu = document.querySelector(menuSelector);
    this.defaultSectionId = defaultSectionId;
    this.extraSectionId = extraSectionId;
    this.sections = document.querySelectorAll('.products-section, .about-us, .contact');

    this.init();
  }

  init() {
    this.menu.addEventListener('click', (event) => {
      if (event.target.tagName === 'A') {
        event.preventDefault();
        const target = event.target.textContent.trim();
        this.handleNavigation(target);
      }
    });

    this.showSection(this.defaultSectionId);
    if (this.extraSectionId) {
      document.getElementById(this.extraSectionId).style.display = 'flex';
    }
  }

  handleNavigation(target) {
    if (target === 'Home') {
      this.showSection('products-section');
      document.getElementById('about-us-section').style.display = 'flex';
    } else if (target === 'Product') {
      this.showSection('products-section');
    } else if (target === 'Contact') {
      this.showSection('contact-section');
    }
  }

  showSection(sectionId) {
    this.sections.forEach(section => section.style.display = 'none');
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.style.display = 'flex';
    }
  }
}
