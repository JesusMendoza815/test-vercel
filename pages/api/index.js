import 'dotenv/config'
import dbConnect from './libs/db.js'
import { server } from './server.js'

// No es necesario leer el puerto de process.env, Vercel manejará el puerto automáticamente.
// Eliminar la línea que contiene "SERVER_PORT".

//Archivo principal para conexión del server
dbConnect()
  .then(() => {
    // No es necesario pasar un puerto aquí, Vercel manejará el servidor.
    server.listen(() => {
      console.log('Server ready');
    })
  })
  .catch((err) => {
    console.log(err)
  })

export default server
