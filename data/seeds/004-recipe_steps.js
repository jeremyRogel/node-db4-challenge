exports.seed = function(knex) {
    return knex('recipe_steps').insert([
      { recipe_id: 1, step_number: 1, description: 'Turn oven to 200-400 degress or so' }, // 1
      { recipe_id: 1, step_number: 2, description: 'Wait approximately 3 minutes (until the water starts making sounds)'}, // 2
      { recipe_id: 1, step_number: 3, description: 'Throw your ingredients inside the pot, stir, and pray it tastes okay'}, // 3
    ]);
  };