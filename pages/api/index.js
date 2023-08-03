import 'dotenv/config'
import dbConnect from './libs/db.js';
import { server } from './server.js';

// No es necesario leer el puerto de process.env, Vercel manejará el puerto automáticamente.
// Eliminar la línea que contiene "SERVER_PORT".

//Archivo principal para conexión del server
dbConnect()
  .then(() => {
    // No es necesario pasar un puerto aquí, Vercel manejará el servidor.
    server.listen((req, res) => {
      res.end('Hello from Express.js on Vercel!')
    });
  })
  .catch(err => {
    console.log(err);
  });