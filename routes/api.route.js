const express = require('express');
const router = express.Router();

router.get('/states', (req, res)=>{
  res.send('states');
})

module.exports = router;