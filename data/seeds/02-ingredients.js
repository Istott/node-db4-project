
exports.seed = function(knex) {
  return knex("ingredients").insert([
      {
          recipe_id: 1,
          ingredient_number: 1,
          ingredient_name: "Bread",
          instructions: "burn Bread to perfection",
      },
      { 
          recipe_id: 1, 
          ingredient_number: 2, 
          ingredient_name: "anti-butter cream",
          instructions: "massage anti-butter cream into burnt bread" 
      },
      {
          recipe_id: 2,
          ingredient_number: 3,
          ingredient_name: "water",
          instructions: "pour in glass, set in freezer for a significant amount of time, viola",
      },
      { 
          recipe_id: 3, 
          ingredient_number: 1, 
          ingredient_name: "Bread",
          instructions: "do nothing" 
      },
      {
          recipe_id: 4,
          ingredient_number: 4,
          ingredient_name: "rice",
          instructions: "take as much rice as you want to eat",
      },
      {
          recipe_id: 4,
          ingredient_number: 3,
          ingredient_name: "water",
          instructions:
              "add as much water as you deem fit, preferrably more water than rice",
      },
      {
          recipe_id: 4,
          ingredient_number: 2,
          ingredient_name: "anti-butter cream",
          instructions: "add only for poor man rice",
      },
      {
          recipe_id: 4,
          ingredient_number: 5,
          ingredient_name: "butter",
          instructions: "add only for rich man rice",
      },
      { 
          recipe_id: 5, 
          ingredient_number: 6, 
          ingredient_name: "milk",
          instructions: "pour into glass, let sit for 30 days on counter, enjoy" 
      },
      {
          recipe_id: 6,
          ingredient_number: 7,
          ingredient_name: "mixed bag of frozen veggies",
          instructions: "warm and devour your veggies you murderous plant eater!",
      },
  ]);
};
