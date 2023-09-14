// app.js

const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db'); // Importa la configuración de la base de datos desde la carpeta config

dotenv.config(); // Carga las variables de entorno desde .env

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Rutas de ejemplo
app.get('/', (req, res) => {
  res.json({ message: 'API JS Silabos funcionando' });
});

// Rutas de Silabos - Puedes importar y usar silabos.js aquí

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
