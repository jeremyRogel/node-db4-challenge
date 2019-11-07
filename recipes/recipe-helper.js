const db = require ('../data/db-config');

module.exports = {
    find,
    findById,
    findIngredients,
    findSteps
}

function find() {
    return db('recipes')
}

function findById(id) {
    return db('recipes')
        .where({ id })
        .first();
}

function findIngredients(recipeId) {
    return db('ingredients')
        .join('recipes', 'recipes.id', 'ingredients.recipe_id')
        .select('recipes.name', 'ingredients.id', 'ingredients.name')
        .where({ recipe_id: recipeId });
}

function findSteps(recipeId) {
    return db('recipe_steps') 
        .join('recipes', 'recipes.id', 'recipe_steps.recipe_id')
        .select('recipes.name', 'recipe_steps.id', 'recipe_steps.step_number', 'recipe_steps.description')
        .where({ recipe_id: recipeId });
}