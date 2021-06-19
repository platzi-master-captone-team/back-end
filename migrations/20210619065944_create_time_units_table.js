exports.up = async (knex) => {
  await knex.schema.createTable('time_units', (table) => {
    table.increments('id').primary();
    table.string('name', 45).notNullable();
    table.timestamp('createdAt', 10).notNullable();
    table.timestamp('updatedAt', 10).notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('time_units');
};
