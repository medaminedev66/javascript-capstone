import meal from '../img/meal.jpg';

const generateInfo = (element) => {
  const category = document.createElement('p');
  const textCategory = 'Chicken';
  category.innerText = `Category: ${textCategory}`;
  const area = document.createElement('p');
  const textArea = 'Japanaise';
  area.innerText = `Category: ${textArea}`;
  // const area = document.createElement('div');
  // const textArea = document.createElement('p');

  const idMeal = document.createElement('p');
  const textIdMeal = '5555';
  idMeal.innerText = `idMeal: ${textIdMeal}`;
  const children = [category, area, idMeal];
  children.forEach((child) => element.appendChild(child));
};

const generateComment = (element) => {
  const comment = document.createElement('div');
  const date = document.createElement('p');
  const name = document.createElement('p');
  const theComment = document.createElement('span');
  date.innerText = '2015/02/12';
  name.innerText = 'Rida';
  theComment.innerText = 'mmm delicious, good meal';
  const children = [date, name, theComment];
  children.forEach((child) => comment.appendChild(child));
  comment.className = 'comment';
  element.appendChild(comment);
};

const generatePopup = () => {
  const container = document.createElement('div');
  const closeBtn = document.createElement('i');
  const popImage = document.createElement('img');
  //Meal info
  const popTitle = document.createElement('h2');
  const popCharacteristic = document.createElement('div');
  generateInfo(popCharacteristic);
  //Comments
  const commentH3 = document.createElement('h3');
  const comments = document.createElement('div');
  generateComment(comments);
  generateComment(comments);
  generateComment(comments);
  //comment form
  const createCommentH3 = document.createElement('h3');
  const createComment = document.createElement('form');
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  const commentInput = document.createElement('input');
  commentInput.type = 'text';
  const submit = document.createElement('button');
  //appendChild
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
  children.forEach((child) => container.appendChild(child));
  document.body.appendChild(container);
  //add classes
  container.className = 'container';
  closeBtn.className = 'fas fa-times-circle';
  popImage.className = 'popImage';
  popTitle.className = 'popTitle';
  popCharacteristic.className = 'characteristic';
  //Content
  commentH3.innerText = 'Comments (3)';
  createCommentH3.innerText = 'Create a comment';
  popImage.src = meal;
  popTitle.innerText = 'Teriyaki Chicken Casserole';
};

// "comment": "This is nice!",
//         "creation_date": "2021-01-10",
//         "username": "John"
export { generatePopup };
