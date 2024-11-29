import { Navigation } from './navigation.js';
import { Scroll } from './scroll.js';
import { FormHandler } from './formHandler.js';
import { settings } from './settings.mjs';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize navigation
  const navigation = new Navigation('.menu', 'products-section', 'about-us-section');

  // Initialize scroll behavior
  const scroll = new Scroll('discover', '.hero');

  // Initialize form handler
  const formHandler = new FormHandler('submit', settings.url + '/formData');
});
