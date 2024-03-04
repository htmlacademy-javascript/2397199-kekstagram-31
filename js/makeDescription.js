import {getRandomInteger} from './util';

//Функция получения уникального комментария
function getUniqueCommentId() {
  let commentId = 0;

  return function() {
    return commentId++;
  };
}

//Функция создания комментария
const makeComment = () => {
  const comments = [];
  const commentIdentifier = getUniqueCommentId();
  const messages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  const names = [
    'Андрей',
    'Василий',
    'Семён',
    'Екатерина',
    'Валерия',
    'Вероника',
    'Ольга',
    'Тимофей',
    'Сергей',
    'Анна',
    'Анастасия',
    'Алексей',
    'Мария',
  ];

  //Цикл создания уникального наполнения комментария
  for (let i = 0; i <= getRandomInteger(0, 30); i++) {
    comments.push({ id: commentIdentifier(),
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: messages[getRandomInteger(1, messages.length - 1)],
      name: names[getRandomInteger(1, names.length - 1)]
    });
  }
  return comments;
};

export {makeComment};