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
const generatePopup = () => {
  const container = document.createElement('div');
  const closeBtn = document.createElement('i');
  const popImage = document.createElement('img');
  //Meal info
  const popTitle = document.createElement('h2');
  const popCharacteristic = document.createElement('div');
  generateInfo(popCharacteristic);
  //Comments
  const comments = document.createElement('div');
  const comment = document.createElement('div');
  const date = document.createElement('p');
  const name = document.createElement('p');
  const theComment = document.createElement('span');
  //comment form
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
    comments,
    createComment,
  ];
  const commentsChildren = [comment, date, name, theComment];
  const formChildren = [nameInput, commentInput, submit];
  commentsChildren.forEach((child) => comments.appendChild(child));
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
  popImage.src = meal;
  popTitle.innerText = 'Teriyaki Chicken Casserole';
};

// "comment": "This is nice!",
//         "creation_date": "2021-01-10",
//         "username": "John"
export { generatePopup };
