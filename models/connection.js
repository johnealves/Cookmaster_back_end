const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'kfgk8u2ogtoylkq9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'lqh2abef9aj30ls7',
  password: 'aytq3xlj9xea43vg',
  database: 'osf898i7seo88lnz',
})

module.exports = connection;