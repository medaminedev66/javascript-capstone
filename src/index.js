import './index.html';
import './style.css';
import { getMenuData, displayMenuItems } from './getAPI.js';
import countMenuItems from './counter.js';

const getDataAPI = 'https://www.themealdb.com/api/json/v1/1/';
const main = document.querySelector('.homeCounter');
const homeList = document.querySelector('.homeList');
const allItems = document.querySelector('.menuCounter');
const indianFood = document.querySelector('.indianFood');
const seaFood = document.querySelector('.seaFood');
const homeItems = document.querySelector('.menuList');
const indianItmes = document.querySelector('.indianList');
const seaItems = document.querySelector('.seaList');

getMenuData(`${getDataAPI}search.php?f=b`).then((meals) => {
  displayMenuItems(meals, homeList);
});

getMenuData(`${getDataAPI}search.php?f=b`).then((meals) => {
  const mealsA = meals.meals;
  const itemsLength = countMenuItems(mealsA);
  allItems.innerText = `Home (${itemsLength})`;
});

getMenuData(`${getDataAPI}filter.php?c=Seafood`).then((meals) => {
  const mealsA = meals.meals;
  const itemsLength = countMenuItems(mealsA);
  seaFood.innerText = `Sea Food (${itemsLength})`;
});

getMenuData(`${getDataAPI}filter.php?a=Canadian`).then((meals) => {
  const mealsA = meals.meals;
  const itemsLength = countMenuItems(mealsA);
  indianFood.innerText = `Candian Food (${itemsLength})`;
});

main.addEventListener('click', () => {
  getMenuData(`${getDataAPI}search.php?f=b`).then((meals) => {
    displayMenuItems(meals, homeList);
  });
  homeItems.innerHTML = '';
  seaItems.innerHTML = '';
  indianItmes.innerHTML = '';
});

allItems.addEventListener('click', () => {
  getMenuData(`${getDataAPI}search.php?f=b`).then((meals) => {
    displayMenuItems(meals, homeItems);
  });
  homeList.innerHTML = '';
  seaItems.innerHTML = '';
  indianItmes.innerHTML = '';
});

indianFood.addEventListener('click', () => {
  getMenuData(`${getDataAPI}filter.php?a=Canadian`).then((meals) => {
    displayMenuItems(meals, indianItmes);
  });
  homeList.innerHTML = '';
  homeItems.innerHTML = '';
  seaItems.innerHTML = '';
});

seaFood.addEventListener('click', () => {
  getMenuData(`${getDataAPI}filter.php?c=Seafood`).then((meals) => {
    displayMenuItems(meals, seaItems);
  });
  homeList.innerHTML = '';
  homeItems.innerHTML = '';
  indianItmes.innerHTML = '';
});