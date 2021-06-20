exports.up = async (knex) => {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.integer('role_id').unsigned().notNullable();
    table.foreign('role_id').references('id').inTable('roles');
    table.integer('country_id').unsigned().notNullable();
    table.foreign('country_id').references('id').inTable('contries');
    table.integer('payment_method_id').unsigned().notNullable();
    table.foreign('payment_method_id').references('id').inTable('payment_methods');
    table.string('name', 45).notNullable();
    table.string('email', 45).notNullable();
    table.string('password', 50).notNullable();
    table.integer('phone_number').unsigned();
    table.timestamp('createdAt', 10).notNullable();
    table.timestamp('updatedAt', 10).notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('users');
};
