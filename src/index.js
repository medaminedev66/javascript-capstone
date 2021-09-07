import './index.html';
import './style.css';
import { getMenuData, displayMenuItems } from './getAPI.js';
import generatePopup from './modules/comments.js';
import mmeal from './img/meal.jpg';

const meal = {
  strCategory: 'chicken',
  strArea: 'Japanaise',
  strMealThumb: mmeal,
  strMeal: 'Teriyaki Chicken Casserole',
};

const getDataAPI = 'https://www.themealdb.com/api/json/v1/1/search.php?f=e';

document.querySelector('.test-comment').addEventListener('click', () => {
  generatePopup(meal);
});

getMenuData(getDataAPI).then((meals) => {
  displayMenuItems(meals);
});
