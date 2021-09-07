const getMenuData = async (url) => {
  const score = await fetch(url);
  return score.json();
};

const displayMenuItems = ((meals) => {
  console.log(meals.meals);
});

export { getMenuData, displayMenuItems };