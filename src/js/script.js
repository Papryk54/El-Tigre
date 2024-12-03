import { Navigation } from './navigation.js';
import { Scroll } from './scroll.js';
import { FormHandler } from './formHandler.js';
import { settings } from './settings.mjs';

document.addEventListener('DOMContentLoaded', () => {
  new Navigation('.menu', 'products-section', 'about-us-section');
  new Scroll('discover', '.hero');
  new FormHandler('submit', settings.url + '/formData');
});
