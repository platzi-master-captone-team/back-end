exports.up = async (knex) => {
  await knex.schema.createTable('consultor_technologies', (table) => {
    table.increments('id').primary();
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('id').inTable('users');
    table.integer('technologie_id').unsigned().notNullable();
    table.foreign('technologie_id').references('id').inTable('technologies');
    table.timestamp('createdAt', 10).notNullable();
    table.timestamp('updatedAt', 10).notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('consultor_technologies');
};
