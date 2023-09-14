const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // Solo necesario si estás usando Heroku
});

app.use(express.json());

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.json({ message: 'API JS Silabos funcionando' });
});

// Rutas API - Agrega tus rutas aquí

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
