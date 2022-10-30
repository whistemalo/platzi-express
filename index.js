const express = require('express');
const routerAPI = require('./routes/index.routes');
const cors = require('cors');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = 3000;
app.use(express.json());

// const whitelist = ['http://localhost:8080', 'http://localhost:8000'];
// const corsOptions = {
//   origin: (origin, callback) => {
//     const existe = whitelist.some((dominio) => dominio === origin);
//     if (existe) {
//       callback(null, true);
//     } else {
//       callback(new Error('No permitido por CORS'));
//     }
//   },
// };

// app.use(cors(corsOptions));

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

routerAPI(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);



// app.listen(port, () => console.log(`Corriendo en el puerto ${port}!`));
app.listen(port);
