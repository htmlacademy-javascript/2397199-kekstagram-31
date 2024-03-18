import {getRandomInteger, getRandomObject, generateId} from './util.js';

//# список комментариев
const COMMENTS_EXAMPLES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент?!',
];


//# список имён
const NAMES = [
  'Дарья',
  'Александр',
  'Дмитрий',
  'Виктория',
  'Максим',
  'Тимофей',
  'Кирилл',
  'Варвара',
  'Мария',
  'Алина',
];

//# небоходимое количество объектов
const PICTURES_NUMBER = 25;

function createCommment() {
  return {
    id: getRandomInteger(1, 1000),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomObject(COMMENTS_EXAMPLES),
    name: getRandomObject(NAMES)
  };
}

//@ функция, создающая объект
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

//# создание результирующего массива
const picturesArray = Array.from({ length: PICTURES_NUMBER }, createPicture);

export {picturesArray};
