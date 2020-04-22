
const { Pool } = require('pg');


//require('dotenv').config();
require('env2')('./config.env');

const connectionString = process.env.DB_URL;
if (!process.env.DB_URL) throw new Error('ENVIRMENT VARIABLE DB_URL MUST BE SET');

module.exports = new Pool({
    connectionString, ssl: !connectionString.includes('localhost')
})
