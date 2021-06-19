exports.up = async (knex) => {
  await knex.schema.createTable('slots', (table) => {
    table.increments('id').primary();
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('id').inTable('users');
    table.timestamp('start_at', 20);
    table.timestamp('end_at', 20);
    table.string('timezone', 100);
    table.timestamp('createdAt', 10).notNullable();
    table.timestamp('updatedAt', 10).notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('slots');
};
