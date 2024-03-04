
/* eslint-disable no-console */
function isMeetingWithinWorkday(startWorkday, endWorkday, startMeeting, duration) {
  const [startHour, startMinute] = startWorkday.split(':').map(Number);
  const [endHour, endMinute] = endWorkday.split(':').map(Number);
  const [meetingHour, meetingMinute] = startMeeting.split(':').map(Number);

  const workdayStart = startHour * 60 + startMinute;
  const workdayEnd = endHour * 60 + endMinute;
  const meetingStart = meetingHour * 60 + meetingMinute;
  const meetingEnd = meetingStart + duration;

  return meetingStart >= workdayStart && meetingEnd <= workdayEnd;
}


console.log(isMeetingWithinWorkday('08:00', '17:30', '14:00', 90));
console.log(isMeetingWithinWorkday('8:0', '10:0', '8:0', 120));
console.log(isMeetingWithinWorkday('08:00', '14:30', '14:00', 90));
console.log(isMeetingWithinWorkday('14:00', '17:30', '08:0', 90));
console.log(isMeetingWithinWorkday('8:00', '17:30', '08:00', 900));

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