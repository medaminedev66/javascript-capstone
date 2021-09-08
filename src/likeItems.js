const likeMeal = async (involvmentAPI, appId, mealId) => {
  const likes = await fetch(`${involvmentAPI}/${appId}/likes`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: mealId,
    }),
  });
  return likes.status === 201;
};

const getLikes = async (involvmentAPI, appId) => {
  const like = await fetch(`${involvmentAPI}/${appId}/likes`);
  return like.json();
};

const displayLikes = (id, data) => {
  let numLike;
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].item_id === id) {
      numLike = (data[i].likes);
    }
  }
  return numLike;
};

export { likeMeal, getLikes, displayLikes };