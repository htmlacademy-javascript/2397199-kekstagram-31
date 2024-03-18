import {picturesArray} from './makeDescription.js';

//шаблон миниатюры
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

//отображение миниатюр (сеткой)
const picturesListNode = document.querySelector('.pictures');

const picturesListFragment = document.createDocumentFragment();

//данные для заполнения миниатюры
picturesArray.forEach(
  ({ id, url, description, likes, comments }) => {
    const pictureNode = pictureTemplate.cloneNode(true);
    pictureNode.querySelector('.picture__img').src = url;
    pictureNode.querySelector('.picture__img').alt = description;
    pictureNode.querySelector('.picture__likes').textContent = likes;
    pictureNode.querySelector('.picture__comments').textContent = comments.length;

    pictureNode.setAttribute('id', id);

    picturesListFragment.append(pictureNode);
  }
);

picturesListNode.append(picturesListFragment);
