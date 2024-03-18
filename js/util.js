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

const getRandomObject = (arr) => arr[getRandomInteger(0, arr.length - 1)];

//@ функция, создающая генераторы
const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId++;

    return lastGeneratedId;
  };
};

//@ функция-генератор идентификаторов
const generateId = createIdGenerator();

//@ функция, проверяющая, что нажатая клавиша - ESC
const isEscKey = (evt) => evt.key === 'Escape';

export {getRandomInteger, createRandomIdFromRangeGenerator, getRandomObject, generateId, isEscKey};
