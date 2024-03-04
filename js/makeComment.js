import {getRandomInteger, createRandomIdFromRangeGenerator} from './util';
import {makeComment} from './makeDescription';
export {makeObject};

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
