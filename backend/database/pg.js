// PostgreSQL connection setup
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.PG_HOST || 'localhost',
  user: process.env.PG_USER || 'postgres',
  password: process.env.PG_PASSWORD || '',
  database: process.env.PG_DATABASE || 'staff_management',
  port: process.env.PG_PORT ? parseInt(process.env.PG_PORT) : 5432,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

pool.on('error', (err) => {
  console.log('\n⚠️  PostgreSQL connection failed. Switching to in-memory database.');
  console.log('   Error:', err.message);
  console.log('   Using in-memory data for development.\n');
  process.env.USE_MEMORY_DB = 'true';
});

module.exports = pool;