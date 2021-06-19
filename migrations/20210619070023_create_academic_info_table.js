exports.up = async (knex) => {
  await knex.schema.createTable('academic_info', (table) => {
    table.increments('id').primary();
    table.integer('time_unit_id').unsigned().notNullable();
    table.foreign('time_unit_id').references('id').inTable('time_units');
    table.string('title', 100);
    table.string('institution_name', 100);
    table.integer('duration', 5);
    table.string('repositorie', 200);
    table.timestamp('createdAt', 10).notNullable();
    table.timestamp('updatedAt', 10).notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('academic_info');
};
