exports.seed = function(knex) {
    return knex('ingredients').insert([
      { name: 'noodles' }, // 1
      { name: 'beef'}, // 2
      { name: 'water'}, // 3
    ]);
  };