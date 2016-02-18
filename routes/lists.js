var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var List = mongoose.model('List');
var Card = mongoose.model('Card');

router.get('/', function(req, res, next) {
  var query = List.find({});
  query.where('boardId', req.query.boardId);
  query.exec( function( err, lists, count ) {
    res.json(lists);
  });
});

router.get('/blah', function(req, res, next) {
  res.render('list', {title: 'List'});
});

router.post('/', function(req, res, next) {
  new List({
    name: req.body.name,
    boardId: req.body.boardId
  }).save( function(err, list, count) {
    res.json(list);
  });
});

router.put('/:id', function( req, res, next ){
  List.findByIdAndUpdate(
    req.params.id,
    { $set: { name: req.body.name }},
    function(err, list) {
      res.json(list);
    });
});

router.delete('/:id', function(req, res) {
  List.findById(req.params.id, function(err, list) {
    list.remove();
    Card.find({'listId': req.query.id}).remove().exec( function(err, list) {
      res.status(200).send({success: true});
    });
  });
});

module.exports = router;
