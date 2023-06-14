// Problem 1:
var callbacks = [];

for (let i = 0; i < 10; i++) {
  callbacks.push(function () {
    console.log("Problem 1: ", i);
  });
}

callbacks[2]();

// Problem 2:
const inventory = [
  { type: "machine", value: 5000 },

  { type: "machine", value: 650 },

  { type: "duck", value: 10 },

  { type: "furniture", value: 1200 },

  { type: "machine", value: 77 },
];

// Solution 1:
countMachineValue_1 = () => {
  let sum = 0;
  inventory.forEach((data) =>
    data.type === "machine" ? (sum += data.value) : sum
  );

  console.log("Problem 2 (foreach): ", sum);
};

const t1 = performance.now();
countMachineValue_1();
const t2 = performance.now();
console.log(
  "Time taken by Solution 1 for Problem 2: ",
  t2 - t1,
  "milliseconds"
);

// Solution 2:
countMachineValue_2 = () =>
  inventory.reduce(
    (sum, current) =>
      current.type === "machine" ? (sum += current.value) : sum,
    0
  );
const t3 = performance.now();
console.log("Problem 2 (reduce): ", countMachineValue_2());
const t4 = performance.now();
console.log(
  "Time taken by Solution 2 for Problem 2: ",
  t4 - t3,
  "milliseconds"
);

// Problem 3:
const sortInventory_ASC = () => inventory.sort((a, b) => a.value - b.value);
console.log("Problem 3: ", sortInventory_ASC());

const sortInventory_DESC = () =>
  [...inventory].sort((a, b) => b.value - a.value);
console.log("Problem 4: ", sortInventory_DESC());

// Problem 4:
function go(options) {
  let {
    speed = 4,
    enable: { hyperdrive = false, frobnifier = true },
  } = options;
  console.log(
    "Problem 4: ",
    "speed=",
    speed,
    "hyperdrive:",
    hyperdrive,
    "frobnifier:",
    frobnifier
  );
}
const optionsParam = {
  speed: 2,
  enable: { hyperdrive: true, frobnifier: false },
};
go(optionsParam);

// Problem 5:
const users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true },
];

// Solution 1:
const displayAdmin_1 = (users) => {
  const admin = users.filter((user) => user.admin === true);
  admin.forEach((admin) => console.log("filter + forEach: ", admin.id));
};
const t5 = performance.now();
displayAdmin_1(users);
const t6 = performance.now();
console.log(
  "Time taken by Solution 1 for Problem 6: ",
  t6 - t5,
  "milliseconds"
);

// Solution 2:
const displayAdmin_2 = (users) => {
  users.forEach((user) =>
    user.admin === true ? console.log("only forEach: ", user.id) : ""
  );
};
const t7 = performance.now();
displayAdmin_2(users);
const t8 = performance.now();
console.log(
  "Time taken by Solution 2 for Problem 5: ",
  t8 - t7,
  "milliseconds"
);

// Problem 6:
const time = document.createElement("p");
document.body.append(time);

const date = new Date();
time.innerText = date.toLocaleTimeString();

setInterval(() => {
  const date = new Date();
  time.innerText = date.toLocaleTimeString();
}, 1000);

document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";

time.style.border = "1px solid black";
time.style.fontSize = "8rem";
time.style.padding = "1rem";
