import {picturesArray} from './makeDescription.js';
const SHOW = 5;
//функция, создающая комментарий
const createComment = (src, name, message) => {
  const comment = document.createElement('li');
  comment.classList.add('social__comment');

  const commentPicters = document.createElement('img');
  commentPicters.src = src;
  commentPicters.alt = name;
  commentPicters.style.width = '35px';
  commentPicters.style.height = '35px';

  const commentMessage = document.createElement('p');
  commentMessage.textContent = message;

  comment.append(commentPicters, commentMessage);

  return comment;
};

//функция, показывающая 5 комментариев
const showComments = () => {
  const additionalСomments = document.querySelectorAll('.social__comment[hidden]');

  for (let i = 0; i < 5; i++) {
    if (additionalСomments[i]) {
      additionalСomments[i].hidden = false;
    }
  }
};

//функция, показывающая/скрывающая кнопку "показать ещё"
const commentsDisplayButton = (totalNum, ShownNum, btn) => {
  if (totalNum === ShownNum) {
    btn.setAttribute('hidden', true);
  } else {
    btn.removeAttribute('hidden', false);
  }
};

//функция, корректирующая число показываемых комментариев
const passTheNumberOfComments = (btnItSelf) => {
  const shownCommentsNumberNode = document.querySelector('.social__comment-shown-count');

  const totalCommentsArray = [...document.querySelectorAll('.social__comment')];
  const shownCommentsArray = totalCommentsArray.filter((comment) => !comment.hasAttribute('hidden'));

  shownCommentsNumberNode.textContent = shownCommentsArray.length;

  commentsDisplayButton(totalCommentsArray.length, shownCommentsArray.length, btnItSelf);
};

const reducedData = picturesArray.reduce((acc, val) => {
  acc.push([String(val.id), val]);
  return acc;
}, []);

const map = new Map(reducedData);

//функция, наполняющая модальное окно
const fillModal = (clickedPicture, modalNode, showMoreCommentsBtn) => {

  const { url, likes, comments, description } = map.get(clickedPicture.id);
  modalNode.querySelector('.big-picture__img img').src = url;
  modalNode.querySelector('.likes-count').textContent = likes;
  modalNode.querySelector('.social__comment-total-count').textContent = comments.length;
  modalNode.querySelector('.social__caption').textContent = description;

  const modalImageContainer = modalNode.querySelector('.social__comments');
  modalImageContainer.innerHTML = null;
  for(let i = 0; i < SHOW; i++) {
    const comment = comments[i];
    modalImageContainer.append(createComment(comment.avatar, comment.name, comment.message));
  }

  const commentsArray = modalNode.querySelectorAll('.social__comment');
  commentsArray.forEach((comment) => {
    if (comment) {
      comment.hidden = true;
    }
  });
  showComments(modalNode);
  passTheNumberOfComments(showMoreCommentsBtn);
};

export { fillModal, showComments, passTheNumberOfComments };
