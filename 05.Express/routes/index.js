var express = require('express');
var router = express.Router();
let Food = require('../models/food');

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express', description: 'Hello Express!!!' });
});

router.get('/index', (req, res, next) => {
  Food.find({}).limit(100).sort({name: 1}).select({
      name: 1,
      description: 1,
      created_at: 1,
      status: 1
  }).exec((err, foods) => {
    if (err) {
        res.json({
            result_code: 9,
            result_detail: null,
            result_error: err
        });
    } else {
        res.json({
            result_code: 0,
            result_detail: foods,
            result_error: null
        });
    }
  });
});

router.post('/create', (req, res, next) => {
    const newFood = new Food({
        name: req.body.name,
        description: req.body.description
    });
    newFood.save((err) => {
        if (err) {
            res.json({
                result_code: 9,
                result_detail: null,
                result_error: err
            });
        } else {
            res.json({
                result_code: 0,
                result_detail: newFood,
                result_error: null
            });
        }
    })
});

router.get('/show', (req, res, next) => {
  let foodId = require('mongoose').Types.ObjectId(req.query.food_id);
  Food.findById(foodId, (err, food) => {
    if (err) {
        res.json({
            result_code: 9,
            result_detail: null,
            result_error: err
        });
    } else {
        res.json({
            result_code: 0,
            result_detail: food,
            result_error: null
        });
    }
  });
});

router.get('/get_by_criteria', (req, res, next) => {
  let criteria = {
    name: new RegExp(req.query.name, "i") // i: case-insensitive <=> where name like "%abc%" in sql
  };
  const limit = parseInt(req.query.limit) > 0 ? parseInt(req.query.limit) : 100;
  Food.find(criteria).limit(limit).sort({name: 1}).select({
      name: 1,
      descriptiom: 1,
      status: 1,
      created_at: 1
  }).exec((err, foods) => {
    if (err) {
        res.json({
            result_code: 9,
            result_detail: null,
            result_error: err
        });
    } else {
        res.json({
            result_code: 0,
            result_detail: foods,
            result_error: null
        });
    }
  });
});

module.exports = router;
