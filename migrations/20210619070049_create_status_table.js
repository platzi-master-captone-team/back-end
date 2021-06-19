exports.up = async (knex) => {
  await knex.schema.createTable('status', (table) => {
    table.increments('id').primary();
    table.string('name', 25);
    table.timestamp('createdAt', 10).notNullable();
    table.timestamp('updatedAt', 10).notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('status');
};
