const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/housesell', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
console.log('mongodb connected');

//构建house骨架
const houseSchema = mongoose.Schema({
  name: String,
  area: String,
  type: String,
  point: Number,
  price: Number,
  range: String,
  src: String,
  id: Number
});
//创建house Model
const houseModel = mongoose.model('house', houseSchema, 'house');
router.get('/', (req, res, next) => {
  houseModel.find().exec((err, data) => {
    if (err) throw err;
    if (data.length > 0) {
      res.send(data);
    } else {
      res.send('0');
    }
  });
});

module.exports = router;
