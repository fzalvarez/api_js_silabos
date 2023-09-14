// db.js

const { Pool } = require('pg');

// Configura la conexión a la base de datos PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // Solo necesario si estás usando Heroku
});

module.exports = pool;
