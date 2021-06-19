exports.up = async (knex) => {
  await knex.schema.createTable('technologies', (table) => {
    table.increments('id').primary();
    table.string('name', 45).notNullable();
    table.integer('area_technologie_id').unsigned().notNullable();
    table.foreign('area_technologie_id').references('id').inTable('area_technologies');
    table.timestamp('createdAt', 10).notNullable();
    table.timestamp('updatedAt', 10).notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('technologies');
};
