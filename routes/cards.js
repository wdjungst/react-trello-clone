var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Card = mongoose.model('Card');

router.get('/', function(req, res, next) {
  var query = Card.find({});
  query.where('listId', req.query.listId);
  query.exec( function( err, cards, count ) {
    res.json(cards);
  });
});

router.post('/', function(req, res, next) {
  new Card({
    name: req.body.name,
    description: req.body.description,
    listId: req.body.listId
  }).save( function(err, card, count) {
    res.json(card);
  });
});

router.put('/:id', function( req, res, next ){
  Card.findByIdAndUpdate(
    req.params.id,
    { $set: { name: req.body.name, description: req.body.description }},
    function(err, card) {
      res.json(card);
    });
});

router.delete('/:id', function(req, res) {
  Card.findById(req.params.id, function(err, card) {
    card.remove();
    res.status(200).send({success: true});
  });
});

module.exports = router;
