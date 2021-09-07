import './index.html';
import './style.css';
import generatePopup from './modules/comments.js';
import mmeal from './img/meal.jpg';

const meal = {
  strCategory: 'chicken',
  strArea: 'Japanaise',
  strMealThumb: mmeal,
  strMeal: 'Teriyaki Chicken Casserole',
};

document.querySelector('.test-comment').addEventListener('click', () => {
  generatePopup(meal);
});
