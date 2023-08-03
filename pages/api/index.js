import 'dotenv/config'
import dbConnect from './libs/db.js';
import { server } from './server.js';

const { SERVER_PORT } = process.env

//Archivo principal para conxion del server
dbConnect()
  .then(() => {
    server.listen(SERVER_PORT, () => {
      console.log(`Server listening on port ${SERVER_PORT}`);
    });
  })
  .catch(err => {
    console.log(err);
  });