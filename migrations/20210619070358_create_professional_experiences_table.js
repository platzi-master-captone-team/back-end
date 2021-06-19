exports.up = async (knex) => {
  await knex.schema.createTable('professional_experiences', (table) => {
    table.increments('id').primary();
    table.integer('time_unit_id').unsigned().notNullable();
    table.foreign('time_unit_id').references('id').inTable('time_units');
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('id').inTable('users');
    table.string('companie', 45).notNullable();
    table.string('job_title', 45).notNullable();
    table.integer('duration', 5).notNullable();
    table.timestamp('createdAt', 10).notNullable();
    table.timestamp('updatedAt', 10).notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('professional_experiences');
};
