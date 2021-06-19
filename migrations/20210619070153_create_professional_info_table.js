exports.up = async (knex) => {
  await knex.schema.createTable('professional_info', (table) => {
    table.increments('id').primary();
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('id').inTable('users');
    table.integer('area_technologie_id').unsigned().notNullable();
    table.foreign('area_technologie_id').references('id').inTable('area_technologies');
    table.float('hourly_rate');
    table.string('methodologie', 45);
    table.text('bio');
    table.string('cv', 200);
    table.string('linkedin', 100);
    table.string('web_page', 100);
    table.string('repositorie', 200);
    table.timestamp('createdAt', 10).notNullable();
    table.timestamp('updatedAt', 10).notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('professional_info');
};
