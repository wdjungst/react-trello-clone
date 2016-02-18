var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Board = new Schema({
  name: { type: String, required: true },
  description: String
});

var List = new Schema({
  name: { type: String, required: true },
  boardId: { type: String, required: true }
});

var Card = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  listId: { type: String, required: true },
});

mongoose.model( 'Board', Board );
mongoose.model( 'List', List );
mongoose.model( 'Card', Card );
var uristring =
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/trello-clone';
mongoose.connect(uristring);
