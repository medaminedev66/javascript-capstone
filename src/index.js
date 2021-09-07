import './index.html';
import './style.css';
import { generatePopup } from './modules/comments';

document
  .querySelector('.test-comment')
  .addEventListener('click', generatePopup);
