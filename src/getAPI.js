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

    const icon = document.createElement('i');
    icon.className = 'far fa-heart';
    icon.id = m.idMeal;
    para.appendChild(icon);
    li.appendChild(para);

    const btn = document.createElement('button');
    btn.innerText = 'Comment';
    btn.id = m.idMeal;

    li.appendChild(btn);
    document.getElementById('menuList').appendChild(li);
  });
};

export { getMenuData, displayMenuItems };
