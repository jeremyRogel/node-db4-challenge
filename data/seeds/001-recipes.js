exports.seed = function(knex) {
    return knex('recipes').insert([
      { name: 'spaghetti', description: 'The most basic pasta', prep_time: '1 minute', cook_time: '10 minutes' }, // 1
      { name: 'tacos', description: "Who doesn't love them?", prep_time: '0 minutes (unless you chop veggies)', cook_time: '7.5 minutes' }, // 2
      { name: 'omelet', description: 'Omnomnomnomeltte', prep_time: '2 seconds', cook_time: '5 minutes'}, // 3
    ]);
  };