const now = new Date();
const daysOfWeek = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"
];

const dayName = daysOfWeek[now.getDay()];
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const date = String(now.getDate()).padStart(2, '0');

const formattedDate = `${dayName} ${year}-${month}-${date}`;
console.log("Date: " + formattedDate);
