exports.up = async (knex) => {
  await knex.schema.createTable('bookings', (table) => {
    table.increments('id').primary();
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('id').inTable('users');
    table.integer('statu_id').unsigned().notNullable();
    table.foreign('statu_id').references('id').inTable('status');
    table.timestamp('start_at', 20);
    table.timestamp('end_at', 20);
    table.string('timezone', 100);
    table.timestamp('createdAt', 10).notNullable();
    table.timestamp('updatedAt', 10).notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('bookings');
};
