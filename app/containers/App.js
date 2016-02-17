import React from 'react';
import Home from '../components/Home';
import BoardPage from '../components/BoardPage';

class App extends React.Component{
 constructor(props){
   super(props);
   this.router = this.router.bind(this);
   this.updateRoute = this.updateRoute.bind(this);
   this.state = { route: 'home', params: {} };
 }
 updateRoute(route, params = {}){
   this.setState({ route: route, params: params });
 }
 router(){
   switch(this.state.route){
     case 'home':
       return(<Home router={this.updateRoute}/>);
       break;
     case 'board':
       return(<BoardPage router={this.updateRoute} {...this.state.params}/>);
   }
 }
 render() {
   return(<div>
            { this.router() }
          </div>);
 }
}

export default App;
