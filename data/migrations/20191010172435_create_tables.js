
exports.up = function(knex) {
    return knex.schema
      .createTable('recipes', tbl => {
          tbl.increments(); // unique id
          tbl.string('name', 255).notNullable();
          tbl.text('description');
          tbl.string('prep_time', 50);
          tbl.string('cook_time', 50);
      })
  
      .createTable('ingredients', tbl => {
          tbl.increments(); // unique id
          tbl.string('name', 255).notNullable();
      })
  
      .createTable('ingredients_per_recipe', tbl => {
          tbl.increments(); // unique id
          
          tbl
              .integer('recipe_id')
              .unsigned()
              .notNullable()
              .references('id') // this + below = attaches to foreign key
              .inTable('recipes') // ^
              .onUpdate('CASCADE')
              .onDelete('RESTRICT');
  
          tbl 
              .integer('ingredient_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('ingredients')
              .onUpdate('CASCADE')
              .onDelete('RESTRICT')
  
          tbl.string('ingredient_amount', 258).notNullable();
      })    
  
      .createTable('recipe_steps', tbl => {
          tbl.increments(); // unique id
  
          tbl
          .integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id') // this + below = attaches to foreign key
          .inTable('recipes') // ^
          .onUpdate('CASCADE')
          .onDelete('RESTRICT');
  
          tbl.integer('step_number');
  
          tbl.text('description');
      })
  };
  
  exports.down = function(knex) {
    return knex.schema 
      .dropTableIfExists('recipe_steps')
      .dropTableIfExists('ingredients_per_recipe')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipes');
  };