import React, {Component} from 'react';
import Board from './Board';
import BoardForm from './BoardForm';
import $ from 'jquery';

class Boards extends Component {
 constructor(props){
   super(props);
   this.getBoards = this.getBoards.bind(this);
   this.addBoard = this.addBoard.bind(this);
   this.state = { boards: [] };
 }
 componentDidMount(){
   this.getBoards();
 }
 getBoards(){
   $.ajax({
     url: '/boards',
     type: 'GET',
     dataType: 'JSON'
   }).done( boards => {
     this.setState({ boards: boards });
   }).fail( msg => {
     console.log(msg)
   });
 }
 addBoard(board){
   let boards = this.state.boards;
   boards.push(board);
   this.setState({ boards: boards });
 }
 render() {
   let boards = this.state.boards.map( board => {
     return(<Board router={this.props.router} refresh={this.getBoards} key={`board-${board._id}`} {...board} />);
   });
   return (<div>
             <BoardForm addBoard={this.addBoard}/>
             <div className='row'>
               { boards }
             </div>
           </div>);
 }
}

export default Boards
