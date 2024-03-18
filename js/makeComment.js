import {getRandomInteger, createRandomIdFromRangeGenerator} from './util';
import {makeComment} from './makeDescription';

//рандомная подпись фотографий
const photoDescription = ['круто', 'класс', 'восхитительно', 'превосходно', 'шикарно', 'упомрачительно'];
const getRandomPhotoDescription = () => photoDescription[getRandomInteger(0, photoDescription.length - 1)];
const getCommentsList = () => Array.from({length: getRandomInteger(0, 30)}, makeComment);

const objectId = createRandomIdFromRangeGenerator(1, 25);
const urlId = createRandomIdFromRangeGenerator(1, 25);

//Функция по выбору рандомного идентификационного номера объекта и фотографии по url
const makeObject = () => ({
  id: objectId(),
  url: `photos/${urlId()}.jpg`,
  description: getRandomPhotoDescription(),
  likes: getRandomInteger(15, 200),
  comments: getCommentsList()
});

const createPhotosList = () => Array.from({length: 25}, makeObject);

export {createPhotosList};
