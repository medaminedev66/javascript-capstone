const commentMeal = async (
  involvmentAPI,
  appId,
  mealId,
  nameUser,
  commentUser,
) => {
  const comments = await fetch(`${involvmentAPI}/${appId}/comments`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: mealId,
      username: nameUser,
      comment: commentUser,
    }),
  });
  return comments.status === 201;
};
const getComments = async (involvmentAPI, appId, mealId) => {
  const comment = await fetch(
    `${involvmentAPI}/${appId}/comments/?item_id=${mealId}`,
  );
  const data = await comment.json();
  return data;
};

export { commentMeal, getComments };
