var callbacks = [];

for (let i = 0; i < 10; i++) {
  callbacks.push(function () {
    console.log("Problem 1: ", i);
  });
}

callbacks[2]();

const inventory = [
  { type: "machine", value: 5000 },

  { type: "machine", value: 650 },

  { type: "duck", value: 10 },

  { type: "furniture", value: 1200 },

  { type: "machine", value: 77 },
];

let sum = 0;

// Solution 1:
countMachineValue = () => {
  inventory.forEach((data, index) => {
    if (data.type === "machine") sum += data.value;
  });

  console.log("Problem 2: ", sum);
};

countMachineValue();
