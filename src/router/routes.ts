import express from 'express'
const inicial = express.Router()

inicial.get('/', (_, res) => {
    res.send('The sedulous hyena ate the antelope!');
  });

inicial.get('/home', (_, res) => {
    res.send('Casa');
  });


export default inicial
  
  