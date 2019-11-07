exports.seed = function(knex) {
    return knex('ingredients_per_recipe').insert([
      { recipe_id: 1, ingredient_id: 1, ingredient_amount: '1 small to medium sized box' }, // 1
      { recipe_id: 1, ingredient_id: 2, ingredient_amount: 'As much as you desire (not an entire cow though)'}, // 2
      { recipe_id: 1, ingredient_id: 3, ingredient_amount: 'A cup or several (ask your mother when in doubt)'}, // 3
    ]);
  };