// Задача по отобржению фотографий (код по демонстрационному варианту из задания 7.14)
import {createPhotosList} from './makeComment.js';

const container = document.querySelector('.pictures');
const template = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();
const photos = createPhotosList();

const createMinis = () => {
  for (let i = 0; i < photos.length; i++) {
    const photoObject = template.cloneNode(true);
    const picture = photoObject.querySelector('.picture__img');
    const likes = photoObject.querySelector('.picture__likes');
    const comments = photoObject.querySelector('.picture__comments');

    picture.src = photos[i].url;
    picture.alt = photos[i].description;
    likes.textContent = photos[i].likes;
    comments.textContent = photos[i].comments.length;
    picture.id = photos[i].id;

    fragment.append(photoObject);
  }

  container.append(fragment);
};

export {createMinis, container, photos};

//скрытие комментария
document.querySelector('.comments-loader').classList.add('hidden');
document.querySelector('.social__comment-count').classList.add('hidden');
