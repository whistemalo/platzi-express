const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/productos', (req, res) => res.json({
    productos: [
        { nombre: 'Producto 1', precio: 100 },
        { nombre: 'Producto 2', precio: 200 },
    ]
}));

app.listen(port, () => console.log(`Corriendo en el puerto ${port}!`));


