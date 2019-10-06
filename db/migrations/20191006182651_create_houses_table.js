exports.up = function(knex) {
  return knex.schema.createTable('houses', houses_table => {
    houses_table.increments('house_id').primary();
    houses_table
      .string('house_name')
      .notNullable()
      .unique();
    houses_table.string('founder').notNullable();
    houses_table.string('animal').notNullable();
  });
};

exports.down = function(knex) {};
