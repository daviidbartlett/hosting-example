exports.up = function(knex) {
  // { name: 'Harry Potter', house: 'Gryffindor' },
  return knex.schema.createTable('wizards', wizards_table => {
    wizards_table.increments('wizard_id').primary();
    wizards_table.string('wizard_name').notNullable();
    wizards_table.integer('house_id').references('houses.house_id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('wizards');
};
