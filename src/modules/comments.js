import { commentMeal, getComments } from './commentsApi.js';

const involvementAPI =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const appId = 'oj8lCVSvVKOoKDOy43br';

const generateInfo = (element, meal) => {
  const category = document.createElement('p');
  const textCategory = meal.strCategory;
  category.innerText = `Category: ${textCategory}`;
  const area = document.createElement('p');
  const textArea = meal.strArea;
  area.innerText = `Area: ${textArea}`;
  const instructions = document.createElement('p');
  const textInstructions = meal.strInstructions;
  instructions.innerText = `Instructions: ${textInstructions}`;
  const children = [category, area, instructions];
  children.forEach((child) => element.appendChild(child));
};

const generateComment = (element, user) => {
  const comment = document.createElement('div');
  const date = document.createElement('p');
  const name = document.createElement('p');
  const theComment = document.createElement('span');
  date.innerText = user.creation_date;
  name.innerText = user.username;
  theComment.innerText = user.comment;
  const children = [date, name, theComment];
  children.forEach((child) => comment.appendChild(child));
  comment.className = 'comment';
  element.appendChild(comment);
};

const generatePopup = (meal) => {
  // commentMeal(involvementAPI, appId, meal.idMeal);

  const container = document.createElement('div');
  const popup = document.createElement('div');
  const closeBtn = document.createElement('i');
  const popImage = document.createElement('img');

  const popTitle = document.createElement('h2');
  const popCharacteristic = document.createElement('div');
  generateInfo(popCharacteristic, meal);

  const commentH3 = document.createElement('h3');
  const comments = document.createElement('div');
  getComments(involvementAPI, appId, meal.idMeal).then((data) => {
    data.forEach((user) => {
      generateComment(comments, user);
    });
  });

  const createCommentH3 = document.createElement('h3');
  const createComment = document.createElement('form');
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Name...';
  const commentInput = document.createElement('textarea');
  commentInput.placeholder = 'Comment...';
  const submit = document.createElement('button');
  submit.type = 'button';

  const children = [
    closeBtn,
    popImage,
    popTitle,
    popCharacteristic,
    commentH3,
    comments,
    createCommentH3,
    createComment,
  ];
  const formChildren = [nameInput, commentInput, submit];
  formChildren.forEach((child) => createComment.appendChild(child));
  children.forEach((child) => popup.appendChild(child));
  container.appendChild(popup);
  document.body.appendChild(container);

  container.className = 'container';
  popup.className = 'popup';
  closeBtn.className = 'fas fa-times-circle';
  popImage.className = 'popImage';
  popTitle.className = 'popTitle';
  popCharacteristic.className = 'characteristic';
  createComment.className = 'createComment';
  submit.className = 'submit';
  nameInput.className = 'nameInput';
  commentInput.className = 'commentInput';
  container.classList.add('active');

  commentH3.innerText = 'Comments (3)';
  createCommentH3.innerText = 'Create a comment';
  popImage.src = meal.strMealThumb;
  popTitle.innerText = meal.strMeal;
  submit.innerText = 'Submit';

  closeBtn.addEventListener('click', () => {
    document.body.removeChild(container);
  });

  submit.addEventListener('click', () => {
    const d = new Date();
    const user = {
      creation_date: d.toISOString().slice(0, 10),
      username: nameInput.value,
      comment: commentInput.value,
    };
    commentMeal(
      involvementAPI,
      appId,
      meal.idMeal,
      user.username,
      user.comment,
    );
    generateComment(comments, user);
    nameInput.value = '';
    commentInput.value = '';
  });
};
export default generatePopup;
