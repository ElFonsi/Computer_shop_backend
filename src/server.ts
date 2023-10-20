import express from 'express';
import inicial from './router/routes'

const app = express();
const port = 8080;

app.use('/',inicial)


app.listen(port,()=>{
    console.log(port);
});