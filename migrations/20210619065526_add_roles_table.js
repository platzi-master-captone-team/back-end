exports.up = async (knex) => {
  await knex.schema.createTable('roles', (table) => {
    table.increments('id').primary();
    table.string('name', 15).notNullable();
    table.timestamp('createdAt', 10).notNullable();
    table.timestamp('updatedAt', 10).notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('roles');
};
