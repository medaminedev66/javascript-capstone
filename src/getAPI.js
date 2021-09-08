import { likeMeal, getLikes, displayLikes } from './likeItems.js';

const involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const appId = 'oj8lCVSvVKOoKDOy43br';

const getMenuData = async (url) => {
  const score = await fetch(url);
  return score.json();
};

const displayMenuItems = (meals) => {
  const mealsArray = meals.meals;
  mealsArray.forEach((m) => {
    const li = document.createElement('li');
    li.className = 'menuItem';
    const image = document.createElement('img');
    image.src = m.strMealThumb;
    li.appendChild(image);
    const para = document.createElement('p');
    para.innerText = m.strMeal;

    const aTag = document.createElement('a');

    const icon = document.createElement('i');
    icon.className = 'far fa-heart';
    icon.id = m.idMeal;
    aTag.appendChild(icon);
    para.appendChild(aTag);
    li.appendChild(para);

    const spans = document.createElement('span');
    spans.className = 'likeSpan';
    li.appendChild(spans);

    const btn = document.createElement('button');
    btn.innerText = 'Comment';
    btn.id = m.idMeal;

    li.appendChild(btn);
    document.getElementById('menuList').appendChild(li);

    // likeMeal(involvementAPI, appId, m.idMeal);
    getLikes(involvementAPI, appId).then((data) => {
      const numlikes = displayLikes(m.idMeal, data);
      if (numlikes) {
        spans.innerText = numlikes;
        aTag.classList = 'likeIcon';
      }
    });
    aTag.addEventListener('click', () => {
      likeMeal(involvementAPI, appId, m.idMeal);
      getLikes(involvementAPI, appId).then((data) => {
        spans.innerText = displayLikes(m.idMeal, data);
      });
    });
  });
};

export { getMenuData, displayMenuItems };
