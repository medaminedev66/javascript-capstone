import { likeMeal, getLikes } from './likeItems.js';
import { generatePopup } from './modules/comments.js';

const involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const appId = 'SdPyDAmNNIPTUZaw27JK';

const getMenuData = async (url) => {
  const score = await fetch(url);
  return score.json();
};
const displayMenuItems = (meals, homeItems) => {
  const mealsArray = meals.meals;
  mealsArray.forEach((m) => {
    let isLiked = false;
    const li = document.createElement('li');
    li.className = 'menuItem';
    li.id = 'innerItem';
    const image = document.createElement('img');
    image.src = m.strMealThumb;
    li.appendChild(image);
    const para = document.createElement('p');
    para.innerText = m.strMeal;

    const aTag = document.createElement('a');
    aTag.className = 'test';
    aTag.id = m.idMeal;

    const icon = document.createElement('i');
    icon.className = 'far fa-heart';
    icon.id = m.idMeal;

    aTag.appendChild(icon);
    para.appendChild(aTag);
    li.appendChild(para);

    const spans = document.createElement('span');
    spans.className = 'likeSpan';
    spans.id = 'spanLike';
    li.appendChild(spans);
    const btn = document.createElement('button');
    btn.innerText = 'Comment';
    btn.id = m.idMeal;
    btn.addEventListener('click', () => {
      generatePopup(m);
    });
    li.appendChild(btn);
    homeItems.appendChild(li);
    if (isLiked === false) {
      aTag.classList.remove('likeIcon');
    } else {
      aTag.classList.add('likeIcon');
    }
    getLikes(involvementAPI, appId).then((data) => {
      let isFound = false;
      data.forEach((item) => {
        if (item.item_id === m.idMeal) {
          isFound = true;
          spans.innerText = item.likes;
        }
      });
      if (isFound === false) {
        spans.innerText = 0;
      }
    });
    aTag.addEventListener('click', () => {
      if (isLiked === false) {
        likeMeal(involvementAPI, appId, m.idMeal).then((result) => {
          if (result) {
            getLikes(involvementAPI, appId).then((data) => {
              data.forEach((item) => {
                if (item.item_id === m.idMeal) {
                  spans.innerText = item.likes;
                }
              });
            });
          }
        });
        isLiked = true;
        aTag.classList.add('likeIcon');
      } else {
        isLiked = false;
        aTag.classList.remove('likeIcon');
      }
    });
  });
};

export { getMenuData, displayMenuItems };
