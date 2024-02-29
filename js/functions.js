// функция для проверки длины строки
const checkСharacterCount = (string, maxLength) => string.length >= maxLength;
checkСharacterCount('Изучаю JS', 9);

// функция для проверк палиндрома
const checkPalindrom = (string) => {
  const reverseString = string.split('').reverse().join('');
  return string === reverseString;
};
checkPalindrom('топот');

//функция по извлечению числа из строки (0-9)
const extractNumber = (str) => {
  const digit = str.match(/\d/g);
  if (digit) {
    const number = parseInt(digit.join(''), 10);
    if (!isNaN(number)) {
      return number;
    }
  }
  return NaN;
};
extractNumber('abc123def');

