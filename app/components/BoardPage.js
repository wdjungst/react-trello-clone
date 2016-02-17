import React from 'react';
import Lists from './lists/Lists';

class BoardPage extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
     return(<div>
              <Lists router={this.props.router} boardId={this.props.id}/>
            </div>);
  }
}

export default BoardPage;
