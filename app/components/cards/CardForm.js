import React, {Component} from 'react';
import $ from 'jquery';

class CardForm extends Component{
  constructor(props){
    super(props);
    this.addCard = this.addCard.bind(this);
  }
  addCard(e){
    e.preventDefault();
    $.ajax({
      url: '/cards',
      type: 'POST',
      dataType: 'JSON',
      data: { name: this.refs.name.value, description: this.refs.description.value, listId: this.props.listId }
    }).done( card => {
      this.props.addCard(card);
      this.refs.name.value = null;
      this.refs.description.value = null;
    }).fail( msg => {
      console.log(msg);
    });
  }
  render(){
    return(<div className='center'>
             <form onSubmit={(e) => this.addCard(e)}>
               <input type='text' placeholder='Title' ref='name' />
               <textarea ref='description'></textarea>
               <button className='btn' type='submit'>Add Card</button>
             </form>
           </div>);
  }
}

export default CardForm;
