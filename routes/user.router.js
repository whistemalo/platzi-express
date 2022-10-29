
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


module.exports = router;
