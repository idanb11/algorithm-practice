/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
function angleClock(hour, minutes) {
  const angleHour = hour === 12 ? 0 : (hour / 12) * 360;
  const angleHourAddition = ((360 / 12) * minutes) / 60;
  const angleMinute = (minutes / 60) * 360;

  const totalHourAngle = angleHour + angleHourAddition;
  const result = Math.abs(totalHourAngle - angleMinute);

  return result > 180 ? Math.abs(360 - result) : Math.abs(result);
}

console.log(angleClock(3, 30));
console.log(angleClock(3, 15));

console.log(angleClock(12, 30));
console.log(angleClock(6, 5));

