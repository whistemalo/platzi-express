const express = require('express');
const routerAPI = require('./routes/index.routes');

const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));
routerAPI(app);
app.listen(port, () => console.log(`Corriendo en el puerto ${port}!`));
