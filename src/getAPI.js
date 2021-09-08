import { likeMeal, getLikes, displayLikes } from './likeItems.js';
import generatePopup from './modules/comments.js';

const involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const appId = 'ypKdwEQDhYrEtcqK0Wxp';

const getMenuData = async (url) => {
  const score = await fetch(url);
  return score.json();
};

const setItem = (id, isLiked) => {
  if (localStorage.getItem('Liked') == null) {
    localStorage.setItem('Liked', JSON.stringify([]));
  }
  const likedItems = JSON.parse(localStorage.getItem('Liked'));
  likedItems.push({
    liked: isLiked,
    mealId: id,
  });
  localStorage.setItem('Liked', JSON.stringify(likedItems));
};

const updateItem = (id, isLiked) => {
  const likedItems = JSON.parse(localStorage.getItem('Liked'));
  likedItems.forEach((item) => {
    if (item.mealId === id) {
      item.liked = isLiked;
    }
  });
  localStorage.setItem('Liked', JSON.stringify(likedItems));
};

const displayMenuItems = (meals) => {
  const mealsArray = meals.meals;
  mealsArray.forEach((m) => {
    let isLiked = false;
    setItem(m.idMeal, isLiked);
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

    likeMeal(involvementAPI, appId, m.idMeal);
    getLikes(involvementAPI, appId).then((data) => {
      spans.innerText = displayLikes(m.idMeal, data);
    });

    const btn = document.createElement('button');
    btn.innerText = 'Comment';
    btn.id = m.idMeal;
    btn.addEventListener('click', () => {
      generatePopup(m);
    });
    li.appendChild(btn);
    document.getElementById('menuList').appendChild(li);
    likeMeal(involvementAPI, appId, m.idMeal);

    if (isLiked === false) {
      aTag.classList.remove('likeIcon');
    } else {
      aTag.classList.add('likeIcon');
    }

    aTag.addEventListener('click', () => {
      if (isLiked === false) {
        isLiked = true;
        aTag.classList.add('likeIcon');
        updateItem(m.idMeal, isLiked);
      } else {
        isLiked = false;
        aTag.classList.remove('likeIcon');
        updateItem(m.idMeal, isLiked);
      }

      likeMeal(involvementAPI, appId, m.idMeal);
      getLikes(involvementAPI, appId).then((data) => {
        spans.innerText = displayLikes(m.idMeal, data);
      });
    });

    getLikes(involvementAPI, appId).then((data) => {
      const numlikes = displayLikes(m.idMeal, data);
      if (numlikes) {
        spans.innerText = numlikes;
      }
    });
  });
};

export { getMenuData, displayMenuItems };
