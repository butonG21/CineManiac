/* eslint-disable import/no-extraneous-dependencies */
// Import our custom CSS
import './style/style.css';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import main from './view/main';
import 'regenerator-runtime';

document.addEventListener('DOMContentLoaded', main);
