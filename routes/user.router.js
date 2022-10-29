
const express = require('express');


const router = express.Router();

//para enviar datos por post se puede utilizar localhost/users?limit=10&offset=20

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay limit ni offset');
  }
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { body } = req;
  res.json({
    message: 'Usuario actualizado',
    data: body,
    id,
  })
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'Usuario eliminado',
    id,
  })
});


module.exports = router;
