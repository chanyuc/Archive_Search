const mysql = require('mysql');

const dbName = process.env.DB_NAME_TEST;
const dbUser = process.env.DB_USER_TEST;
const dbPassword = process.env.DB_PASSWORD_TEST;
const dbHost = process.env.DB_HOST_TEST;

const connection = mysql.createConnection({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbName
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

module.exports = connection;
