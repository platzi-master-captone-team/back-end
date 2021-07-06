const assert = require('assert');

let PG_CONNECTION;

if (process.env.NODE_ENV !== 'production') {
  PG_CONNECTION = 'postgresql://consultify_user:capstone_pass@database-consultify.co5mez5wygro.us-east-2.rds.amazonaws.com:5432/consultify';
} else {
  PG_CONNECTION = process.env.PG_CONNECTION;
}

assert(PG_CONNECTION, 'PG_CONNECTION must be provided');

module.exports = {
  client: 'pg',
  connection: PG_CONNECTION,
};
