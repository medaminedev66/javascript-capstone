import './index.html';
import './style.css';
import { getMenuData, displayMenuItems } from './getAPI.js';

const getDataAPI = 'https://www.themealdb.com/api/json/v1/1/search.php?f=f';

getMenuData(getDataAPI).then((meals) => {
  displayMenuItems(meals);
});
