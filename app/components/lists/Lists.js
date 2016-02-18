import React, {Component} from 'react';
import List from './List';
import ListForm from './ListForm';
import $ from 'jquery';

class Lists extends Component {
 constructor(props){
   super(props);
   this.addList = this.addList.bind(this);
   this.getLists = this.getLists.bind(this);
   this.state = { lists: [] };
 }
 componentDidMount(){
   this.getLists();
 }
 getLists(){
   $.ajax({
     url: '/lists',
     type: 'GET',
     dataType: 'JSON',
     data: { boardId: this.props.boardId }
   }).done( lists => {
     this.setState({ lists: lists });
   }).fail( msg => {
     console.log(msg)
   });
 }
 addList(list){
   let lists = this.state.lists;
   lists.push(list);
   this.setState({ list: list });
 }
 render() {
   let lists = this.state.lists.map( list => {
     return(<List refresh={this.getLists} key={`list-${list._id}`} {...list} />);
   });
   return (<div>
             <ListForm addList={this.addList} boardId={this.props.boardId} />
             <div className='row'>
               { lists }
             </div>
           </div>);
 }
}

export default Lists
