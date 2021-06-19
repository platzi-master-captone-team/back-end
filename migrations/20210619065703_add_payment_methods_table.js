exports.up = async (knex) => {
  await knex.schema.createTable('payment_methods', (table) => {
    table.increments('id').primary();
    table.string('name', 10).notNullable();
    table.timestamp('createdAt', 10).notNullable();
    table.timestamp('updatedAt', 10).notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('payment_methods');
};
