
exports.seed = function(knex) {
  return knex('recipes').insert([
    {recipe_name: 'Unbuttered Toast'},
    {recipe_name: 'Frozen Water'},
    {recipe_name: 'Bland Bread'},
    {recipe_name: 'Rich man/poor man rice'},
    {recipe_name: 'Glass of Moldy Milk'},
    {recipe_name: 'Vegaterian Delight'}
  ]);
};

