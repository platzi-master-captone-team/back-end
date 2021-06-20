const Database = module.exports;

const knex = require('knex');
const knexConfig = require('../../knexfile');

Database.db = knex(knexConfig);
