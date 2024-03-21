import { isEscKey } from './util.js';
import { fillModal, showComments, passTheNumberOfComments} from './showModal.js';

const imageContainer = document.querySelector('.pictures');
const modalNode = document.querySelector('.big-picture');
const closeButtonNode = modalNode.querySelector('.big-picture__cancel');
const additionalСommentsButton = modalNode.querySelector('.social__comments-loader');


//обработчик открывает модальное окно при клике на контейнер с картинками
const onImageContainerClick = (evt) => {
  const clickedPicture = evt.target.closest('.picture');

  fillModal(clickedPicture, modalNode, additionalСommentsButton);

  openModal();
};

imageContainer.addEventListener('click', onImageContainerClick);


//обработчик закрывает модальное окно при клике на крестик
const onCloseButtonNodeClick = () => {
  closeModal();
};

//обработчик закрывает модальное окно при нажатии на ESC
const onEscKeydown = (evt) => {
  if (isEscKey(evt)) {
    closeModal();
  }
};

//обработчик нажатия на кнопку показа больше комментариев
const onAdditionalСommentsButtonClick = function () {
  showComments();
  passTheNumberOfComments(this);
};
onAdditionalСommentsButtonClick();

//функция, открывающая модальное окно
function openModal() {
  modalNode.classList.remove('hidden');

  closeButtonNode.addEventListener('click', onCloseButtonNodeClick);
  document.addEventListener('keydown', onEscKeydown);

  document.body.classList.add('modal-open');

  additionalСommentsButton.addEventListener('click', onAdditionalСommentsButtonClick);
}

//функция, закрывающая модальное окно
function closeModal() {
  modalNode.classList.add('hidden');

  closeButtonNode.removeEventListener('click', onCloseButtonNodeClick);
  document.removeEventListener('keydown', onEscKeydown);

  document.body.classList.remove('modal-open');

  additionalСommentsButton.removeEventListener('click', onAdditionalСommentsButtonClick);
}
