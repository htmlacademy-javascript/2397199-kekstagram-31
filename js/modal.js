import { isEscKey } from './util.js';
import { fillModal, showComments, matchShownCommentsNumber } from './showModal.js';


const imageContainer = document.querySelector('.pictures');
const modalNode = document.querySelector('.big-picture');
const closeBtnNode = modalNode.querySelector('.big-picture__cancel');
const additionalСommentsBtn = modalNode.querySelector('.social__comments-loader');


//обработчик открывает модальное окно при клике на контейнер с картинками
const onimageContainerClick = (evt) => {
  const clickedPicture = evt.target.closest('.picture');

  fillModal(clickedPicture, modalNode, additionalСommentsBtn); //? заполнение модалки внутри обработчика норм?

  openModal();
};

imageContainer.addEventListener('click', onimageContainerClick);


//обработчик закрывает модальное окно при клике на крестик
const onCloseBtnNodeClick = () => {
  closeModal();
};

//обработчик закрывает модальное окно при нажатии на ESC
const onEscKeydown = (evt) => {
  if (isEscKey(evt)) {
    closeModal();
  }
};

//обработчик нажатия на кнопку показа больше комментариев
const onAdditionalСommentsBtnClick = function () {
  showComments();
  matchShownCommentsNumber(this);
};

//функция, открывающая модальное окно
const openModal = () => {
  modalNode.classList.remove('hidden');

  closeBtnNode.addEventListener('click', onCloseBtnNodeClick);
  document.addEventListener('keydown', onEscKeydown);

  document.body.classList.add('modal-open');

  additionalСommentsBtn.addEventListener('click', onAdditionalСommentsBtnClick);
};

//функция, закрывающая модальное окно
const closeModal = () => {
  modalNode.classList.add('hidden');

  closeBtnNode.removeEventListener('click', onCloseBtnNodeClick);
  document.removeEventListener('keydown', onEscKeydown);

  document.body.classList.remove('modal-open');

  additionalСommentsBtn.removeEventListener('click', onAdditionalСommentsBtnClick);
};
