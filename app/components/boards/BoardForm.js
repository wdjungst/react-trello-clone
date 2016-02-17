import React, {Component} from 'react';
import $ from 'jquery';

class BoardForm extends Component {
 constructor(props) {
   super(props);
 }
 addBoard(e){
   e.preventDefault();
   $.ajax({
     url: '/boards',
     type: 'POST',
     dataType: 'JSON',
     data: { name: this.refs.name.value }
   }).done( board => {
     this.props.addBoard(board);
     this.refs.name.value = null;
   }).fail( msg => {
     console.log(msg);
   })
 }
 render() {
   return (<div className='center'>
             <form onSubmit={(e) => this.addBoard(e)}>
               <input type='text' placeholder='Name' ref='name' />
               <button className='btn' type='submit'>Add Board</button>
             </form>
           </div>);
 }
}

export default BoardForm;
