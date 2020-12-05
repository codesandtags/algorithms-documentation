function solution(day, daysLater) {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  if (daysLater >= 0 && daysLater <= 500) {
    const dayNumber = daysOfWeek.indexOf(day);
    let finalDay = dayNumber + daysLater;

    if (finalDay > 6) {
      finalDay = finalDay % 7;
    }

    return daysOfWeek[finalDay];
  }

  return "Days letter not valid";
}

// console.log(solution('Wed', 2)); // Fri
// console.log(solution('Sat', 23)); // Mon
console.log(solution("Sat", 22)); // Sun
// console.log(solution('Sat', 21)); // Wed
// console.log(solution('Sat', 20)); // Wed
