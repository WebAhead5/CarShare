const fs = require('fs');
const path = require('path');

const dbConnection = require('../db_connection');

const sqlPath = path.join(__dirname, '../db_build.sql');
const sql = fs.readFileSync(sqlPath).toString();


const runDbBuild = cb => {
    dbConnection.query(sql, (err, res) => {
        if (err) return cb(err);
        cb(null, res);
    });
};

module.exports = runDbBuild;