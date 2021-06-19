exports.up = async (knex) => {
  await knex.schema.createTable('identifications', (table) => {
    table.increments('id').primary();
    table.string('type', 15).notNullable();
    table.timestamp('createdAt', 10).notNullable();
    table.timestamp('updatedAt', 10).notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('identifications');
};
