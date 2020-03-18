const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/housesell', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
// console.log('mongodb connected');
/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('1');
});

module.exports = router;
