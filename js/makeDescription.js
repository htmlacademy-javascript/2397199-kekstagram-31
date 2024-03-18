import {getRandomInteger, getRandomObject, generateId} from './util.js';

//комментарии
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент?!',
];


//никнеймы комментаторов
const NAMES = [
  'Сюзанна',
  'Герхард',
  'Омар',
  'Анна',
  'Владимир',
  'Сёмен',
  'Василий',
  'Андрей',
  'Матвей',
  'Анастастия',
  'Зоя',
  'Клавдия',
  'Нина',
  'Зинаида',
];

//Число картинок
const NUMBER_PICTURES = 25;

const createCommment = () => ({
  id: getRandomInteger(1, 1000),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomObject(COMMENTS),
  name: getRandomObject(NAMES)
});

//функция по созданию отдельного объекта с его содержимым
const createPicture = () => {
  const generatedId = generateId();
  return {
    id: generatedId,
    url: `photos/${generatedId}.jpg`,
    description: `описание фотографии № ${generatedId}`,
    likes: getRandomInteger(15, 200),
    comments: Array.from({ length: getRandomInteger(0, 30) }, createCommment)
  };
};

const picturesArray = Array.from({ length: NUMBER_PICTURES}, createPicture);
export {picturesArray};
