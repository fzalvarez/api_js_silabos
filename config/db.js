// db.js

const { Pool } = require('pg');

// Configura la conexión a la base de datos PostgreSQL
const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  port: 5432, // Puerto de la base de datos PostgreSQL
  ssl: { rejectUnauthorized: false } // Configuración SSL para AWS RDS (requerido según tu URL)
});

module.exports = db;
