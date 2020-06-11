const db = require("../data/connection.js");

module.exports = {
    add,
    addIngredient,
    update,
    find,
    findById,
    findIngredients,
    remove,

}

function find() {
    return db("recipes");
}

function add(recipe) {
    return db("recipes").insert(recipe, "id")
}

function addIngredient(ingredient, recipe_id) {
    return db("ingredients")
        .where(recipe_id)
        .insert(ingredient, "id")
}

function update(changes, id) {
    return db("recipes")
        .where({id})
        .update(changes, "id")
        .then(() => {
            return findById(id)
        });
}

function findById(id) {
    return db("recipes")
        .where({id})
        .first()
}

function remove(id) {
    return db("recipes")
        .where({id})
        .del()
}

function findIngredients(id) {
    return db("ingredients")
        .join("recipes", "recipes.id", "ingredients.recipe_id")
        .select("ingredients.id", "recipes.recipe_name", "ingredients.ingredient_number", "ingredients.instructions")
        .where("recipe_id", id)
}