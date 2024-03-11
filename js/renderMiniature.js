// Задача по отобржению фотографий (код по демонстрационному варианту из задания 7.14)
import {makeObject} from './makeComment.js';

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const picturesListElement = document.querySelector('.pictures');

const pictures = makeObject();

const picturesListFragment = document.createDocumentFragment();

pictures.forEach(({ url, description, likes, comments }) => {
  const pictureElement = templatePicture.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;

  picturesListFragment.append(pictureElement);
});

picturesListElement.append(picturesListFragment);
