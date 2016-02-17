import React, {Component} from 'react';
import CardForm from '../cards/CardForm.js';
import Card from '../cards/Card.js';
import $ from 'jquery';

class List extends Component {
  constructor(props){
    super(props);
    this.getCards = this.getCards.bind(this);
    this.addCard = this.addCard.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.state = { cards: [] };
  }
  componentDidMount(){
    this.getCards();
  }
  addCard(card){
    let cards = this.state.cards;
    cards.push(card);
    this.setState({ cards: cards });
  }
  getCards(){
    $.ajax({
      url: '/cards',
      type: 'GET',
      dataType: 'JSON',
      data: { listId: this.props._id }
    }).done( cards => {
      this.setState({ cards: cards });
    }).fail( msg => {
      console.log(msg);
    });
  }
  deleteList(){
    $.ajax({
      url: `/lists/${this.props._id}`,
      type: 'DELETE',
      dataType: 'JSON',
      data: { id: this.props._id }
    }).done( result => {
      this.props.refresh();
    }).fail( msg => {
      console.log(msg);
    });
  }
  render(){
    let cards = this.state.cards.map( card => {
      return(<Card key={`card-${card._id}`} refresh={this.getCards} {...card} />);
    });
    return(<div className='col m2'>
             <button onClick={this.deleteList} className='btn'>Delete</button>
             <h3 className='center'>{this.props.name}</h3>
             <hr/>
             <CardForm addCard={this.addCard} listId={this.props._id} />
             {cards}
           </div>);
  }
}

export default List
