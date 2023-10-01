import foodData from "./foodData.json" assert { type: "json" }; //import json file

// arrow functions

// prob 1-7
const listFood = (category = "") => {
  if (category.length > 0) {
    return foodData.filter((foodItem) => foodItem.category == category);
  } else {
    return foodData;
  }
};

// prob 8-9
const sortCalorie = (condition) => {
  if (condition == "<100") {
    return foodData.filter((food) => food.calorie < 100);
  } else if (condition == ">100") {
    return foodData.filter((food) => food.calorie > 100);
  }
};

// prob 10-11
const sortContent = (type) => {
  if (type === "protein") {
    return foodData.sort((a, b) => b.protiens - a.protiens);
  } else if (type === "cab") {
    return foodData.sort((a, b) => a.cab - b.cab);
  }
};

// Problem & Solutions

// Problem 1: list all the food items
console.log(listFood(""));

// Problem 2: list all the food items with category Vegetable
console.log(listFood("Vegetable"));

// Problem 3: list all the food items with category Fruit
console.log(listFood("Fruit"));

// Problem 4: list all the food items with category Protein
console.log(listFood("Protein"));

// Problem 5: list all the food items with category Nuts
console.log(listFood("Nuts"));

// Problem 6: list all the food items with category Grain
console.log(listFood("Grain"));

// Problem 7: list all the food items with category Dairy
console.log(listFood("Dairy"));

// Problem 8: list all the food items with calorie above 100
console.log(sortCalorie(">100"));

// Problem 9: list all the food items with calorie below 100
console.log(sortCalorie("<100"));

// Problem 10: list all the food items with highest protein content to lowest
console.log(sortContent("protein"));

// Problem 11: list all the food items with lowest cab content to highest
console.log(sortContent("cab"));



// Done by Zaman
