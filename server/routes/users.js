const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/housesell', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
console.log('mongodb connected');
const userSchema = mongoose.Schema({
  acc: String,
  pwd: String
});
const userModel = mongoose.model('user', userSchema, 'user');
router.post('/login', function(req, res, next) {
  userModel.find({ acc: req.body.acc, pwd: req.body.pwd }).exec((err, data) => {
    if (err) throw err;
    if (data.length > 0) {
      res.send(data[0]);
    } else {
      res.send('0');
    }
  });
});
router.post('/reg', (req, res) => {
  res.send('1');
});

module.exports = router;
