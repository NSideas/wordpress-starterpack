/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */

const container = document.getElementById('site-navigation');
const button = container.querySelector('.menu-toggle');
const menu = container.querySelector('ul');

menu.setAttribute('aria-expanded', 'false');
if (!menu.classList.contains('nav-menu')) {
  menu.classList.add('nav-menu');
}

button.addEventListener('click', () => {
  if (container.classList.contains('toggled')) {
    container.classList.remove('toggled');
    button.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-expanded', 'false');
  } else {
    container.classList.add('toggled');
    button.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-expanded', 'true');
  }
});
