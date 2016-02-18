import React from 'react';
import Lists from '../components/lists/Lists';

class BoardPage extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
     return(<div>
              <Lists boardId={this.props.id}/>
            </div>);
  }
}

export default BoardPage;
