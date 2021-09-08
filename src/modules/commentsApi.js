const commentMeal = async (involvmentAPI, appId, mealId) => {
  const comments = await fetch(`${involvmentAPI}/${appId}/comments`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: mealId,
      username: 'Jane',
      comment: 'Hello',
    }),
  });
  return comments.status === 201;
};
const getComments = async (involvmentAPI, appId, mealId) => {
  const comment = await fetch(
    `${involvmentAPI}/${appId}/comments/?item_id=${mealId}`,
  );
  console.log(comment.json());
};

export { commentMeal, getComments };
