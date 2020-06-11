
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
          recipe_id: 3,
          ingredient_number: 4,
          ingredient_name: "Bread",
          instructions: "smash it with a hammer (evil laugh)",
      },
      {
          recipe_id: 3,
          ingredient_number: 1,
          ingredient_name: "Bread",
          instructions: "turn your enemy into a flea",
      },
      {
          recipe_id: 3,
          ingredient_number: 3,
          ingredient_name: "Bread",
          instructions: "mail the box to yourself and when it arrives...",
      },
      {
          recipe_id: 4,
          ingredient_number: 1,
          ingredient_name: "Bread",
          instructions: "write a bot to randomly like posts and follow pages",
      },
      {
          recipe_id: 4,
          ingredient_number: 3,
          ingredient_name: "Bread",
          instructions:
              "try to ignore the persisent feeling of loneliness and disconnection",
      },
      {
          recipe_id: 4,
          ingredient_number: 2,
          ingredient_name: "Bread",
          instructions: "watch instagram followers increase",
      },
      { recipe_id: 5, ingredient_number: 3, instructions: "burn a witch" },
      {
          recipe_id: 5,
          ingredient_number: 4,
          ingredient_name: "Bread",
          instructions: "...and quest some more",
      },
      { recipe_id: 5, ingredient_number: 1, instructions: "quest" },
      { recipe_id: 5, ingredient_number: 2, instructions: "...and quest" },
      {
          recipe_id: 6,
          ingredient_number: 4,
          instructions: "seamlessly take their place",
      },
      {
          recipe_id: 6,
          ingredient_number: 3,
          instructions: "artfully craft accessories",
      },
      { recipe_id: 6, ingredient_number: 2, instructions: "procure facial hair" },
      {
          recipe_id: 6,
          ingredient_number: 1,
          instructions: "steal coworker's name tag",
      },
  ]);
};
