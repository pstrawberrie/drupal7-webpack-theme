/**
 * Example Entry
 * - include separate JS/SCSS set for specific page
 */

import '../scss/example.scss';
import { consoleGreet } from './util/helpers';

document.addEventListener('DOMContentLoaded', function() {
  console.log('EXAMPLE ASSETS SET');
  consoleGreet();
});