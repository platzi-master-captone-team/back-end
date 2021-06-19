const assert = require('assert');

const { PG_CONNECTION } = process.env;

assert(PG_CONNECTION, 'PG_CONNECTION must be provided');

module.exports = {
  client: 'pg',
  connection: PG_CONNECTION,
};
