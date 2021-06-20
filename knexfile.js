const assert = require('assert');

let PG_CONNECTION;

if (process.env.NODE_ENV !== 'production') {
  PG_CONNECTION = 'postgresql://postgres:capstone_pass@localhost:5433/postgres';
} else {
  PG_CONNECTION = process.env.PG_CONNECTION;
}

assert(PG_CONNECTION, 'PG_CONNECTION must be provided');

module.exports = {
  client: 'pg',
  connection: PG_CONNECTION,
};
