import React, {Component} from 'react';
import Boards from './boards/Boards';

class Home extends Component {
 render() {
   return (<div>
             <Boards router={this.props.router}/>
           </div>);
 }
}

export default Home
