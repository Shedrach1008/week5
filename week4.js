// 1. Variables (string, number, boolean)
let farmName = "Green Pastures Farm";
let totalAnimals = 5;
let isFeedingTime = true;

// 2. Array (list of animal objects)
let animals = [
  { name: "Bessie", type: "cow", age: 4, needsFood: true },
  { name: "Clucky", type: "chicken", age: 2, needsFood: false },
  { name: "Woolly", type: "sheep", age: 3, needsFood: true },
  { name: "Rascal", type: "goat", age: 5, needsFood: true },
  { name: "Snowball", type: "rabbit", age: 1, needsFood: false }
];

// 3. Function to feed animals
function feedAnimals(animalList) {
  for (let i = 0; i < animalList.length; i++) {
    if (animalList[i].needsFood) {
      console.log(animalList[i].name + " the " + animalList[i].type + " has been fed.");
      animalList[i].needsFood = false; // Update status after feeding
    } else {
      console.log(animalList[i].name + " the " + animalList[i].type + " does not need food.");
    }
  }
}

// 4. Function to check if animals are young or old (comparison)
function checkAnimalAge(animal) {
  if (animal.age < 3) {
    return animal.name + " the " + animal.type + " is young.";
  } else {
    return animal.name + " the " + animal.type + " is old.";
  }
}

// 5. Loop through the array to check each animal's age and feed them if necessary
for (let i = 0; i < animals.length; i++) {
  console.log(checkAnimalAge(animals[i]));
  if (isFeedingTime) {
    feedAnimals(animals);
  }
}

// 6. Boolean update based on feeding time
if (!isFeedingTime) {
  console.log("It is not time to feed the animals.");
} else {
  console.log("Feeding completed for all animals.");
}

// 7. Output the farm information
console.log("Welcome to " + farmName + "!");
console.log("Total animals on the farm: " + totalAnimals);
