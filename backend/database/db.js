const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'staff_management',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

db.connect((err) => {
  if (err) {
    console.log('\n⚠️  MySQL connection failed. Switching to in-memory database.');
    console.log('   Error:', err.message);
    console.log('   Using in-memory data for development.\n');
    process.env.USE_MEMORY_DB = 'true';
  } else {
    console.log('\n✓ Connected to MySQL database successfully\n');
  }
});

module.exports = db;
