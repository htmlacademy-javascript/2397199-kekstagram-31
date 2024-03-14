import {container, photos} from './renderMiniature';

//Недочеты к встерече: не отображаются комментарии на фотографиях
//(странно еще то, что лишь на паре фотографиий не доходит до 5 ком.)


const photoBox = document.querySelector('.big-picture');
const closeBtn = document.querySelector('.big-picture__cancel');
const fullPhoto = document.querySelector('.big-picture__img').querySelector('img');
const likesCounter = document.querySelector('.likes-count');
const commentsCounter = document.querySelector('.social__comment-total-count');
const shownCommentsCounter = document.querySelector('.social__comment-shown-count');
const photoCaption = document.querySelector('.social__caption');
const commentsList = document.querySelector('.social__comments');
const commentItem = document.querySelector('.social__comment');

const showPhoto = () => {
  document.body.classList.add('modal-open');
  photoBox.classList.remove('hidden');
};

const getPhotoById = (image) => {
  for (const photo of photos) {
    if (photo.id === Number(image.id)) {
      return photo;
    }
  }
};

//Формирование списка комментариев
const makeCommentsList = (list) => {
  for (let i = 0; i < 5; i++) {
    const comment = commentItem.cloneNode(true);
    comment.querySelector('img').src = list[i].avatar;
    comment.querySelector('img').alt = list[i].name;
    comment.querySelector('p').textContent = list[i].message;
    commentsList.append(comment);
  }
};

//Открытие модального окна и показ всего содержимого
const onPhotoClick = (evt) => {
  const currentPhoto = evt.target;
  const currentPhotoData = getPhotoById(currentPhoto);

  if (evt.target.matches('img')) {
    evt.preventDefault();
    showPhoto();
  }

  fullPhoto.src = currentPhoto.src;
  likesCounter.textContent = currentPhotoData.likes;
  const totalComments = currentPhotoData.comments.length;
  commentsCounter.textContent = totalComments;
  shownCommentsCounter.textContent = Math.min(totalComments, 2);
  photoCaption.textContent = currentPhotoData.description;
  commentsList.innerHTML = '';
  makeCommentsList (currentPhotoData.comments);
};

container.addEventListener('click', onPhotoClick);

//Скрытие модального окна
const closeFullPhoto = () => {
  document.body.classList.remove('modal-open');
  photoBox.classList.add('hidden');
};

closeBtn.addEventListener('click', closeFullPhoto);

//закрытие модального окна по Esc
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeFullPhoto();
  }
});
