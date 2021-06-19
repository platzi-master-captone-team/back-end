exports.up = async (knex) => {
    await knex.schema.createTable('contries', (table) => {
        table.increments('id').primary()
        table.integer('identification_type_id').unsigned().notNullable()
        table.foreign('identification_type_id').references('id').inTable('identifications')
        table.string('name', 15).notNullable()
        table.string('code', 15).notNullable()
        table.timestamp('createdAt', 10).notNullable()
        table.timestamp('updatedAt', 10).notNullable()
    })
}

exports.down = async (knex) => {
    await knex.schema.dropTable('contries')
}
