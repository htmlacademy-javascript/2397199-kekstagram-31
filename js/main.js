//Функция для определения максимального и минимального значения из диапазона
function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

//Функция для выбора рандомного числа
function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      // eslint-disable-next-line no-console, prefer-template
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

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

//Функция по выбору рандомного идентификационного номера объекта и фотографии по url
function makeObject() {
  const objectIdentifier = createRandomIdFromRangeGenerator(1, 25);
  const urlIdentifier = createRandomIdFromRangeGenerator(1, 25);

  //Возвращение, как итог технического задания
  return {
    id: objectIdentifier(),
    url: `photos/${urlIdentifier()}.jpg`,
    description: 'Восхитетельный вид на море во время желанного отпуска',
    likes: getRandomInteger(15, 200),
    comments: makeComment()
  };
}

// eslint-disable-next-line
console.log(makeObject());
