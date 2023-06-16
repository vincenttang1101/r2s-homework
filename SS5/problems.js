// Problem 1 (Object):
const person = {
  name: "Quang",
  age: 22,
  occupation: "IT",
};

const displayInforamtion = (person) => {
  console.log(Object.keys(person));
};

displayInforamtion(person);

const calculator = {
  value: 0,
};

const display = (calculator) => {
  console.log(calculator.value);
};

display(calculator);

const add = (calculator) => {
  console.log(calculator.value + 1);
  calculator.value += 1;
};
add(calculator);

const subtract = (calculator) => {
  console.log(calculator.value - 1);
  calculator.value -= 1;
};
subtract(calculator);

const divide = (calculator) => {
  console.log(calculator.value / 2);
  calculator.value /= 2;
};
divide(calculator);

const multiply = (calculator) => {
  console.log(calculator.value * 2);
  calculator.value *= 2;
};
multiply(calculator);

// Problem 2 (Boolean):
const kiemTraSo = (number) =>
  number % 2 == 0 ? console.log(true) : console.log(false);

kiemTraSo(5);

const isLeapYear = (year) =>
  year % 4 == 0 && year % 100 != 0 && year % 400 != 0
    ? console.log(true)
    : console.log(false);

isLeapYear(2006);

// Problem 3 (Date):
const calculateAge = (birthday) => {
  const toDay = dayjs();
  const age = dayjs(toDay).diff(birthday, "year");
  console.log(age);
};

const date = dayjs("2001-01-11");
const birthday = date.format("DD/MM/YYYY");
calculateAge(birthday);

const daysUntilEndOfYear = () => {
  const today = dayjs();
  const endOfYear = today.endOf("year");
  const days = endOfYear.diff(today, "day");
  console.log(days);
};

daysUntilEndOfYear();
