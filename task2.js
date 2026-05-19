let age;

do {
  age = parseInt(prompt("Set age between 18 - 22: "), 10);
  if (age < 18 || age > 22) {
    console.log("Set age between 18 - 22 : " + age);
  }
} while (age < 18 || age > 22);

switch (age) {
  case 18:
    console.log(age + ": Young");
    break;
  case 19:
    console.log(age + ": Almost young");
    break;
  case 20:
    console.log(age + ": Middle");
    break;
  case 21:
    console.log(age + ": Almost old");
    break;
  case 22:
    console.log(age + ": Old 😊");
    break;
}
