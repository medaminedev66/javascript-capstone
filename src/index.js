import './index.html';
import './style.css';
import { getMenuData, displayMenuItems } from './modules/getAPI.js';
import countMenuItems from './modules/counter.js';

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
  const mealsA = meals.meals;
  const itemsLength = countMenuItems(mealsA);
  allItems.innerText = `HOME (${itemsLength})`;
  main.addEventListener('click', () => {
    displayMenuItems(meals, homeList);
    homeItems.innerHTML = '';
    seaItems.innerHTML = '';
    indianItmes.innerHTML = '';
  });
  allItems.addEventListener('click', () => {
    displayMenuItems(meals, homeItems);
    homeList.innerHTML = '';
    seaItems.innerHTML = '';
    indianItmes.innerHTML = '';
  });
});

getMenuData(`${getDataAPI}search.php?f=s`).then((meals) => {
  const mealsA = meals.meals;
  const itemsLength = countMenuItems(mealsA);
  seaFood.innerText = `CONTINENTAL (${itemsLength})`;
  seaFood.addEventListener('click', () => {
    displayMenuItems(meals, seaItems);
    homeList.innerHTML = '';
    homeItems.innerHTML = '';
    indianItmes.innerHTML = '';
  });
});

getMenuData(`${getDataAPI}filter.php?a=Canadian`).then((meals) => {
  const mealsA = meals.meals;
  const itemsLength = countMenuItems(mealsA);
  indianFood.innerText = `CANADIAN FOOD (${itemsLength})`;
  indianFood.addEventListener('click', () => {
    displayMenuItems(meals, indianItmes);
    homeList.innerHTML = '';
    homeItems.innerHTML = '';
    seaItems.innerHTML = '';
  });
});
