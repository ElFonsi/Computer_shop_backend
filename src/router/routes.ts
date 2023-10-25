import express from 'express'
const inicial = express.Router()

inicial.get('/', (_, res) => {
    res.send('The sedulous hyena ate the antelope!');
  });
  
  const lista=[
    {nombre:"PLaca Madre",
    modelo:"B500",
    precio:110,
    pais_de_origen:"China"
  },

  {nombre:"Placa de video",
  modelo:"1660",
  precio:1000,
  pais_de_origen:"China"
}

];  
inicial.get('/home', (_, res) => {
  const preciosaltos = lista.filter((lista) => lista.precio > 100);

    res.send(preciosaltos);
  });


export default inicial
  
  