import './index.html';
import './style.css';
import { getMenuData, displayMenuItems } from './getAPI.js';
import countMenuItems from './modules/counter.js';

const getDataAPI = 'https://www.themealdb.com/api/json/v1/1/';
const allItems = document.getElementById('menuCounter');
const indianFood = document.getElementById('indianFood');
const seaFood = document.getElementById('seaFood');
const homeItems = document.getElementById('menuList');
const indianItmes = document.getElementById('indianList');
const seaItems = document.getElementById('seaList');

allItems.addEventListener('click', () => {
  indianItmes.style.display = 'none';
  seaItems.style.display = 'none';
  getMenuData(`${getDataAPI}search.php?f=b`).then((meals) => {
    displayMenuItems(meals, homeItems);
  });
});

getMenuData(`${getDataAPI}search.php?f=b`).then((meals) => {
  const itemsLength = countMenuItems(meals);
  displayMenuItems(meals, homeItems);
  allItems.innerText = `Home (${itemsLength})`;
});

getMenuData(`${getDataAPI}filter.php?c=Seafood`).then((meals) => {
  const itemsLength = countMenuItems(meals);
  seaFood.innerText = `Sea Food (${itemsLength})`;
});

getMenuData(`${getDataAPI}filter.php?a=Canadian`).then((meals) => {
  const itemsLength = countMenuItems(meals);
  indianFood.innerText = `Candian Food (${itemsLength})`;
});

indianFood.addEventListener('click', () => {
  homeItems.style.display = 'none';
  seaItems.style.display = 'none';
  getMenuData(`${getDataAPI}filter.php?a=Canadian`).then((meals) => {
    displayMenuItems(meals, indianItmes);
  });
});

seaFood.addEventListener('click', () => {
  homeItems.style.display = 'none';
  indianItmes.style.display = 'none';
  getMenuData(`${getDataAPI}filter.php?c=Seafood`).then((meals) => {
    displayMenuItems(meals, seaItems);
  });
});