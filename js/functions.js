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
